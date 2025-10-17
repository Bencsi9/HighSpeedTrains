const translations = {
  hu: {
    pageTitle: "Gyorsvonatok",
    introTitle: "Mi az a gyorsvonat?",
    introText: "A gyorsvonatok modern vasúti járművek, amelyek 250–350 km/h sebességgel közlekednek, és forradalmasították a távolsági közlekedést.",
    historyTitle: "Rövid történelem",
    historyText: "Az első modern gyorsvonat a japán Shinkansen volt 1964-ben...",
    historyButton: "Tovább a részletekre",
    japanTitle: "Gyorsvonatok Japánban",
    japanText: "A legendás Shinkansen a világ egyik legrégebbi és legmegbízhatóbb hálózata.",
    japanButton: "Felfedezés",
    franceTitle: "Gyorsvonatok Franciaországban",
    franceText: "A TGV 1981 óta a francia mérnöki tudás és sebesség szimbóluma.",
    franceButton: "Felfedezés",
    germanyTitle: "Gyorsvonatok Németországban",
    germanyText: "Az ICE-vonatok a német precizitás és modern technológia példái.",
    germanyButton: "Felfedezés",
    footer: "© 2025 Gyorsvonatok Weboldala"
  },
  en: {
    pageTitle: "High-Speed Trains",
    introTitle: "What is a high-speed train?",
    introText: "High-speed trains are modern railway vehicles operating at 250–350 km/h...",
    historyTitle: "Short History",
    historyText: "The first modern high-speed train was the Japanese Shinkansen in 1964...",
    historyButton: "Learn more",
    japanTitle: "High-Speed Trains in Japan",
    japanText: "The legendary Shinkansen is one of the oldest and most reliable networks in the world.",
    japanButton: "Explore",
    franceTitle: "High-Speed Trains in France",
    franceText: "Since 1981, the TGV has been a symbol of French engineering and speed.",
    franceButton: "Explore",
    germanyTitle: "High-Speed Trains in Germany",
    germanyText: "ICE trains are examples of German precision and modern railway technology.",
    germanyButton: "Explore",
    footer: "© 2025 High-Speed Trains Website"
  },
  de: {
    pageTitle: "Hochgeschwindigkeitszüge",
    introTitle: "Was ist ein Hochgeschwindigkeitszug?",
    introText: "Hochgeschwindigkeitszüge sind moderne Schienenfahrzeuge, die mit 250–350 km/h verkehren...",
    historyTitle: "Kurze Geschichte",
    historyText: "Der erste moderne Hochgeschwindigkeitszug war der japanische Shinkansen 1964...",
    historyButton: "Mehr erfahren",
    japanTitle: "Hochgeschwindigkeitszüge in Japan",
    japanText: "Das legendäre Shinkansen-System ist eines der ältesten und zuverlässigsten Netzwerke der Welt.",
    japanButton: "Entdecken",
    franceTitle: "Hochgeschwindigkeitszüge in Frankreich",
    franceText: "Seit 1981 ist der TGV ein Symbol französischer Ingenieurskunst und Geschwindigkeit.",
    franceButton: "Entdecken",
    germanyTitle: "Hochgeschwindigkeitszüge in Deutschland",
    germanyText: "Die ICE-Züge stehen für deutsche Präzision und moderne Bahntechnologie.",
    germanyButton: "Entdecken",
    footer: "© 2025 Hochgeschwindigkeitszüge Website"
  }
};




let currentLang = localStorage.getItem('lang') || 'en';
changeLanguage(currentLang);


function changeLanguage(lang) {

  
  const t = translations[lang];
  if (!t) return;
  localStorage.setItem('lang', lang);

  document.getElementById("page-title").textContent = t.pageTitle;
  document.getElementById("site-title").textContent = t.pageTitle;

  document.getElementById("intro-title").textContent = t.introTitle;
  document.getElementById("intro-text").textContent = t.introText;

  document.getElementById("history-title").textContent = t.historyTitle;
  document.getElementById("history-text").textContent = t.historyText;
  document.getElementById("history-button").textContent = t.historyButton;

  document.getElementById("japan-title").textContent = t.japanTitle;
  document.getElementById("japan-text").textContent = t.japanText;
  document.getElementById("japan-button").textContent = t.japanButton;

  document.getElementById("france-title").textContent = t.franceTitle;
  document.getElementById("france-text").textContent = t.franceText;
  document.getElementById("france-button").textContent = t.franceButton;

  document.getElementById("germany-title").textContent = t.germanyTitle;
  document.getElementById("germany-text").textContent = t.germanyText;
  document.getElementById("germany-button").textContent = t.germanyButton;

  document.getElementById("footer-text").textContent = t.footer;
}
