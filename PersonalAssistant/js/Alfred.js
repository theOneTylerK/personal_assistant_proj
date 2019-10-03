
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
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("greetings")) {
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
    else if ((userInput.includes("create") || userInput.includes("add") || (userInput.includes("new") && (userInput.includes("event") || userInput.includes("meeting")))) && (userInput.includes("schedule") || userInput.includes("calendar"))) {

        document.getElementById("alfredResponse").innerHTML = "No problem. Just a moment while I take care of that for you.";
        saySomething("No problem. Just a moment while I take care of that for you.")
        let userInputArray = userInput.split(" ");
        CreatePlan(userInputArray);
    }
    else if ((userInput.includes("remove") || userInput.includes("cancel") || (userInput.includes("delete")))) {

        document.getElementById("alfredResponse").innerHTML = "Ok. I will cancel that event.";
        saySomething("Ok. I will cancel that event.")
        let userInputArray = userInput.split(" ");
        DeletePlan(userInputArray);
    }
    else if ((userInput.includes("show") || userInput.includes("see")) && (userInput.includes("schedule") || userInput.includes("calendar")) && ((!userInput.includes("october") && !userInput.includes("October")) && (!userInput.includes("november") && !userInput.includes("November")))) {
        document.getElementById("alfredResponse").innerHTML = "Of course! Here you go.";
        saySomething("Of course! Here you go.");
        showPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("october") || userInput.includes("October"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of October.";
        saySomething("No problem. Here are your plans for the month of October.");
        showOctoberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see")) && (userInput.includes("schedule") || userInput.includes("calendar")) && (userInput.includes("november") || userInput.includes("November"))) {
        document.getElementById("alfredResponse").innerHTML = "No problem. Here are your plans for the month of November.";
        saySomething("No problem. Here are your plans for the month of November.");
        showNovemberPlans();
    }
    else if ((userInput.includes("show") || userInput.includes("see")) && (userInput.includes("schedule") || userInput.includes("event") || userInput.includes("to do")) && (userInput.includes("today"))) {
        document.getElementById("alfredResponse").innerHTML = "Sure. Just a moment.";
        saySomething("Sure. Just a moment.");
        showTodayPlans();
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


//(function ($) {
//    function AddPlan(e) {
//        var obj = {
//            Name: this["Name"].value,
//            DayOfPlan: this["DayOfPlan"].value,
//            MonthOfPlan: this["MonthOfPlan"].value
//               StartDate: this["StartDate"].value
//               EndDate: this["EndDate"].value
//               StartTime: this["StartTime"].value
//               EndTime: this["EndTime"].value
//               Description: this["Description"].value

//        };

//        $.ajax({
//            url: 'https://localhost:44318/Plans/Index',
//            dataType: 'json',
//            type: 'get',
//            contentType: 'application/json',
//            data: JSON.stringify(obj),
//            success: function (data) {
//                $("#my-table tr").remove()
//                makeTable();
//            },
//            error: function (errorThrown) {
//                console.log(errorThrown);
//            }
//        });
//    }

function showPlans() {

        $.ajax({
            url: 'https://localhost:44318/Plans/GetPlans',
            //dataType: 'json',
            type: 'get',
            //contentType: 'application/json',
            success: function (data) {
                console.log(data);
                saySomething("Here is what you have going on today.")
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

function showTodayPlans() {
    
        $.ajax({
            url: 'https://localhost:44318/Plans/GetPlansForToday',
            //dataType: 'json',
            type: 'get',
            //contentType: 'application/json',
            success: function (data) {
                document.getElementById("table-body").innerHTML = ""
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

function showOctoberPlans() {
    $.ajax({
        url: 'https://localhost:44318/Plans/GetPlansForOctober',
        //dataType: 'json',
        type: 'get',
        //contentType: 'application/json',
        success: function (data) {
            document.getElementById("table-body").innerHTML = ""
            console.log(data);
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
            document.getElementById("table-body").innerHTML = ""
            console.log(data);
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
            saySomething("Your event has been removed");
        },
        error: function (errorThrown) {
            saySomething("Your event has been removed");
        }
    });
}