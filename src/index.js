import "./styles/main.scss";

const newYear = new Date("1 January 2023");

const days = 1000 * 60 * 60 * 24;
const hours = 1000 * 60 * 60;
const minutes = 1000 * 60;
const seconds = 1000;

function countDown() {
  const now = Date.now(); // ms from 1/1/1970
  const diff = newYear - now;

  const daysLeft = ("0" + Math.floor(diff / days)).slice(-2);
  const hoursLeft = ("0" + Math.floor((diff % days) / hours)).slice(-2);
  const minutesLeft = (
    "0" + Math.floor(((diff % days) % hours) / minutes)
  ).slice(-2);
  const secondsLeft = (
    "0" + Math.floor((((diff % days) % hours) % minutes) / seconds)
  ).slice(-2);

  const spanDays = (document.querySelector("#days").textContent = daysLeft);
  const spanHours = (document.querySelector("#hours").textContent = hoursLeft);
  const spanMinutes = (document.querySelector("#minutes").textContent =
    minutesLeft);
  const spanSeconds = (document.querySelector("#seconds").textContent =
    secondsLeft);

  console.log("🚀 ~ days", daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

const interval = setInterval(countDown, 1000);
