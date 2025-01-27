// 80. Object Pattern for Module-like Organization

let stringUtils = {
toUpper(str) { return str.toUpperCase(); },
toLower(str) { return str.toLowerCase(); },
};
console.log(stringUtils.toUpper("hello"));