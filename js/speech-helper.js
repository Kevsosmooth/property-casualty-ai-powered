/**
 * Speech Helper Module for P&C Insurance Study Guide
 * Text-to-Speech functionality using Web Speech API
 */

/**
 * Speech Configuration
 */
const SPEECH_CONFIG = {
    rate: 1.0,      // Normal speed
    pitch: 1.0,     // Normal pitch
    volume: 1.0     // Full volume
};

// Global state
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let isPaused = false;
let selectedVoice = null;

/**
 * Initialize speech synthesis and select best voice
 */
function initSpeech() {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported');
        return false;
    }

    // Load voices (may be async in some browsers)
    const loadVoices = () => {
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            selectedVoice = selectBestVoice(voices);
        }
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return true;
}

/**
 * Select the best English voice available
 */
function selectBestVoice(voices) {
    // Priority list of preferred voices (natural sounding ones)
    const preferredVoices = [
        'Google US English',
        'Google UK English Female',
        'Google UK English Male',
        'Microsoft Zira',
        'Microsoft David',
        'Samantha',
        'Daniel',
        'Karen',
        'Moira',
        'Alex'
    ];

    // Try to find a preferred voice
    for (const preferred of preferredVoices) {
        const voice = voices.find(v => v.name.includes(preferred));
        if (voice) return voice;
    }

    // Fall back to any English voice
    const englishVoice = voices.find(v =>
        v.lang.startsWith('en') &&
        (v.localService || v.name.includes('English'))
    );
    if (englishVoice) return englishVoice;

    // Last resort: first available voice
    return voices[0];
}

/**
 * Extract readable text from the main content
 */
