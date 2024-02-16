const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

validator.textContent = "";

btn.addEventListener("click", function () {
  const inputName = input.value;

  let isLong = isLongEnough(inputName);
  let isSpace = isHasSpace(inputName);
  let isUnderScore = isHasUnderScore(inputName);

  validation(isLong, isSpace, isUnderScore);
    reset()
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

const validation = (length, space, underscore) => {
  if (length) {
    const span1 = document.createElement("span");
    const text1 = document.createTextNode("Correct, ");
    span1.appendChild(text1);
    validator.appendChild(span1);
    span1.classList.add("correct");
  } else {
    const span1 = document.createElement("span");
    const text1 = document.createTextNode("Too short, ");
    span1.appendChild(text1);
    validator.appendChild(span1);
    span1.classList.add("wrong");
  }
//   if (space) {
//     const span2 = document.createElement("span");
//     const text2 = document.createTextNode("No spaces detected, ");
//     span2.appendChild(text2);
//     validator.appendChild(span2);
//     span2.classList.add("correct");
//   } else {
//     const span2 = document.createElement("span");
//     const text2 = document.createTextNode("You used space, ");
//     span2.appendChild(text2);
//     validator.appendChild(span2);
//     span2.classList.add("wrong");
//   }
//   if (!underscore) {
//     const span3 = document.createElement("span");
//     const text3 = document.createTextNode("underscore count > 1");
//     span3.appendChild(text3);
//     validator.appendChild(span3);
//     span3.classList.add("wrong");
//   } else {
//     const span3 = document.createElement("span");
//     const text3 = document.createTextNode("Underscore count < 1");
//     span3.appendChild(text3);
//     validator.appendChild(span3);
//     span3.classList.add("correct");
//   }
};

const reset = () =>{
    input.value = ""
}