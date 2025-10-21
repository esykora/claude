# AgentCore Bootcamp Prep

A comprehensive training application to prepare for the AWS re:Invent AgentCore Bootcamp. Built specifically for product managers and non-engineers who want to gain technical knowledge about AI agents, Strands SDK, and Amazon Bedrock AgentCore.

## Overview

This browser-based learning platform helps you prepare for the **Build AI Agents Ready for Enterprise** bootcamp (TNC302) at AWS re:Invent. It features:

- **9 Structured Modules** covering Python, AI agents, AWS Bedrock, AgentCore, and Strands SDK
- **Interactive Lessons** with code examples and explanations
- **Self-Assessments** to test your knowledge
- **Readiness Score** tracking your bootcamp preparedness
- **Curated Resources** including audio/video content for commute learning
- **Cross-Device Sync** using GitHub Gist
- **AI Assistant Guides** with prompts for Cursor, Kiro, or other coding assistants

## Features

### Dashboard
- **Readiness Score** (0-100%) based on lessons, modules, and assessments
- **Countdown Timer** showing time until bootcamp
- **Progress Tracking** across all modules
- **Recommended Focus** suggesting what to learn next

### Learning Modules

#### Must-Know Modules (~39 hours)
- **Module 0**: Bootcamp Overview & Setup (1 hour)
- **Module 1**: Python Fundamentals for AI (8 hours)
- **Module 2**: AI Agent Concepts & Terminology (4 hours)
- **Module 3**: AWS Fundamentals & Bedrock (6 hours)
- **Module 4**: Amazon Bedrock AgentCore Deep Dive (6 hours)
- **Module 5**: Strands SDK Fundamentals (4 hours)
- **Module 6**: Building Your First Agent (6 hours)
- **Module 9**: Pre-Bootcamp Capstone Project (4 hours)

#### Nice-to-Know Modules (~6 hours)
- **Module 7**: Enterprise Patterns & Best Practices (3 hours)
- **Module 8**: Advanced AgentCore Features (3 hours)

### Resources

- **Audio/Video**: Curated podcasts, YouTube videos, and talks (perfect for commute learning)
- **Documentation**: Official docs for Strands SDK, AgentCore, AWS, and Python
- **Tutorials**: Step-by-step guides from FreeCodeCamp, AWS blogs, and Medium
- **AI Assistant Guides**: Prompt templates for Cursor/Kiro to help with coding

## Getting Started

### Quick Start

1. **Clone this repository**
   ```bash
   git clone [your-repo-url]
   cd agentcore-bootcamp-prep
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then open http://localhost:8000
     ```

3. **Start learning!**
   - Begin with Module 0 to understand the bootcamp and setup your environment
   - Work through modules sequentially
   - Track your readiness score

### GitHub Pages Deployment

To deploy this app on GitHub Pages:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main` (or your branch name)
   - Folder: `/ (root)`
   - Save

3. **Access your app**
   - Your app will be available at: `https://[your-username].github.io/[repo-name]/`

### Progress Sync Setup

To sync your progress across devices:

1. **Create a GitHub Personal Access Token**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Name: "AgentCore Bootcamp Prep"
   - Scope: Check "gist"
   - Generate token and copy it

2. **In the app**
   - Click "Sync with GitHub" button
   - Follow the instructions to paste your token
   - Your progress will be saved to a private Gist

3. **On other devices**
   - Open the app
   - Click "Sync with GitHub"
   - Enter the same token
   - Choose to load progress from cloud

## Usage Guide

### Navigation

- **Dashboard**: View overall progress and readiness score
- **Modules**: Browse and complete learning modules
- **Assessments**: Take quizzes to test your knowledge
- **Resources**: Access curated learning materials

### Learning Path

**Recommended 6-Week Schedule:**

- **Week 1**: Modules 0-1 (Setup + Python fundamentals)
- **Week 2**: Modules 2-3 (AI concepts + AWS basics)
- **Week 3**: Module 4 (AgentCore deep dive)
- **Week 4**: Modules 5-6 (Strands SDK + First agent)
- **Week 5**: Modules 7-8 (Enterprise patterns - optional)
- **Week 6**: Module 9 (Capstone project)

