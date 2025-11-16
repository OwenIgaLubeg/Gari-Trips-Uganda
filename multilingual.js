// js/multilingual.js
document.addEventListener('DOMContentLoaded', () => {
  const LANG_STORAGE_KEY = 'selected_language';
  const defaultLang = 'en';
  let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || defaultLang;

  // Load translations object (from translations.js)
  if (!window.translations) {
    console.error('Translations not loaded!');
    return;
  }

  // Apply translations
  function applyTranslations(lang) {
    // Update all data-lang elements
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
      const key = el.getAttribute('data-lang-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update language dropdown
    const select = document.getElementById('language-select');
    if (select) select.value = lang;

    // Save language
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    currentLang = lang;
  }

  // Initialize
  applyTranslations(currentLang);

  // Handle language change
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      applyTranslations(e.target.value);
    });
  }
});