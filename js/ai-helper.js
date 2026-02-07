/**
 * AI Helper Module for P&C Insurance Study Guide
 * Uses Google Gemini 2.5 Flash API
 */

/**
 * AI Configuration
 * API key is stored in localStorage - users set their own key in Settings
 * Get a free API key at: https://aistudio.google.com/app/apikey
 */
const AI_CONFIG = {
    model: 'gemini-2.5-flash',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
    getApiKey: () => localStorage.getItem('gemini_api_key') || ''
};

// Note: The API endpoint format is:
// https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
// Available models: gemini-2.5-flash, gemini-2.5-pro, gemini-2.5-flash-lite

/**
 * Check if API key is configured
 */
function isAPIKeyConfigured() {
    return !!AI_CONFIG.getApiKey();
}

/**
 * Show API key setup modal
 */
function showAPIKeySetup() {
    const existing = document.getElementById('apiKeyModal');
    if (existing) existing.remove();

    const currentKey = AI_CONFIG.getApiKey();
    const maskedKey = currentKey ? currentKey.substring(0, 10) + '...' + currentKey.substring(currentKey.length - 4) : '';

    const modal = document.createElement('div');
    modal.id = 'apiKeyModal';
    modal.className = 'ai-modal-overlay';
    modal.innerHTML = `
        <div class="ai-modal">
            <div class="ai-modal-header" style="background: linear-gradient(135deg, #059669, #047857);">
                <h3>AI Settings</h3>
                <button onclick="closeAPIKeyModal()" class="ai-close-btn">&times;</button>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <p class="text-gray-700 dark:text-gray-300 mb-4">
                        To use AI features, you need a free Google Gemini API key.
                    </p>
                    <ol class="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                        <li>1. Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-blue-600 hover:underline">Google AI Studio</a></li>
                        <li>2. Sign in with your Google account</li>
                        <li>3. Click "Create API Key"</li>
                        <li>4. Copy and paste it below</li>
                    </ol>
                </div>

                ${currentKey ? `
                <div class="mb-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p class="text-sm text-green-700 dark:text-green-400">
                        <strong>Current key:</strong> ${maskedKey}
                    </p>
                </div>
                ` : ''}

                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        ${currentKey ? 'Update' : 'Enter'} API Key:
                    </label>
                    <input type="password" id="apiKeyInput"
                        placeholder="AIza..."
                        class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        value="">
                </div>

                <div class="flex gap-3">
                    <button onclick="saveAPIKey()" class="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                        Save Key
                    </button>
                    ${currentKey ? `
                    <button onclick="removeAPIKey()" class="px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
                        Remove
                    </button>
                    ` : ''}
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    Your API key is stored locally in your browser and never sent to any server except Google's API.
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById('apiKeyInput').focus();
}

function closeAPIKeyModal() {
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 200);
    }
}

function saveAPIKey() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (key) {
        localStorage.setItem('gemini_api_key', key);
        closeAPIKeyModal();
        // Show success message
        showToast('API key saved! AI features are now enabled.');
    } else {
        alert('Please enter a valid API key');
    }
}

function removeAPIKey() {
    if (confirm('Remove your API key? AI features will be disabled.')) {
        localStorage.removeItem('gemini_api_key');
        closeAPIKeyModal();
        showToast('API key removed.');
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.style.animation = 'fadeIn 0.3s ease';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// System prompt for P&C insurance context
const SYSTEM_PROMPT = `You are an expert P&C (Property & Casualty) insurance tutor helping a student prepare for their insurance licensing exam.

Your responses should be:
- Clear and concise (exam-focused)
- Use real-world examples when helpful
- Highlight key terms and concepts
- Point out common exam tricks or misconceptions
- Keep responses under 200 words unless more detail is requested

You're knowledgeable about:
- ISO policy forms and standardization
- Pure vs speculative risk
- Perils, hazards (physical, moral, morale)
- Indemnity, subrogation, insurable interest
- Policy structure (declarations, insuring agreement, exclusions, conditions, endorsements)
- CGL coverage, occurrence vs claims-made forms
- Retroactive dates and tail coverage
- All standard P&C insurance terminology`;

/**
 * Send a message to Gemini AI
 * @param {string} userMessage - The user's question
 * @param {string} context - Additional context (current card, question, etc.)
 * @returns {Promise<string>} - AI response text
 */
async function askAI(userMessage, context = '') {
    const apiKey = AI_CONFIG.getApiKey();

    if (!apiKey) {
        showAPIKeySetup();
        throw new Error('API key not configured');
    }

    const fullPrompt = context
        ? `Context: ${context}\n\nStudent Question: ${userMessage}`
        : userMessage;

    try {
        const response = await fetch(`${AI_CONFIG.endpoint}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `${SYSTEM_PROMPT}\n\n${fullPrompt}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'API request failed');
        }

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    } catch (error) {
        console.error('AI Error:', error);
        throw error;
    }
}

/**
 * Generate practice scenarios based on chapter
 * @param {string} chapter - Chapter number or 'all'
 * @returns {Promise<string>} - Generated scenario
 */
async function generateScenario(chapter) {
    const chapterTopics = {
        '1': 'fundamentals including risk types, perils, hazards, indemnity, subrogation, negligence, and liability types',
        '2': 'policy structure including declarations, definitions, insuring agreements, exclusions, endorsements, conditions, and claims settlement',
        '3': 'Commercial General Liability (CGL) including occurrence vs claims-made forms, retroactive dates, tail coverage, covered contracts, and premises/operations vs products/completed operations',
        'all': 'all P&C insurance topics from fundamentals to CGL coverage'
    };

    const topic = chapterTopics[chapter] || chapterTopics['all'];

    return askAI(
        `Create a realistic exam-style scenario question about ${topic}.
        Format it as:
        SCENARIO: [A brief real-world situation]
        QUESTION: [What the student needs to determine]

        Make it similar to what would appear on an actual P&C licensing exam.`,
        ''
    );
}

/**
 * Analyze weak areas from quiz results
 * @param {Array} incorrectQuestions - Array of {question, userAnswer, correctAnswer, explanation}
 * @returns {Promise<string>} - Analysis and recommendations
 */
async function analyzeWeakAreas(incorrectQuestions) {
    if (!incorrectQuestions || incorrectQuestions.length === 0) {
        return "Congratulations! You didn't miss any questions. Keep up the great work!";
    }

    const summary = incorrectQuestions.map((q, i) =>
        `${i + 1}. Question: "${q.question}"\n   Your answer: ${q.userAnswer}\n   Correct: ${q.correctAnswer}`
    ).join('\n\n');

    return askAI(
        `Analyze these incorrect quiz answers and provide:
        1. Common themes or patterns in what the student is missing
        2. Specific concepts to review
        3. Memory tips or tricks for these topics
        4. 2-3 key points to remember for the exam

        Keep your response focused and actionable.`,
        `Incorrect Answers:\n${summary}`
    );
}

/**
 * Create and show AI chat modal
 * @param {string} context - Context for the conversation
 * @param {string} title - Modal title
 * @param {Array} suggestedPrompts - Quick prompt buttons
 */
function showAIChatModal(context, title = 'Ask AI Tutor', suggestedPrompts = []) {
    // Remove existing modal if present
    const existing = document.getElementById('aiChatModal');
    if (existing) existing.remove();

    const defaultPrompts = [
        'Explain with an example',
        'Why is this important for the exam?',
        'What are common mistakes?'
    ];
    const prompts = suggestedPrompts.length > 0 ? suggestedPrompts : defaultPrompts;

    const modal = document.createElement('div');
    modal.id = 'aiChatModal';
    modal.className = 'ai-modal-overlay';
    modal.innerHTML = `
        <div class="ai-modal">
            <div class="ai-modal-header">
                <h3>${title}</h3>
                <button onclick="closeAIChatModal()" class="ai-close-btn">&times;</button>
            </div>
            <div class="ai-chat-container" id="aiChatContainer">
                <div class="ai-message ai-system">
                    <p>I'm your AI tutor! Ask me anything about this topic or use the quick prompts below.</p>
                </div>
            </div>
            <div class="ai-quick-prompts">
                ${prompts.map(p => `<button onclick="sendQuickPrompt('${p}')" class="ai-quick-btn">${p}</button>`).join('')}
            </div>
            <div class="ai-input-container">
                <input type="text" id="aiUserInput" placeholder="Type your question..." onkeypress="if(event.key==='Enter')sendAIMessage()">
                <button onclick="sendAIMessage()" class="ai-send-btn">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Store context for this conversation
    window.aiCurrentContext = context;

    // Focus input
    setTimeout(() => document.getElementById('aiUserInput').focus(), 100);
}

