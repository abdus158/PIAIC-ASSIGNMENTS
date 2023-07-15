"use strict";
let personName;
personName = 'M.tayyab';
function toTitleCase(msg) {
    let s1 = msg.split('.');
    let s2 = s1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    let s3 = s2.join('.');
    return s3;
}
const titleCaseName = toTitleCase(personName);
toTitleCase(personName);
console.log("Name To Lower Case : " + personName.toLowerCase());
console.log("Name To Upper Case : " + personName.toUpperCase());
console.log("Name To Title Case : " + titleCaseName);
