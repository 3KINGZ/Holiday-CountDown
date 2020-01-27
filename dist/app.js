const today = moment().startOf("day"); //today's date(day)

//holiday date stored in an object using the moment() to parse 
let holiday = {
    newYear: moment("01-01-2021", "DD-MM-YYYY"),
    valentine: moment("14-02", "DD-MM"),
    easter: moment("13-04", "DD-MM"),
    eidAlFitr: moment("23-05", "DD-MM"),
    childrenDay: moment("27-05", "DD-MM"),
    democracy: moment("12-06", "DD-MM"),
    eidAlAdha: moment("01-08", "DD-MM"),
    independenceDay: moment("01-10", "DD-MM"),
    prophetBirthDay: moment("28-10", "DD-MM"),
    christmasDay: moment("25-12", "DD-MM"),
    boxingDay: moment("26-12", "DD-MM")
}
let name = "victor"
//get the countdown in days format 
const countDown = (hols) => {
    let hd;
    let countDn;
    if (hols === "New-Year") {
        hd = holiday.newYear;
        countDn = hd.diff(today, "days");
    } else if (hols === "Valentine") {
        hd = holiday.valentine;
        countDn = hd.diff(today, "days")
    } else if (hols === "Easter") {
        hd = holiday.easter;
        countDn = hd.diff(today, "days")
    } else if (hols === "Eid-Al-Fitr") {
        hd = holiday.eidAlFitr;
        countDn = hd.diff(today, "days")
    } else if (hols === "Children-Day") {
        hd = holiday.childrenDay;
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

let isMessage;

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
            case "valentine":
                greeting = "Happy Valentine's Day"
            case "easter":
                greeting = "Happy easter!!!";
                break;
            case "eidAlFitr":
                greeting = "Eid Mubarak";
                break;
            case "childrenDay":
                greeting = "Happy Children's Day"
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
        isMessage = `They are ${days} day(s) till ${holiday}`
        return `They are <span class="underline">${days}</span> day(s) till <span class="underline">${holiday}</span>`;
    }
}

//dynamic url to be shown on twitter
const dynamicCurl = "https://boring-pike-841093.netlify.com/"

//function to setup tweeter share values
const setUpTweetBtn = (dynamicMessage, dynamicCurl) => {
    let tweetButton = document.createElement("a");
    tweetButton.textContent = "tweet";
    tweetButton.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
    tweetButton.setAttribute("class", "twitter-share-button");
    tweetButton.setAttribute("data-size", "large")
    tweetButton.setAttribute("data-hashtags", "HolidayCountDown")
    tweetButton.setAttribute("data-text", dynamicMessage);
    tweetButton.setAttribute('data-url', dynamicCurl)
    tweetButton.setAttribute("data-show-count", "false")
    document.querySelector("#tweet").appendChild(tweetButton)
    twttr.widgets.load();
}

//render the message(message()) result to the browser
const renderMessage = (message) => {
    let container = document.querySelector("#message-container");
    container.innerHTML = ""
    document.querySelector("#tweet").innerHTML = ""
    container.innerHTML = message
    setUpTweetBtn(isMessage, dynamicCurl)
}

//adding a change event listener to the select-input
document.querySelector("#select-holiday").addEventListener("change", function (e) {
    renderMessage(message(countDown(e.target.value), e.target.value))
});