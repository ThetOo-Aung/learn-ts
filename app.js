"use strict";
/* unknown is just like any but you can't assign unknown variable to other variable like let userName = userInput without if checking */
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occoured", 500);
