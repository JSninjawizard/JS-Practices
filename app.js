function nameVal(name) {
  const nameLength = name.length;
  const isSpace = name.includes(" ");

  const nameToArr = name.split("");
  const UnScores = nameToArr.filter((el) => el.includes("_"));

  if (nameLength <= 3 || isSpace || UnScores.length >= 2) {
    console.log("wrong!!");
  } else {
    console.log(name);
  }
}

nameVal("skasdfa");

// ---

const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

validator.textContent = "";

btn.addEventListener("click", function () {
  const inputName = input.value;
  validateName(inputName);
});

validateName = (inputName) => {
  const iLength = inputName.length;
  const iSpace = inputName;
  const iUnderScore = inputName;
  const specialChars = inputName;

  lengthCheck(iLength);
  spaceCheck(iSpace);
  underscoreCheck(iUnderScore);

  const err1 = lengthCheck(iLength);
  console.log(err1);
  const err2 = spaceCheck(iSpace);
  const err3 = underscoreCheck(iUnderScore);

  if (err1 === undefined && err2 === undefined && err3 === undefined) {
    validator.textContent = "Correct!";
  } else if (err1 !== undefined || err2 !== undefined || err3 !== undefined) {
    validator.textContent = `${err1}, ${err2}, ${err3}`
  } else if (err1 === undefined && err2 !== undefined && err3 !== undefined) {
    validator.textContent = `${err2}, ${err3}`
  }
};

lengthCheck = (iLength) => {
    console.log(iLength);
  if (iLength <= 3) {
    return validator.textContent = "Name is too short"
  }
};

spaceCheck = (iSpace) => {
  if (iSpace.includes(" ")) {
    return validator.textContent = "Name has space character"
  }
};

underscoreCheck = (iUnderScore) => {
  const toArr = iUnderScore.split("");
  const count = toArr.filter((el) => el.includes("_"));

  if (count.length >= 2) {
    return validator.textContent = "Name has more than 2 underscore characters"
  }
};
