const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

let validate1 = "";
let validate2 = "";
let validate3 = "";
validator.textContent = "";

btn.addEventListener("click", function () {
  const inputName = input.value;

  let isLong = isLongEnough(inputName);
  let isSpace = isHasSpace(inputName);
  let isUnderScore = isHasUnderScore(inputName);

  if (isLong) {
    validate1 = "input is long enough";
  } else {
    validate1 = "too short";
  }
  if (isSpace) {
    validate2 = "input has no space";
  } else {
    validate2 = `has space!`;
  }
  if (!isUnderScore) {
    validate3 = "input has more than 1 undersoce";
  } else {
    validate3 = `has  less than 2 underscore!`;
  }
  validator.textContent = `${validate1}, ${validate2}, ${validate3}`;
});

isLongEnough = (input) => {
  if (input.length <= 3) {
    console.log(input);
    return false;
  } else return true;

};

isHasSpace = (input) => {
  if (input.includes(" ")) {
    return false;
  } else return true;

};

isHasUnderScore = (input) => {
  const numberOfUnderScores = input.split("_").length - 1;
  console.log(numberOfUnderScores);
  if (numberOfUnderScores <= 1) {
    return true;
  } else return false;

};