**Target**: 75%+ readiness score before bootcamp

### Using AI Coding Assistants

This app includes AI assistant prompts designed for use with Cursor, Kiro, or GitHub Copilot:

**Example Prompts:**
- "Explain this Python code in simple terms, focusing on what a product manager needs to understand"
- "Help me create a Strands SDK tool that [does X]. Include type hints, docstring, and error handling"
- "Explain [concept] as if I'm a product manager with limited coding background"

Find more prompts in the **Resources → AI Assistant Guides** tab.

### Assessments

- Each module has a self-assessment quiz
- Passing score: 70%
- Unlimited retries allowed
- Scores contribute 30% to your readiness score

### Exporting Progress

Click "Export Progress" on the dashboard to download your progress as JSON. This serves as a backup.

## Bootcamp Information

**Event**: Build AI Agents Ready for Enterprise (TNC302)
**Type**: Bootcamp (Hands-on)
**Level**: 300 - Advanced
**Duration**: ~2-3 hours
**Location**: AWS re:Invent
**Date**: First Tuesday of December

**What to Bring:**
- Laptop (required for hands-on exercises)
- AWS account credentials (may be provided)
- Confidence in Python basics
- Curiosity and questions!

**What You'll Build:**
Production-ready AI agents using Strands SDK and Amazon Bedrock AgentCore

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: localStorage + GitHub Gist (for sync)
- **Hosting**: GitHub Pages (static site)
- **No backend required**

## Project Structure

```
agentcore-bootcamp-prep/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # xAI-inspired styling
├── js/
│   ├── data.js            # Module content and resources
│   ├── app.js             # Core application logic
│   └── github-sync.js     # GitHub Gist integration
├── modules/               # (Future: individual module files)
├── assets/                # (Future: images, etc.)
└── README.md              # This file
```

## Customization

### Adding More Content

Edit `js/data.js` to add more modules, lessons, or resources:

```javascript
const MODULES = [
    {
        id: 3,
        title: "Your New Module",
        priority: "must-know",
        estimatedHours: 4,
        description: "Description here",
        lessons: [
            {
                id: "m3-l1",
                title: "Lesson Title",
                content: `<h3>Content HTML here</h3>`
            }
        ],
        quiz: [
            {
                question: "Question text",
                options: ["A", "B", "C", "D"],
                correct: 0  // Index of correct answer
            }
        ]
    }
];
```

### Changing Bootcamp Date

Edit `js/data.js`:

```javascript
const BOOTCAMP_DATE = new Date('2024-12-03T09:00:00');
```

### Styling

Edit `css/styles.css` to customize colors, fonts, or layout. The current theme is inspired by xAI's clean, minimalist design.

## Troubleshooting

### Progress not saving
- Check browser's localStorage is enabled
- Try Export Progress as backup
- Use GitHub Gist sync for cloud backup

### GitHub sync not working
- Verify token has "gist" permission
- Check token hasn't expired
- Clear localStorage and re-authenticate

### Modules not loading
- Check browser console for errors
- Ensure all JS files are loaded
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Future Enhancements

Planned improvements:
- [ ] Complete Modules 3-9 with full lesson content
- [ ] Add hands-on coding exercises with live Python interpreter
- [ ] Video tutorials embedded in lessons
- [ ] Mobile app version
- [ ] Progress sharing with peers
- [ ] Gamification and badges

## Contributing

This is a personal learning project, but suggestions are welcome!

## Resources

### Official Documentation
- [Strands SDK Docs](https://strandsagents.com/latest/documentation/docs/)
- [AgentCore Developer Guide](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/)
- [AWS Bedrock Docs](https://docs.aws.amazon.com/bedrock/)

### Community
- [Strands SDK GitHub](https://github.com/strands-agents/sdk-python)
- [AgentCore Samples](https://github.com/awslabs/amazon-bedrock-agentcore-samples)

## License

This project is for educational purposes. AWS, Amazon Bedrock, and related trademarks are property of Amazon.com, Inc.

## Acknowledgments

- AWS for creating AgentCore and supporting the Strands SDK
- Anthropic for Claude (the LLM that powers many of these agents)
- The open-source community for building amazing AI tools

---

**Good luck with your learning journey! See you at the bootcamp!**