/**
 * Close AI chat modal
 */
function closeAIChatModal() {
    const modal = document.getElementById('aiChatModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 200);
    }
}

/**
 * Send quick prompt
 */
function sendQuickPrompt(prompt) {
    document.getElementById('aiUserInput').value = prompt;
    sendAIMessage();
}

/**
 * Send message in AI chat
 */
async function sendAIMessage() {
    const input = document.getElementById('aiUserInput');
    const message = input.value.trim();
    if (!message) return;

    const container = document.getElementById('aiChatContainer');

    // Add user message
    container.innerHTML += `
        <div class="ai-message ai-user">
            <p>${escapeHtml(message)}</p>
        </div>
    `;

    // Clear input
    input.value = '';

    // Add loading indicator
    const loadingId = 'loading-' + Date.now();
    container.innerHTML += `
        <div class="ai-message ai-assistant" id="${loadingId}">
            <div class="ai-loading">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;

    try {
        const response = await askAI(message, window.aiCurrentContext);

        // Replace loading with response
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) {
            loadingEl.innerHTML = `<p>${formatAIResponse(response)}</p>`;
        }
    } catch (error) {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) {
            loadingEl.innerHTML = `<p class="ai-error">Error: ${error.message || 'Unknown error'}</p>`;
        }
        console.error('AI Chat Error:', error);
    }

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

/**
 * Format AI response with basic markdown
 */
function formatAIResponse(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Create floating AI tutor button for chapter pages
 */
function createFloatingAIButton(chapterContext) {
    const btn = document.createElement('button');
    btn.id = 'floatingAIBtn';
    btn.className = 'floating-ai-btn';
    btn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
        <span>AI Tutor</span>
    `;
    btn.onclick = () => showAIChatModal(chapterContext, 'AI Study Tutor', [
        'Summarize this chapter',
        'What are the key exam points?',
        'Give me a practice question'
    ]);
    document.body.appendChild(btn);
}
