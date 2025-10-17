const texts = {
  en: {
    pageTitle: "Short History",
    sections: [
      { title: "The First High-Speed Trains", text: "The first modern high-speed train was Japan's Shinkansen, launched in 1964 between Tokyo and Osaka." },
      { title: "Development in Europe", text: "In the 1980s, France introduced the TGV and Germany the ICE, starting a new era in high-speed rail." },
      { title: "Current Situation", text: "Today, many countries operate high-speed rail networks connecting cities quickly and comfortably." }
    ],
    footer: "© 2025 High-Speed Trains Website"
  },
  hu: {
    pageTitle: "Rövid történelem",
    sections: [
      { title: "Az első gyorsvonatok", text: "Az első modern gyorsvonat a japán Shinkansen volt, amely 1964-ben indult Tokió és Oszaka között." },
      { title: "Fejlődés Európában", text: "Az 1980-as években Franciaországban a TGV, majd Németországban az ICE rendszerek indultak el." },
      { title: "Jelenlegi helyzet", text: "Ma számos országban működik nagysebességű vasúti hálózat." }
    ],
    footer: "© 2025 Gyorsvonatok Weboldala"
  },
  de: {
    pageTitle: "Kurze Geschichte",
    sections: [
      { title: "Die ersten Hochgeschwindigkeitszüge", text: "Der erste moderne Hochgeschwindigkeitszug war der japanische Shinkansen, 1964 zwischen Tokio und Osaka gestartet." },
      { title: "Entwicklung in Europa", text: "In den 1980er Jahren führten Frankreich den TGV und Deutschland den ICE ein." },
      { title: "Aktuelle Lage", text: "Heute betreiben viele Länder Hochgeschwindigkeitsnetze, die Städte schnell und komfortabel verbinden." }
    ],
    footer: "© 2025 Webseite der Hochgeschwindigkeitszüge"
  }
};

// Alapértelmezett nyelv az előző oldalról
let currentLang = localStorage.getItem('lang') || 'en';

function changeLanguage(lang) {
  if (!texts[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.getElementById('site-title').textContent = texts[lang].pageTitle;

  const sections = document.querySelectorAll('.section');
  sections.forEach((sec, idx) => {
    sec.querySelector('h2').textContent = texts[lang].sections[idx].title;
    sec.querySelector('p').textContent = texts[lang].sections[idx].text;
  });

  document.querySelector('footer p').textContent = texts[lang].footer;
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage(currentLang);
});
