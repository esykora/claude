// Simple Cloud Sync for Cross-Device Progress
// Uses JSONBin.io for anonymous, free cloud storage
class CloudSync {
    constructor() {
        this.apiUrl = 'https://api.jsonbin.io/v3/b';
        this.username = null;
        this.binId = null;
        this.syncTimeout = null;
        this.init();
    }

    init() {
        // Load saved username and bin ID
        this.username = localStorage.getItem('cloud-sync-username');
        this.binId = localStorage.getItem('cloud-sync-bin-id');

        // Setup sync button
        const syncBtn = document.getElementById('syncBtn');
        if (syncBtn) {
            syncBtn.addEventListener('click', () => this.handleSync());
        }

        // Update UI
        this.updateSyncStatus();

        // Auto-load progress if configured
        if (this.username && this.binId) {
            this.loadProgress();
        }
    }

    updateSyncStatus() {
        const syncBtn = document.getElementById('syncBtn');
        const statusSpan = document.getElementById('syncStatus');

        if (!syncBtn || !statusSpan) return;

        if (this.username) {
            statusSpan.textContent = `Synced as: ${this.username}`;
            syncBtn.classList.remove('btn-secondary');
            syncBtn.classList.add('btn-primary');
        } else {
            statusSpan.textContent = 'Cloud Sync';
            syncBtn.classList.add('btn-secondary');
            syncBtn.classList.remove('btn-primary');
        }
    }

    async handleSync() {
        if (!this.username) {
            this.promptForUsername();
        } else {
            const action = confirm(`Synced as: ${this.username}\n\nChoose an action:\nOK = Sync now\nCancel = Change settings`);
            if (action) {
                await this.syncProgress();
            } else {
                this.showSettings();
            }
        }
    }

    showSettings() {
        const options = `Cloud Sync Settings\n\nUsername: ${this.username || 'None'}\n\nOptions:\n1. Change username\n2. Reset sync\n3. Cancel`;
        const choice = prompt(options);

        if (choice === '1') {
            this.promptForUsername();
        } else if (choice === '2') {
            if (confirm('Reset cloud sync? Your local progress will remain.')) {
                localStorage.removeItem('cloud-sync-username');
                localStorage.removeItem('cloud-sync-bin-id');
                this.username = null;
                this.binId = null;
                this.updateSyncStatus();
                alert('Cloud sync reset!');
            }
        }
    }

    promptForUsername() {
        const instructions = `Choose a username for cloud sync.\n\nYour progress will be saved to the cloud using this username.\nUse the same username on other devices to sync your progress.\n\nUsername must be:\n- 3-20 characters\n- Letters, numbers, dash, underscore only\n- Unique (first come, first served)`;

        const username = prompt(instructions + '\n\nEnter your username:');

        if (username && username.trim()) {
            const cleaned = username.trim().toLowerCase();

            // Validate username
            if (!/^[a-z0-9_-]{3,20}$/.test(cleaned)) {
                alert('Invalid username! Must be 3-20 characters (letters, numbers, dash, underscore only).');
                return;
            }

            this.username = cleaned;
            localStorage.setItem('cloud-sync-username', this.username);
            this.updateSyncStatus();
            alert(`Username set to: ${this.username}\n\nYour progress will now sync to the cloud!`);
            this.syncProgress();
        }
    }

    async syncProgress(debounce = false) {
        // Debounce auto-syncs to avoid excessive API calls
        if (debounce) {
            if (this.syncTimeout) {
                clearTimeout(this.syncTimeout);
            }
            this.syncTimeout = setTimeout(() => this.syncProgress(false), 3000);
            return;
        }

        if (!this.username) return;

        const statusSpan = document.getElementById('syncStatus');

        try {
            const originalText = statusSpan ? statusSpan.textContent : '';
            if (statusSpan) statusSpan.textContent = 'Syncing...';

            const progress = {
                username: this.username,
                data: app.progress,
                lastSync: new Date().toISOString()
            };

            if (this.binId) {
                // Update existing bin
                await this.updateBin(progress);
            } else {
                // Create new bin
                const binId = await this.createBin(progress);
                this.binId = binId;
                localStorage.setItem('cloud-sync-bin-id', binId);
            }

            if (statusSpan) {
                statusSpan.textContent = 'Synced!';
                setTimeout(() => {
                    statusSpan.textContent = `Synced as: ${this.username}`;
                }, 2000);
            }

        } catch (error) {
            console.error('Sync error:', error);
            if (statusSpan) {
                statusSpan.textContent = 'Sync failed';
                setTimeout(() => {
                    statusSpan.textContent = `Synced as: ${this.username}`;
                }, 3000);
            }
        }
    }

    async createBin(data) {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Bin-Name': `agentcore-prep-${this.username}`,
                'X-Bin-Private': 'false'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();
        return result.metadata.id;
    }

    async updateBin(data) {
        const response = await fetch(`${this.apiUrl}/${this.binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    }

    async loadProgress() {
        if (!this.binId) return null;

        try {
            const response = await fetch(`${this.apiUrl}/${this.binId}/latest`);

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const result = await response.json();

            if (result.record && result.record.data) {
                // Check if cloud data is newer than local
                const cloudTime = new Date(result.record.lastSync);
                const localTime = app.progress.lastAccessed ? new Date(app.progress.lastAccessed) : new Date(0);

                if (cloudTime > localTime) {
                    if (confirm(`Found cloud progress from ${cloudTime.toLocaleString()}.\n\nLoad this progress?`)) {
                        app.progress = result.record.data;
                        app.saveProgress();
                        location.reload();
                    }
                }
            }
        } catch (error) {
            console.error('Error loading from cloud:', error);
        }

        return null;
    }
}

// Initialize Cloud Sync
window.cloudSync = null;
document.addEventListener('DOMContentLoaded', () => {
    window.cloudSync = new CloudSync();
});
