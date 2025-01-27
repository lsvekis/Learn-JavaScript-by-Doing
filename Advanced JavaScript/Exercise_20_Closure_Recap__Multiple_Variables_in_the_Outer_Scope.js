// Exercise 20: Closure Recap – Multiple Variables in the Outer Scope

function initSettings(theme, language) {
return {
showTheme() {
console.log("Theme:", theme);
},
showLanguage() {
console.log("Language:", language);
}
};
}
let settings = initSettings("dark", "en");
settings.showTheme();    // "Theme: dark"
settings.showLanguage(); // "Language: en"