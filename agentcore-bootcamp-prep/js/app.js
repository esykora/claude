// Main Application Logic
class AgentCorePrep {
    constructor() {
        this.progress = this.loadProgress();
        this.currentModule = null;
        this.currentLesson = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderDashboard();
        this.renderModules();
        this.renderAssessments();
        this.renderResources();
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 60000); // Update every minute
    }

    // Progress Management
    loadProgress() {
        const saved = localStorage.getItem('agentcore-progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            completedLessons: [],
            completedModules: [],
            quizScores: {},
            lastAccessed: null
        };
    }

    saveProgress() {
        this.progress.lastAccessed = new Date().toISOString();
        localStorage.setItem('agentcore-progress', JSON.stringify(this.progress));
        this.renderDashboard(); // Update readiness score
    }

    // Event Listeners
    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Modal close
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            });
        });

        // Click outside modal to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // Quick action buttons
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.continueLearn ing();
        });

        document.getElementById('takeAssessmentBtn').addEventListener('click', () => {
            this.switchTab('assessment');
        });

        document.getElementById('viewResourcesBtn').addEventListener('click', () => {
            this.switchTab('resources');
        });

        document.getElementById('exportProgressBtn').addEventListener('click', () => {
            this.exportProgress();
        });

        // Resource category tabs
        document.querySelectorAll('.resource-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchResourceCategory(e.target.dataset.category);
            });
        });

        // Module filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterModules(e.target.dataset.filter);
            });
        });
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }

    // Dashboard
    renderDashboard() {
        this.updateReadinessScore();
        this.updateProgressStats();
        this.updateModuleProgressList();
        this.updateRecommendedFocus();
    }

    calculateReadinessScore() {
        const totalLessons = MODULES.reduce((sum, m) => sum + (m.lessons?.length || 0), 0);
        const completedLessons = this.progress.completedLessons.length;
        const lessonScore = totalLessons > 0 ? (completedLessons / totalLessons) * 30 : 0;

        const totalModules = MODULES.filter(m => m.priority === 'must-know').length;
        const completedModules = this.progress.completedModules.length;
        const moduleScore = totalModules > 0 ? (completedModules / totalModules) * 40 : 0;

        const quizScores = Object.values(this.progress.quizScores);
        const avgQuizScore = quizScores.length > 0
            ? (quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length)
            : 0;
        const quizScore = (avgQuizScore / 100) * 30;

        return Math.round(lessonScore + moduleScore + quizScore);
    }

    updateReadinessScore() {
        const score = this.calculateReadinessScore();
        const scoreElement = document.getElementById('readinessScore');
        const circleElement = document.getElementById('readinessCircle');
        const messageElement = document.getElementById('readinessMessage');

        // Animate score
        scoreElement.textContent = score;

        // Update circle (circumference = 2 * PI * r = 2 * 3.14159 * 90 ≈ 565.48)
        const circumference = 565.48;
        const offset = circumference - (score / 100) * circumference;
        circleElement.style.strokeDashoffset = offset;

        // Update message
        if (score >= 75) {
            messageElement.textContent = "You're ready for the bootcamp!";
            messageElement.style.color = 'var(--success)';
        } else if (score >= 50) {
            messageElement.textContent = "Good progress! Keep learning.";
            messageElement.style.color = 'var(--accent-secondary)';
        } else if (score >= 25) {
            messageElement.textContent = "You're on your way. Stay consistent.";
            messageElement.style.color = 'var(--text-secondary)';
        } else {
            messageElement.textContent = "Start learning to build your readiness score";
            messageElement.style.color = 'var(--text-secondary)';
        }
    }

    updateProgressStats() {
        document.getElementById('completedModules').textContent = this.progress.completedModules.length;
        document.getElementById('completedLessons').textContent = this.progress.completedLessons.length;
    }

    updateModuleProgressList() {
        const container = document.getElementById('moduleProgressList');
        container.innerHTML = '';

        MODULES.slice(0, 6).forEach(module => { // Show first 6 modules
            const isCompleted = this.progress.completedModules.includes(module.id);
            const completedLessons = module.lessons?.filter(l =>
                this.progress.completedLessons.includes(l.id)
            ).length || 0;
            const totalLessons = module.lessons?.length || 0;

            const item = document.createElement('div');
            item.className = `module-progress-item ${isCompleted ? 'completed' : completedLessons > 0 ? 'in-progress' : ''}`;
            item.innerHTML = `
                <span class="module-name">Module ${module.id}</span>
                <span class="module-status">${completedLessons}/${totalLessons} lessons</span>
            `;
            container.appendChild(item);
        });
    }

    updateRecommendedFocus() {
        const container = document.getElementById('recommendedFocus');

        // Find first incomplete must-know module
        const nextModule = MODULES.find(m =>
            m.priority === 'must-know' && !this.progress.completedModules.includes(m.id)
        );

        if (nextModule) {
            const completedLessons = nextModule.lessons?.filter(l =>
                this.progress.completedLessons.includes(l.id)
            ).length || 0;

            if (completedLessons === 0) {
                container.innerHTML = `<p>Start with <strong>${nextModule.title}</strong> (${nextModule.estimatedHours} hours)</p>`;
            } else {
                container.innerHTML = `<p>Continue with <strong>${nextModule.title}</strong> (${completedLessons}/${nextModule.lessons.length} lessons done)</p>`;
            }
        } else {
            container.innerHTML = `<p>Excellent! You've completed all must-know modules. Try the nice-to-know modules or take the final assessment.</p>`;
        }
    }

    updateCountdown() {
        const now = new Date();
        const diff = BOOTCAMP_DATE - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
        } else {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
        }
    }

    // Modules
    renderModules() {
        const container = document.getElementById('modulesList');
        container.innerHTML = '';

        MODULES.forEach(module => {
            const card = this.createModuleCard(module);
            container.appendChild(card);
        });
    }

    createModuleCard(module) {
        const isCompleted = this.progress.completedModules.includes(module.id);
        const completedLessons = module.lessons?.filter(l =>
            this.progress.completedLessons.includes(l.id)
        ).length || 0;
        const totalLessons = module.lessons?.length || 0;

        const card = document.createElement('div');
        card.className = `module-card ${isCompleted ? 'completed' : ''}`;
        card.dataset.priority = module.priority;

        card.innerHTML = `
            <div class="module-header">
                <div>
                    <div class="module-title">${module.title}</div>
                    <div class="module-meta">
                        <span>${module.estimatedHours} hours</span>
                        <span>•</span>
                        <span>${completedLessons}/${totalLessons} lessons</span>
                    </div>
                </div>
                <div class="module-badge ${module.priority}">${module.priority.replace('-', ' ')}</div>
            </div>
            <p class="module-description">${module.description}</p>
            ${module.lessons && module.lessons.length > 0 ? `
                <div class="module-lessons">
                    ${module.lessons.map(lesson => `
                        <div class="lesson-item" data-lesson-id="${lesson.id}" data-module-id="${module.id}">
                            <div class="lesson-checkbox ${this.progress.completedLessons.includes(lesson.id) ? 'checked' : ''}"></div>
                            <span>${lesson.title}</span>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color: var(--text-secondary); font-style: italic;">Coming soon - refer to Resources tab for curated learning materials</p>'}
        `;

        // Add click handlers for lessons
        if (module.lessons) {
            card.querySelectorAll('.lesson-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    const lessonId = e.currentTarget.dataset.lessonId;
                    const moduleId = parseInt(e.currentTarget.dataset.moduleId);
                    this.openLesson(moduleId, lessonId);
                });
            });
        }

        return card;
    }

    filterModules(filter) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        // Filter modules
        document.querySelectorAll('.module-card').forEach(card => {
            if (filter === 'all' || card.dataset.priority === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    openLesson(moduleId, lessonId) {
        const module = MODULES.find(m => m.id === moduleId);
        const lesson = module?.lessons?.find(l => l.id === lessonId);

        if (!lesson) return;

        this.currentModule = module;
        this.currentLesson = lesson;

        const modal = document.getElementById('moduleModal');
        document.getElementById('modalTitle').textContent = lesson.title;
        document.getElementById('modalBody').innerHTML = lesson.content;

        // Setup navigation buttons
        const currentIndex = module.lessons.indexOf(lesson);
        const prevBtn = document.getElementById('modalPrevBtn');
        const nextBtn = document.getElementById('modalNextBtn');

        prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentIndex < module.lessons.length - 1 ? 'block' : 'none';

        prevBtn.onclick = () => {
            this.openLesson(moduleId, module.lessons[currentIndex - 1].id);
        };

        nextBtn.onclick = () => {
            // Mark current lesson as complete
            if (!this.progress.completedLessons.includes(lessonId)) {
                this.progress.completedLessons.push(lessonId);
                this.checkModuleCompletion(moduleId);
                this.saveProgress();
                this.renderModules(); // Refresh module list
            }
            this.openLesson(moduleId, module.lessons[currentIndex + 1].id);
        };

        modal.classList.add('active');
    }

    checkModuleCompletion(moduleId) {
        const module = MODULES.find(m => m.id === moduleId);
        if (!module || !module.lessons) return;

        const allLessonsComplete = module.lessons.every(l =>
            this.progress.completedLessons.includes(l.id)
        );

        if (allLessonsComplete && !this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
        }
    }

    continueLearning() {
        // Find first incomplete lesson in first incomplete module
        const nextModule = MODULES.find(m => !this.progress.completedModules.includes(m.id));

        if (nextModule && nextModule.lessons) {
            const nextLesson = nextModule.lessons.find(l =>
                !this.progress.completedLessons.includes(l.id)
            ) || nextModule.lessons[0];

            this.switchTab('modules');
            this.openLesson(nextModule.id, nextLesson.id);
        }
    }

    // Assessments
    renderAssessments() {
        const container = document.getElementById('assessmentsList');
        container.innerHTML = '';

        MODULES.forEach(module => {
            if (!module.quiz || module.quiz.length === 0) return;

            const score = this.progress.quizScores[module.id];
            const card = document.createElement('div');
            card.className = 'card';
            card.style.marginBottom = '1rem';

            card.innerHTML = `
                <h3>${module.title} Assessment</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    ${module.quiz.length} questions • ${score !== undefined ? `Score: ${score}%` : 'Not taken'}
                </p>
                <button class="btn-primary" onclick="app.takeQuiz(${module.id})">
                    ${score !== undefined ? 'Retake Assessment' : 'Take Assessment'}
                </button>
            `;

            container.appendChild(card);
        });
    }

    takeQuiz(moduleId) {
        const module = MODULES.find(m => m.id === moduleId);
        if (!module || !module.quiz) return;

        const modal = document.getElementById('quizModal');
        document.getElementById('quizTitle').textContent = `${module.title} Assessment`;

        const body = document.getElementById('quizBody');
        body.innerHTML = module.quiz.map((q, i) => `
            <div class="quiz-question" data-question="${i}">
                <h4>Question ${i + 1}</h4>
                <p>${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((opt, j) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${i}" value="${j}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('submitQuizBtn').onclick = () => {
            this.submitQuiz(moduleId, module.quiz);
        };

        modal.classList.add('active');
    }

    submitQuiz(moduleId, quiz) {
        let correct = 0;

        quiz.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) {
                correct++;
            }
        });

        const score = Math.round((correct / quiz.length) * 100);
        this.progress.quizScores[moduleId] = score;
        this.saveProgress();

        const body = document.getElementById('quizBody');
        body.innerHTML = `
            <div class="quiz-result ${score >= 70 ? 'pass' : 'fail'}">
                <h3>${score >= 70 ? 'Passed!' : 'Keep Learning'}</h3>
                <p style="font-size: 2rem; margin: 1rem 0;">${score}%</p>
                <p>You got ${correct} out of ${quiz.length} questions correct.</p>
                ${score < 70 ? '<p style="margin-top: 1rem;">Review the module lessons and try again.</p>' : ''}
            </div>
        `;

        document.getElementById('submitQuizBtn').textContent = 'Close';
        document.getElementById('submitQuizBtn').onclick = () => {
            document.getElementById('quizModal').classList.remove('active');
            this.renderAssessments();
        };
    }

    // Resources
    renderResources() {
        this.switchResourceCategory('audio');
    }

    switchResourceCategory(category) {
        // Update active tab
        document.querySelectorAll('.resource-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === category) {
                tab.classList.add('active');
            }
        });

        // Render resources
        const container = document.getElementById('resourcesList');
        const resources = RESOURCES[category] || [];

        container.innerHTML = resources.map(resource => `
            <div class="resource-card">
                <div class="resource-title">${resource.title}</div>
                <p class="resource-description">${resource.description}</p>
                ${resource.url ? `
                    <a href="${resource.url}" target="_blank" class="resource-link">
                        View Resource →
                    </a>
                ` : ''}
                ${resource.duration ? `<p style="color: var(--text-tertiary); font-size: 0.85rem; margin-top: 0.5rem;">Duration: ${resource.duration}</p>` : ''}
                ${resource.level ? `<p style="color: var(--text-tertiary); font-size: 0.85rem; margin-top: 0.5rem;">Level: ${resource.level}</p>` : ''}
                ${resource.type ? `<p style="color: var(--text-tertiary); font-size: 0.85rem; margin-top: 0.5rem;">Type: ${resource.type}</p>` : ''}
                ${resource.priority ? `<span class="module-badge must-know" style="display: inline-block; margin-top: 0.5rem;">${resource.priority}</span>` : ''}
            </div>
        `).join('');
    }

    // Export Progress
    exportProgress() {
        const dataStr = JSON.stringify(this.progress, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `agentcore-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        URL.revokeObjectURL(url);
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new AgentCorePrep();
});
