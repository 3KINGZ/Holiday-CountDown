const today = moment().startOf("day"); //today's date(day)

//holiday date stored in an object using the moment() to parse 
let holiday = {
    newYear: moment("01-01-2021", "DD-MM-YYYY"),
    easter: moment("13-04", "DD-MM"),
    eidAlFitr: moment("23-05", "DD-MM"),
    democracy: moment("12-06", "DD-MM"),
    eidAlAdha: moment("01-08", "DD-MM"),
    independenceDay: moment("01-10", "DD-MM"),
    prophetBirthDay: moment("28-10", "DD-MM"),
    christmasDay: moment("25-12", "DD-MM"),
    boxingDay: moment("26-12", "DD-MM")
}

//get the countdown in days format 
const countDown = (hols) => {
    let hd;
    let countDn;
    if (hols === "New-Year") {
        hd = holiday.newYear;
        countDn = hd.diff(today, "days");
    } else if (hols === "Easter") {
        hd = holiday.easter;
        countDn = hd.diff(today, "days")
    } else if (hols === "Eid-Al-Fitr") {
        hd = holiday.eidAlFitr;
        countDn = hd.diff(today, "days")
    } else if (hols === "Democracy-Day") {
        hd = holiday.democracy;
        countDn = hd.diff(today, "days")
    } else if (hols === "Eid-Al-Adha") {
        hd = holiday.eidAlAdha;
        countDn = hd.diff(today, "days")
    } else if (hols === "Independence-Day") {
        hd = holiday.independenceDay;
        countDn = hd.diff(today, "days")
        // } else if (hols === "Prophet's-birthday") {
        //     hd = holiday.prophetBirthDay;
        //     countDn = hd.diff(today, "days")
    } else if (hols === "Christmas-Day") {
        hd = holiday.christmasDay;
        countDn = hd.diff(today, "days")
    } else if (hols === "Boxing-Day") {
        hd = holiday.boxingDay;
        countDn = hd.diff(today, "days")
    }
    return countDn;
}


//message to be return when the result of the countDown function is being passed
const message = (days, holiday) => {
    if (days < 0) {
        return `${holiday} was ${days} days ago`;
    } else if (days === 0) {
        let greeting;
        switch (holiday) {
            case "New-Year":
                greeting = "it's new year,Hurray, Happy New Year!!!"
                break;
            case "easter":
                greeting = "Happy easter!!!";
                break;
            case "eidAlFitr":
                greeting = "Eid Mubarak";
                break;
            case "Democracy":
                greeting = "Happy Democracy Day";
                break;
            case "eidAlAdha":
                greeting = "Eid Mubarak";
                break;
            case "independenceDay":
                greeting = "Happy Independence";
                break;
                // case "prophetBirthDay":
                //     greeting = "Check";
                //     break;
            case "christmasDay":
                greeting = "Merry Christmas";
                break;
            case "boxingDay":
                greeting = "Happy Boxing Day";
                break;
        }
        return `${greeting}`
    } else if (days === 1) {
        return `${holiday} is tomorrow`
    } else if (days > 1) {
        return `They are <span class="underline">${days}</span> day(s) till <span class="underline">${holiday}</span>`;
    }
}

//render the message(message()) result to the browser
const renderMessage = (message) => {
    let container = document.querySelector("#message-container");
    container.innerHTML = ""
    container.innerHTML = message
}

//adding a change event listener to the select-input
document.querySelector("#select-holiday").addEventListener("change", function (e) {
    renderMessage(message(countDown(e.target.value), e.target.value))
});