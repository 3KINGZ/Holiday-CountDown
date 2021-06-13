import holidays from "./holidays.js";
import { filterNegative, removeUnderscore } from "./utils.js";
import { today, dynamicCurl } from "./constants.js";

let isMessage;

//get the countdown in days format
const countDown = (holiday) => {
  let hd = holidays[holiday].date;
  return hd.diff(today, "days");
};

//message to be return when the result of the countDown function is being passed
const message = (days, holiday) => {
  let message;
  if (days < 0) {
    const pDays = filterNegative(days);
    message = `${holiday} was ${pDays} day(s) ago`;
  } else if (days === 0) {
    message = holidays[holiday].greeting;
  } else if (days === 1) {
    message = `${holiday} is tomorrow`;
  } else if (days > 1) {
    isMessage = removeUnderscore(`They are ${days} day(s) till ${holiday}`);
    message = `They are <span class="underline">${days}</span> day(s) till <span class="underline">${holiday}</span>`;
  }

  return removeUnderscore(message);
};

//function to setup tweeter share values
const setUpTweetBtn = (dynamicMessage, dynamicCurl) => {
  let tweetButton = document.createElement("a");
  tweetButton.textContent = "tweet";
  tweetButton.setAttribute(
    "href",
    "https://twitter.com/share?ref_src=twsrc%5Etfw"
  );
  tweetButton.setAttribute("class", "twitter-share-button");
  tweetButton.setAttribute("data-size", "large");
  tweetButton.setAttribute("data-hashtags", "HolidayCountDown");
  tweetButton.setAttribute("data-text", dynamicMessage);
  tweetButton.setAttribute("data-url", dynamicCurl);
  tweetButton.setAttribute("data-show-count", "false");
  document.querySelector("#tweet").appendChild(tweetButton);
  twttr.widgets.load();
};

//render the message(message()) result to the browser
const renderMessage = (message) => {
  let container = document.querySelector("#message-container");
  container.innerHTML = "";
  document.querySelector("#tweet").innerHTML = "";
  container.innerHTML = message;
  setUpTweetBtn(isMessage, dynamicCurl);
};

//adding a change event listener to the select-input
document
  .querySelector("#select-holiday")
  .addEventListener("change", function (e) {
    renderMessage(message(countDown(e.target.value), e.target.value));
  });
