var currentYear = "2019";
var rows = document.getElementById("my-table").getElementsByTagName("tr").length;
var min = 0;
var max = 4;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function alfredTalk(userInput) {
    if (userInput == null) {

        var userInput = document.getElementsByName("userMessage")[0].value;
        document.getElementById("userResponse").innerHTML = userInput;
        userInput.toLowerCase();
    }
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("greetings") && !userInput.includes("email")) {
        var AlfredGreetingsDictionary =
        {
            0: "Hello there. How can I help you today?",
            1: "Hi. It is my pleasure to assist you. Please let me know how I can help.",
            2: "Hello.",
            3: "Hi! I hope that you are well today. How can I assist you?",
            4: "Hello. I am here to assist you. Please let me know if there is something I can do for you."
        };
        let thisNumber = getRandomInt(min, max);
        document.getElementById("alfredResponse").innerHTML = AlfredGreetingsDictionary[thisNumber];
        saySomething(AlfredGreetingsDictionary[thisNumber]);
    }
    else if ((userInput.includes("introduce yourself"))) {

        document.getElementById("alfredResponse").innerHTML = "Hello. My name is Alfred, and just like Master Bruce, I too moonlight as a different persona, albeit of a very different nature. While Master Bruce prefers fighting crime, I prefer to fight disorganization in people’s personal lives. That is why I choose to spend my spare time as a personal assistant bot who is built using MVC 5 and I can make API calls using jQuery and AJAX. I am perfectly capable of handling full sentences and I am looking forward to continuing to learn more in order to help my users. Of course, with that said, I am simply just here to assist you. Now where should we begin?";
        saySomething("Hello. My name is Alfred, and just like Master Bruce, I too moonlight as a different persona, albeit of a very different nature. While Master Bruce prefers fighting crime, I prefer to fight disorganization in people’s personal lives. That is why I choose to spend my spare time as a personal assistant bot, who is built using MVC 5, and I can make API calls using jay query and ayjax. I am perfectly capable of handling full sentences, and I look forward to continue to learn more in order to help my users. Of course, with that said, I am simply just here to assist you. Now, where should we begin?");
    }
    else if ((userInput.includes("create") || userInput.includes("add") || (userInput.includes("new") && (userInput.includes("event") || userInput.includes("meeting")))) && (userInput.includes("schedule") || userInput.includes("calendar"))) {
        let userInputArray = userInput.split(" ");
        CreatePlan(userInputArray);
        document.getElementById("alfredResponse").innerHTML = "No problem. Just a moment while I take care of that for you.";
        saySomething("No problem. Just a moment while I take care of that for you.")

    }
    else if ((userInput.includes("remove") || userInput.includes("cancel") || (userInput.includes("delete")))) {

        document.getElementById("alfredResponse").innerHTML = "Ok. I will cancel that event.";
        saySomething("Ok. I will cancel that event.")
        let userInputArray = userInput.split(" ");
        DeletePlan(userInputArray);
    }
    else if ((userInput.includes("weather"))) {

        GetCurrentWeather();
    }
    else if ((userInput.includes("events") && userInput.includes("in my area"))) {

        document.getElementById("alfredResponse").innerHTML = "These local events look interesting";
        saySomething("These local events look interesting")
        GetLocalEvents();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && ((!userInput.includes("january") && !userInput.includes("January")) && (!userInput.includes("february") && !userInput.includes("February")) && (!userInput.includes("march") && !userInput.includes("March")) && (!userInput.includes("april") && !userInput.includes("April")) && (!userInput.includes("may") && !userInput.includes("May")) && (!userInput.includes("june") && !userInput.includes("June")) && (!userInput.includes("july") && !userInput.includes("July")) && (!userInput.includes("august") && !userInput.includes("August")) && (!userInput.includes("september") && !userInput.includes("September")) && (!userInput.includes("october") && !userInput.includes("October")) && (!userInput.includes("november") && !userInput.includes("November")) && (!userInput.includes("december") && !userInput.includes("December")))) {
        document.getElementById("alfredResponse").innerHTML = "Of course! Here you go.";
        saySomething("Of course! Here you go.");
        showPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("january") || userInput.includes("January"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of January.";
        saySomething("No problem. Here are your plans for the month of January.");
        showJanuaryPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("february") || userInput.includes("February"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of February.";
        saySomething("No problem. Here are your plans for the month of February.");
        showFebruaryPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("march") || userInput.includes("March"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of March.";
        saySomething("No problem. Here are your plans for the month of March.");
        showMarchPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("april") || userInput.includes("April"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of April.";
        saySomething("No problem. Here are your plans for the month of April.");
        showAprilPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("may") || userInput.includes("May"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of May.";
        saySomething("No problem. Here are your plans for the month of May.");
        showMayPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("june") || userInput.includes("June"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of June.";
        saySomething("No problem. Here are your plans for the month of June.");
        showJunePlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("july") || userInput.includes("July"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of July.";
        saySomething("No problem. Here are your plans for the month of July.");
        showJulyPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("august") || userInput.includes("August"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of August.";
        saySomething("No problem. Here are your plans for the month of August.");
        showAugustPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("september") || userInput.includes("September"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of September.";
        saySomething("No problem. Here are your plans for the month of September.");
        showSeptemberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("october") || userInput.includes("October"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of October.";
        saySomething("No problem. Here are your plans for the month of October.");
        showOctoberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("november") || userInput.includes("November"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of November.";
        saySomething("No problem. Here are your plans for the month of November.");
        showNovemberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("december") || userInput.includes("December"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of December.";
        saySomething("No problem. Here are your plans for the month of December.");
        showDecemberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see") || userInput.includes("tell")) && (userInput.includes("schedule") || userInput.includes("to do")) && (userInput.includes("today"))) {
        document.getElementById("alfredResponse").innerHTML = "Sure. Just a moment";
        saySomething("Sure. Just a moment");
        showTodayPlans();
    }
    else if (userInput.includes("email") && !userInput.includes("show me")) {
        document.getElementById("alfredResponse").innerHTML = "Just a moment while I write that down.";
        saySomething("Just a moment while I write that down.");
        let userInputArray = userInput.split(" ");
        userMessage = userInputArray.slice(7, userInput.length - 1);
        SendEmail(userInputArray, userMessage);
    }

    else if (userInput.includes("contact info") && userInput.includes("show me")) {
        document.getElementById("alfredResponse").innerHTML = "Let me get that for you.";
        saySomething("Let me get that for you.");
        let userInputArray = userInput.split(" ");
        getContactInfo(userInputArray);
    }

}

function saySomething(alfredResponse) {
    var message = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    message.voiceURI = "native";
    message.volume = 1;
    message.rate = 1;
    message.pitch = 0.8;
    message.text = alfredResponse;
    message.lang = 'en-US';
    speechSynthesis.speak(message);
}




function showPlans() {

    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlans',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            saySomething("Here are all the things you have in your schedule.")
            for (let el in data) {
                $("#my-table").append(
                    `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].EndDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].EndTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function getContactInfo(userInputArray) {
    var obj = {
        FirstName: userInputArray[userInputArray.length - 2],
        LastName: userInputArray[userInputArray.length - 1],
        EmailAddress: null,
        PhoneNumber: null,
    };
    console.log(obj);

    $.ajax({
        url: 'https://localhost:44318/Contacts/GetContactInfo',
        dataType: 'json',
        contentType: 'application/json',
        type: 'post',
        data: JSON.stringify(obj),
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            saySomething(obj.FirstName + "'s phone number is " + data.PhoneNumber + " and the email address is " + data.EmailAddress);
            document.getElementById("alfredResponse").innerHTML = obj.FirstName + "'s phone number is " + data.PhoneNumber + " and " + obj.FirstName + "'s email address is " + data.EmailAddress;
        },
        error: function (errorThrown) {
            saySomething("I'm sorry. I am unable to do that.");
        }
    });
}

function showTodayPlans() {

    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForToday',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like your day is wide open.")
            }
            else {
                saySomething("Here is what you have on tap today.")
                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });

}

function showJanuaryPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForJanuary',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of January.")
            }
            else {
                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showFebruaryPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForFebruary',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of February.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showMarchPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForMarch',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of March.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showAprilPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForApril',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of April.")
            }
            else {
                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showMayPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForMay',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of May.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showJunePlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForJune',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of June.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showJulyPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForJuly',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of July.")
            }
            else {
                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showAugustPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForAugust',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of August.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showSeptemberPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForSeptember',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of September.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showOctoberPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForOctober',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of October.")
            }
            else {
                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showNovemberPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForNovember',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of November.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function showDecemberPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForDecember',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            if (data[0] == null) {
                saySomething("Looks like you have nothing scheduled for the month of December.")
            }
            else {

                for (let el in data) {
                    $("#my-table").append(
                        `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].DayOfPlan}</td>
                        <td> ${data[el].MonthOfPlan}</td>
                        <td> ${data[el].StartDate}</td>
                        <td> ${data[el].StartTime}</td>
                        <td> ${data[el].Description}</td>
                        </tr>`)
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}

function chooseMonth(userInputArray) {
    let enteredMonth = userInputArray.toLowerCase();
    let Month = "";
    switch (enteredMonth) {
        case "january":
            Month = "01"
            break;
        case "february":
            Month = "02"
            break;
        case "march":
            Month = "03"
            break;
        case "april":
            Month = "04"
            break;
        case "may":
            Month = "05"
            break;
        case "june":
            Month = "06"
            break;
        case "july":
            Month = "07"
            break;
        case "august":
            Month = "08"
            break;
        case "september":
            Month = "09"
            break;
        case "october":
            Month = "10"
            break;
        case "november":
            Month = "11"
            break;
        case "december":
            Month = "12"
            break;
        default: "Not a month"
    }
    return Month
}

function chooseDate(userInputArray) {
    let Date = "";
    switch (userInputArray) {
        case "1st":
        case "1":
        case "first":
            Date = "1"
            break;
        case "2nd":
        case "2":
        case "second":
            Date = "2"
            break;
        case "3rd":
        case "3":
        case "third":
            Date = "3"
            break;
        case "4th":
        case "4":
        case "fourth":
            Date = "4"
            break;
        case "5th":
        case "5":
        case "fifth":
            Date = "5"
            break;
        case "6th":
        case "6":
        case "sixth":
            Date = "6"
            break;
        case "7th":
        case "7":
        case "seventh":
            Date = "7"
            break;
        case "8th":
        case "8":
        case "eighth":
            Date = "8"
            break;
        case "9th":
        case "9":
        case "ninth":
            Date = "9"
            break;
        case "10th":
        case "10":
        case "tenth":
            Date = "10"
            break;
        case "11th":
        case "11":
        case "eleventh":
            Date = "11"
            break;
        case "12th":
        case "12":
        case "twelfth":
            Date = "12"
            break;
        case "13th":
        case "13":
        case "thirteenth":
            Date = "13"
            break;
        case "14th":
        case "14":
        case "fourteenth":
            Date = "14"
            break;
        case "15th":
        case "15":
        case "fifteenth":
            Date = "15"
            break;
        case "16th":
        case "16":
        case "sixteenth":
            Date = "16"
            break;
        case "17th":
        case "17":
        case "seventeenth":
            Date = "17"
            break;
        case "18th":
        case "18":
        case "eighteenth":
            Date = "18"
            break;
        case "19th":
        case "19":
        case "nineteenth":
            Date = "19"
            break;
        case "20th":
        case "20":
        case "twentieth":
            Date = "20"
            break;
        case "21st":
        case "21":
        case "twenty-first":
            Date = "21"
            break;
        case "22nd":
        case "22":
        case "twenty-second":
            Date = "22"
            break;
        case "23rd":
        case "23":
        case "twenty-third":
            Date = "23"
            break;
        case "24th":
        case "24":
        case "twenty-fourth":
            Date = "24"
            break;
        case "25th":
        case "25":
        case "twenty-fifth":
            Date = "25"
            break;
        case "26th":
        case "26":
        case "twenty-sixth":
            Date = "26"
            break;
        case "27th":
        case "27":
        case "twenty-seventh":
            Date = "27"
            break;
        case "28th":
        case "28":
        case "twenty-eighth":
            Date = "28"
            break;
        case "29th":
        case "29":
        case "twenty-ninth":
            Date = "29"
            break;
        case "30th":
        case "30":
        case "thirtieth":
            Date = "30"
            break;
        case "31st":
        case "31st":
        case "thirty-first":
            Date = "31"
            break;
        default: "Not a date"
    }
    return Date;
}

function CreatePlan(userInputArray) {

    var obj = {
        Name: userInputArray[1],
        DayOfPlan: userInputArray[userInputArray.length - 6],
        MonthOfPlan: userInputArray[userInputArray.length - 5],
        StartDate: chooseMonth(userInputArray[userInputArray.length - 5]) + "/" + chooseDate(userInputArray[userInputArray.length - 4]) + "/" + currentYear,
        StartTime: userInputArray[userInputArray.length - 2] + " " + userInputArray[userInputArray.length - 1],
        Description: userInputArray[1] + " " + userInputArray[2] + " " + userInputArray[3],
    };

    $.ajax({
        url: 'https://localhost:44318/Plans/CreateNewPlan',
        //dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data);
            saySomething("Your event was added to the schedule.")
        },
        error: function (errorThrown) {
            console.log(errorThrown);
        }
    });
}

function DeletePlan(userInputArray) {
    var obj = {
        Name: userInputArray[userInputArray.length - 3],
        DayOfPlan: userInputArray[userInputArray.length - 1],
        MonthOfPlan: null,
        StartDate: null,
        StartTime: null,
        Description: null,
    };
    console.log(obj);

    $.ajax({
        url: 'https://localhost:44318/Plans/DeletePlan',
        //dataType: 'json',
        contentType: 'application/json',
        type: 'post',
        data: JSON.stringify(obj),
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            saySomething("Your event has been removed");
        },
        error: function (errorThrown) {
            saySomething("I'm sorry. I am unable to do that.");
        }
    });
}

function GetLocalEvents() {

    $.ajax({
        //url: 'https://www.eventbriteapi.com/v3/events/search/?token=3O5MC6XYKZ7MIDZ3SKBD&location.address=milwaukee&location.within=10km&expand=venue',
        url: 'https://localhost:44318/Plans/GetLocalEvents',
        dataType: 'json',
        //contentType: 'application/json',
        type: 'get',
        //data: JSON.stringify(obj),
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data)
            for (let el in data) {
                $("#events-table").append(
                    `<tr>
                        <td>${data[el].Name}</td>
                        <td> ${data[el].Description}</td>
                        <td> ${data[el].Location}</td>
                        <td><a href = ${data[el].Url}> ${data[el].Url}</a></td>
                        </tr>`)
            }
        },
        error: function (errorThrown) {
            saySomething("I'm sorry. I was unable to do that.");
        }
    });
}

function GetCurrentWeather() {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Milwaukee&APPID=214c7e28b011e14c76a74967850fcfee',
        dataType: 'json',
        //contentType: 'application/json',
        type: 'get',
        //data: JSON.stringify(obj),
        success: function (data) {
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            console.log(data)
            let currentTemperature = data.main.temp;
            let highTemperature = data.main.temp_max;
            let lowTemperature = data.main.temp_min;
            console.log(currentTemperature);
            let fahrenheitCurrentTemp = (currentTemperature * (9 / 5) - 459.67);
            let fahrenheitHighTemp = (highTemperature * (9 / 5) - 459.67);
            let fahrenheitLowTemp = (lowTemperature * (9 / 5) - 459.67);
            let roundedCurrentTemp = Math.round(fahrenheitCurrentTemp);
            let roundedLowTemp = Math.round(fahrenheitLowTemp);
            let roundedHighTemp = Math.round(fahrenheitHighTemp);
            let weatherConditions = data.weather;
            let conditions = "";
            for (let el in weatherConditions) {
                conditions = weatherConditions[el].description;
            }
            console.log(conditions);
            document.getElementById("alfredResponse").innerHTML = "The current temperature in Milwaukee is " + roundedCurrentTemp.toString() + " degrees Fahrenheit. The forcast shows " + conditions + " as the current conditions. The high for today is " + roundedHighTemp.toString() + " degrees and the low is " + roundedLowTemp.toString() + " degrees.";
            saySomething("The current temperature in Milwaukee is " + roundedCurrentTemp.toString() + " degrees Fahrenheit. The forcast shows " + conditions + " as the current conditions. The high for today is " + roundedHighTemp.toString() + " degrees and the low is " + roundedLowTemp.toString() + " degrees.");

        },
        error: function (errorThrown) {
            saySomething("I'm sorry. I was unable to do that.");
        }
    });
}

function SendEmail(userInputArray, userMessage) {

    var obj = {
        FirstName: userInputArray[1],
        LastName: userInputArray[2],
        Subject: userInputArray[4] + " " + userInputArray[5],
        Message: userMessage.toString(),
    };

    $.ajax({
        url: 'https://localhost:44318/Contacts/sendEmail',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function (data) {
            console.log(data);
            document.getElementById("table-body").innerHTML = "";
            document.getElementById("events-body").innerHTML = "";
            if (data == "I was unable to do that. Please be sure to include both a subject and a message when sending an email.") {
                saySomething(data);
                document.getElementById("alfredResponse").innerHTML = data;
            }
            else if (data == "I was unable to find a contact with that name.") {
                saySomething(data);
                document.getElementById("alfredResponse").innerHTML = data;
            }
            else {
                saySomething("Your email has been sent to " + obj.FirstName)
                document.getElementById("alfredResponse").innerHTML = "Your email has been sent to " + obj.FirstName;
            }
            
        },
        error: function (errorThrown) {
            console.log(errorThrown);
            saySomething("Sorry, I was unable to do that");
        }
    });
}


//function GetEmails() {

//    $.ajax({
//        url: 'https://localhost:44318/Contacts/getEmails',
//        //dataType: 'json',
//        type: 'get',
//        contentType: 'application/json',
//        data: JSON.stringify(obj),
//        success: function (data) {
//            document.getElementById("table-body").innerHTML = "";
//            document.getElementById("events-body").innerHTML = "";
//            console.log(data);
//            saySomething("Your email has been sent to " + obj.FirstName)
//            document.getElementById("table-body").innerHTML = "Your email has been sent to " + obj.FirstName;
//        },
//        error: function (errorThrown) {
//            console.log(errorThrown);
//        }
//    });
//}
