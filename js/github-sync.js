// GitHub Gist Sync for Cross-Device Progress
class GitHubSync {
    constructor() {
        this.clientId = 'Ov23liVlHLU9Y5vHx9Qo'; // Public GitHub OAuth App (read-only for gists)
        this.gistId = null;
        this.accessToken = null;
        this.init();
    }

    init() {
        // Load saved token and gist ID
        this.accessToken = localStorage.getItem('github-token');
        this.gistId = localStorage.getItem('github-gist-id');

        // Setup sync button
        const syncBtn = document.getElementById('syncBtn');
        if (syncBtn) {
            syncBtn.addEventListener('click', () => this.handleSync());
        }

        // Update UI
        this.updateSyncStatus();

        // Handle OAuth callback
        this.handleOAuthCallback();
    }

    updateSyncStatus() {
        const syncBtn = document.getElementById('syncBtn');
        const statusSpan = document.getElementById('syncStatus');

        if (!syncBtn || !statusSpan) return;

        if (this.accessToken) {
            statusSpan.textContent = 'Sync Progress';
            syncBtn.classList.remove('btn-secondary');
            syncBtn.classList.add('btn-primary');
        } else {
            statusSpan.textContent = 'Login with GitHub';
            syncBtn.classList.add('btn-secondary');
            syncBtn.classList.remove('btn-primary');
        }
    }

    async handleSync() {
        if (!this.accessToken) {
            this.startOAuth();
        } else {
            await this.syncProgress();
        }
    }

    startOAuth() {
        const redirectUri = window.location.origin + window.location.pathname;
        const scope = 'gist';
        const state = Math.random().toString(36).substring(7);

        localStorage.setItem('oauth-state', state);

        const authUrl = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}`;

        window.location.href = authUrl;
    }

    async handleOAuthCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const savedState = localStorage.getItem('oauth-state');

        if (code && state && state === savedState) {
            try {
                // Note: In production, you'd exchange this code for a token via your backend
                // For now, we'll show instructions to user
                this.showGistSetupInstructions(code);

                // Clean up URL
                window.history.replaceState({}, document.title, window.location.pathname);
            } catch (error) {
                console.error('OAuth error:', error);
                alert('Authentication failed. Please try again.');
            }
        }
    }

    showGistSetupInstructions(code) {
        const instructions = `
GitHub OAuth requires a backend server to complete authentication securely.

For now, you can manually create a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "AgentCore Bootcamp Prep"
4. Select scope: "gist"
5. Click "Generate token"
6. Copy the token and paste it in the prompt below
        `;

        alert(instructions);

        const token = prompt('Paste your GitHub Personal Access Token:');
        if (token) {
            this.accessToken = token;
            localStorage.setItem('github-token', token);
            this.updateSyncStatus();
            this.syncProgress();
        }
    }

    async syncProgress() {
        const statusSpan = document.getElementById('syncStatus');

        try {
            statusSpan.textContent = 'Syncing...';

            const progress = app.progress;

            if (this.gistId) {
                // Update existing gist
                await this.updateGist(progress);
                statusSpan.textContent = 'Synced!';
            } else {
                // Create new gist
                const gistId = await this.createGist(progress);
                this.gistId = gistId;
                localStorage.setItem('github-gist-id', gistId);
                statusSpan.textContent = 'Synced!';
            }

            setTimeout(() => {
                statusSpan.textContent = 'Sync Progress';
            }, 2000);

        } catch (error) {
            console.error('Sync error:', error);
            statusSpan.textContent = 'Sync Failed';
            alert('Failed to sync progress. Please check your token and try again.');

            setTimeout(() => {
                statusSpan.textContent = 'Sync Progress';
            }, 3000);
        }
    }

    async createGist(progress) {
        const response = await fetch('https://api.github.com/gists', {
            method: 'POST',
            headers: {
                'Authorization': `token ${this.accessToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: 'AgentCore Bootcamp Prep - Learning Progress',
                public: false,
                files: {
                    'agentcore-progress.json': {
                        content: JSON.stringify(progress, null, 2)
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        return data.id;
    }

    async updateGist(progress) {
        const response = await fetch(`https://api.github.com/gists/${this.gistId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `token ${this.accessToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    'agentcore-progress.json': {
                        content: JSON.stringify(progress, null, 2)
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    }

    async loadFromGist() {
        if (!this.accessToken || !this.gistId) return null;

        try {
            const response = await fetch(`https://api.github.com/gists/${this.gistId}`, {
                headers: {
                    'Authorization': `token ${this.accessToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const data = await response.json();
            const content = data.files['agentcore-progress.json']?.content;

            if (content) {
                return JSON.parse(content);
            }
        } catch (error) {
            console.error('Error loading from gist:', error);
        }

        return null;
    }
}

// Initialize GitHub sync
let githubSync;
document.addEventListener('DOMContentLoaded', () => {
    githubSync = new GitHubSync();

    // Try to load progress from Gist on startup
    if (githubSync.accessToken && githubSync.gistId) {
        githubSync.loadFromGist().then(progress => {
            if (progress && confirm('Load progress from cloud?')) {
                localStorage.setItem('agentcore-progress', JSON.stringify(progress));
                location.reload();
            }
        });
    }
});
