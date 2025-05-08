// Content for both languages
const content = {
    en: {
        services: {
            line1: "Renovations.",
            line2: "Your Space.",
            line3: "Reimagined."
        },
        scheduleButton: "Schedule a meeting"
    },
    de: {
        services: {
            line1: "Renovationen.",
            line2: "Ihr Raum.",
            line3: "Neu gedacht."
        },
        scheduleButton: "Termin vereinbaren"
    }
};

// Detect browser language
const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.toLowerCase().startsWith('de') ? 'de' : 'en';
document.documentElement.lang = lang;

// Function to set content when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const selectedContent = content[lang];
    
    // Set services content
    document.getElementById('services-text').innerHTML = `
        ${selectedContent.services.line1}<br>
        ${selectedContent.services.line2}<br>
        ${selectedContent.services.line3}
    `;
    
    // Set schedule button text
    document.getElementById('schedule-button').textContent = selectedContent.scheduleButton;
}); 