# P&C Insurance Study Guide - AI Powered

An interactive study guide for Property & Casualty Insurance licensing exam preparation, powered by Google Gemini AI.

## Features

- **3 Comprehensive Chapters**: Fundamentals, Policy Structure, and Commercial General Liability (CGL)
- **Interactive Flashcards**: Flip cards with confidence tracking and AI assistance
- **Practice Quizzes**: 15-question exam-style quizzes with explanations
- **AI Tutor**: Ask questions about any topic while studying
- **AI Scenario Generator**: Generate realistic exam-style scenarios
- **Weak Area Analyzer**: AI analyzes your quiz mistakes and gives study tips
- **Dark Mode**: Easy on the eyes for late-night study sessions
- **Progress Tracking**: Cookie-based progress saved locally

## Setup

### 1. Get a Google Gemini API Key (Free)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure the App

1. Open the study guide in your browser
2. Click the **Settings** (gear icon) in the top-right corner
3. Paste your API key and click "Save"

Your API key is stored locally in your browser and never sent anywhere except Google's API.

## Usage

### Study Flow
1. **Read Chapters** - Review the material with the AI Tutor available for questions
2. **Practice Flashcards** - Test your memory, ask AI for deeper explanations
3. **Take Quizzes** - Test your knowledge with exam-style questions
4. **Generate Scenarios** - Practice with AI-generated real-world situations
5. **Review Weak Areas** - Let AI analyze your mistakes and suggest focus areas

### AI Features
- **Ask AI About This** (Flashcards) - Get examples, exam tips, comparisons
- **Ask AI for More Details** (Quiz) - Understand why answers are right/wrong
- **AI Tutor** (Chapters) - Floating chat button for any questions
- **Scenario Generator** (Home) - Create practice scenarios
- **Weak Area Analyzer** (Quiz Results) - Personalized study recommendations

## Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- Tailwind CSS (via CDN)
- Google Gemini 2.5 Flash API
- LocalStorage for settings and progress

## File Structure

```
├── index.html              # Main page with chapter navigation
├── css/
│   └── styles.css          # Custom styles (flashcards, AI chat, etc.)
├── js/
│   └── ai-helper.js        # AI integration module
├── study-tools/
│   ├── flashcards.html     # Interactive flashcards
│   └── quiz.html           # Practice quizzes
└── casualty/
    ├── chapter-1/          # Fundamentals & Key Terms
    ├── chapter-2/          # Policy Structure
    └── chapter-3/          # Commercial General Liability
```

## License

For educational purposes only. Study content based on standard P&C insurance exam materials.

## Contributing

Feel free to submit issues and pull requests for improvements!
