

var min = 0;
var max = 4;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function alfredTalk(userInput)
{
    var userInput = document.getElementsByName("userMessage")[0].value;
    document.getElementById("userResponse").innerHTML = userInput;

    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("greetings")) {
        var AlfredGreetingsDictionary = {
            0: "Hello there. How can I help you today?",
            1: "Hi. It is my pleasure to assist you. Please let me know how I can help.",
            2: "Hello.",
            3: "Hi! I hope that you are well today. How can I assist you?",
            4: "Hello. I am here to assist you. Please let me know if there is something I can do for you."
        };
        document.getElementById("alfredResponse").innerHTML = AlfredGreetingsDictionary[getRandomInt(min, max)];
    }
    else if ((userInput.includes("create") || userInput.includes("add") || (userInput.includes("new") && (userInput.includes("event") || userInput.includes("meeting")))) && (userInput.includes("schedule") || userInput.includes("calendar"))) {

        document.getElementById("alfredResponse").innerHTML = "No problem. Just a moment while I get a pen.";
    }
   
}