function extractPageText() {
    const main = document.querySelector('main');
    if (!main) {
        return document.body.innerText;
    }

    // Clone to avoid modifying the page
    const clone = main.cloneNode(true);

    // Remove elements we don't want to read
    const removeSelectors = [
        'script',
        'style',
        'nav',
        'button',
        '.ai-modal-overlay',
        '.speech-controls-modal',
        '[aria-hidden="true"]'
    ];

    removeSelectors.forEach(selector => {
        clone.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Get text content and clean it up
    let text = clone.innerText;

    // Clean up the text
    text = text
        .replace(/\s+/g, ' ')           // Multiple spaces to single
        .replace(/\n{3,}/g, '\n\n')     // Multiple newlines to double
        .trim();

    return text;
}

/**
 * Start speaking the page content
 */
function speakPage() {
    if (!speechSynthesis) {
        showSpeechToast('Text-to-speech is not supported in your browser.');
        return;
    }

    // Stop any current speech
    stopSpeech();

    const text = extractPageText();
    if (!text) {
        showSpeechToast('No content found to read.');
        return;
    }

    currentUtterance = new SpeechSynthesisUtterance(text);

    // Apply settings
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
    }
    currentUtterance.rate = SPEECH_CONFIG.rate;
    currentUtterance.pitch = SPEECH_CONFIG.pitch;
    currentUtterance.volume = SPEECH_CONFIG.volume;

    // Event handlers
    currentUtterance.onstart = () => {
        isSpeaking = true;
        isPaused = false;
        updateSpeechButtonState();
        updateControlsState();
    };

    currentUtterance.onend = () => {
        isSpeaking = false;
        isPaused = false;
        updateSpeechButtonState();
        updateControlsState();
    };

    currentUtterance.onerror = (event) => {
        console.error('Speech error:', event.error);
        isSpeaking = false;
        isPaused = false;
        updateSpeechButtonState();
        updateControlsState();
    };

    speechSynthesis.speak(currentUtterance);
}

/**
 * Pause speech
 */
function pauseSpeech() {
    if (speechSynthesis && isSpeaking) {
        speechSynthesis.pause();
        isPaused = true;
        updateControlsState();
    }
}

/**
 * Resume speech
 */
function resumeSpeech() {
    if (speechSynthesis && isPaused) {
        speechSynthesis.resume();
        isPaused = false;
        updateControlsState();
    }
}

/**
 * Stop speech completely
 */
function stopSpeech() {
    if (speechSynthesis) {
        speechSynthesis.cancel();
        isSpeaking = false;
        isPaused = false;
        currentUtterance = null;
        updateSpeechButtonState();
        updateControlsState();
    }
}

/**
 * Toggle play/pause
 */
function toggleSpeech() {
    if (isSpeaking && !isPaused) {
        pauseSpeech();
    } else if (isPaused) {
        resumeSpeech();
    } else {
        speakPage();
    }
}

/**
 * Update the floating button state
 */
function updateSpeechButtonState() {
    const btn = document.getElementById('floatingSpeechBtn');
    if (btn) {
        if (isSpeaking && !isPaused) {
            btn.classList.add('speaking');
        } else {
            btn.classList.remove('speaking');
        }
    }
}

/**
 * Update controls modal state
 */
function updateControlsState() {
    const playPauseBtn = document.getElementById('speechPlayPauseBtn');
    const playPauseIcon = document.getElementById('speechPlayPauseIcon');
    const statusText = document.getElementById('speechStatus');

    if (playPauseBtn && playPauseIcon) {
        if (isSpeaking && !isPaused) {
            // Show pause icon
            playPauseIcon.innerHTML = `
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
            `;
            playPauseBtn.title = 'Pause';
        } else {
            // Show play icon
            playPauseIcon.innerHTML = `
                <path d="M8 5v14l11-7z" fill="currentColor"/>
            `;
            playPauseBtn.title = 'Play';
        }
    }

    if (statusText) {
        if (isSpeaking && !isPaused) {
            statusText.textContent = 'Reading...';
            statusText.className = 'text-sm text-green-600 dark:text-green-400';
        } else if (isPaused) {
            statusText.textContent = 'Paused';
            statusText.className = 'text-sm text-amber-600 dark:text-amber-400';
        } else {
            statusText.textContent = 'Ready';
            statusText.className = 'text-sm text-gray-500 dark:text-gray-400';
        }
    }
}

/**
 * Show speech controls modal
 */
function showSpeechControls() {
    const existing = document.getElementById('speechControlsModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'speechControlsModal';
    modal.className = 'speech-controls-modal';
    modal.innerHTML = `
        <div class="speech-controls-content">
            <div class="speech-controls-header">
                <h3>Read Aloud</h3>
                <button onclick="closeSpeechControls()" class="speech-close-btn">&times;</button>
            </div>
            <div class="speech-controls-body">
                <p id="speechStatus" class="text-sm text-gray-500 dark:text-gray-400 mb-4">Ready</p>

                <div class="speech-buttons">
                    <button id="speechPlayPauseBtn" onclick="toggleSpeech()" class="speech-control-btn speech-play-btn" title="Play">
                        <svg id="speechPlayPauseIcon" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button onclick="stopSpeech()" class="speech-control-btn speech-stop-btn" title="Stop">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <rect x="6" y="6" width="12" height="12" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <p class="text-xs text-gray-400 dark:text-gray-500 mt-4">
                    Reads the main content of this page aloud.
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    updateControlsState();

    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeSpeechControls();
        }
    });
}

/**
 * Close speech controls modal
 */
function closeSpeechControls() {
    const modal = document.getElementById('speechControlsModal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 200);
    }
}

/**
 * Show toast message
 */
function showSpeechToast(message) {
    const existing = document.querySelector('.speech-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'speech-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Create the floating speech button
 */
function createFloatingSpeechButton() {
    // Check browser support
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported in this browser');
        return;
    }

    // Initialize speech
    initSpeech();

    // Create button
    const btn = document.createElement('button');
    btn.id = 'floatingSpeechBtn';
    btn.className = 'floating-speech-btn';
    btn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
        </svg>
        <span>Read Aloud</span>
    `;
    btn.onclick = showSpeechControls;
    btn.title = 'Read page aloud';

    document.body.appendChild(btn);
}
