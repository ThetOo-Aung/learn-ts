/* unknown is just like any but you can't assign unknown variable to other variable like let userName = userInput without if checking */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput;


if (typeof userInput === "string") {
  userName = userInput;
}


function generateError(message: string , code: number ): never{
  throw{message: message, errorCode: code}
}
generateError("An Error Occoured", 500);