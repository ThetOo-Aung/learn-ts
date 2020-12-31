"use strict";
console.log("Analyzing ...");
var strArr = [
    'a', 'o', 'e', 'i', 'u', 'u*',
    'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w',
    'ai', 'ei', 'ui', 'ao', 'ou', 'iu',
    'ie', 'u*e', 'er', 'an', 'ang', 'en', 'eng', 'in', 'ing', 'ong', 'un u*n'
];
var button = document.querySelector('button');
button.addEventListener('click', function () {
    button.innerText = strArr[Math.floor(Math.random() * strArr.length)];
});
