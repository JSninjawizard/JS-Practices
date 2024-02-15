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

// ------------------

const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

let validate1 = ""
let validate2 = ""
let validate3 = ""


validator.textContent = "";

btn.addEventListener("click", function () {


  const inputName = input.value;

    let isLong = isLongEnough(inputName)
  let isSpace = isHasSpace(inputName)
  let isUnderScore = isHasUnderScore(inputName)
  if(isLong) {
    validate1 = "input is long enough"
  } else {
   validate1 = "too short"
  }
  if(isSpace) {
    validate2 = "input has no space"
  } else {
   validate2 = `has space!`
  }
  if(!isUnderScore) {
    validate3 = "input has more than 1 undersoce"
  } else {
   validate3 = `has  less than 2 underscore!`
  }



  validator.textContent = `${validate1}, ${validate2}, ${validate3}`



  validateName(inputName);
});

validateName = (inputName) => {
  const iLength = inputName.length;
  const iSpace = inputName;
  const iUnderScore = inputName;
  const specialChars = inputName;



//   lengthCheck(iLength);
//   spaceCheck(iSpace);
//   underscoreCheck(iUnderScore);

//   const err1 = lengthCheck(iLength);
//   const err2 = spaceCheck(iSpace);
//   const err3 = underscoreCheck(iUnderScore);

//   if (err1 === undefined && err2 === undefined && err3 === undefined) {
//     validator.textContent = "Correct!";
//   } else if (err1 !== undefined || err2 !== undefined || err3 !== undefined) {
//     validator.textContent = `${err1}, ${err2}, ${err3}`
//   } else if (err1 === undefined && err2 !== undefined && err3 !== undefined) {
//     validator.textContent = `${err2}, ${err3}`
//   }

// if (err1 !== undefined || err2 !== undefined || err3 !== undefined) {
//     validator.textContent = `${err1}, ${err2}, ${err3}`
// } else {
//     validator.textContent = "correct"
// }
};

isLongEnough = (input) => {

    if(input.length <= 3){
        console.log(input);
        return false
    }
    else return true
}

isHasSpace = (input) => {
    if(input.includes(' ')){
        return false
    }
    else return true
}

isHasUnderScore = (input) => {
    const numberOfUnderScores = input.split('_').length - 1;
    console.log(numberOfUnderScores);
    if(numberOfUnderScores <= 1){
        return true
    }
    else return false
}

// lengthCheck = (iLength) => {
//     console.log(iLength);
//   if (iLength <= 3) {
//     return validator.textContent = "Name is too short"
//   } else {
//     return validator.textContent = ""
//   }
// };

// spaceCheck = (iSpace) => {
//   if (iSpace.includes(" ")) {
//     return validator.textContent = "Name has space character"
//   } else {
//     return validator.textContent = ""
//   }
// };

// underscoreCheck = (iUnderScore) => {
//   const toArr = iUnderScore.split("");
//   const count = toArr.filter((el) => el.includes("_"));

//   if (count.length >= 2) {
//     return validator.textContent = "Name has more than 2 underscore characters"
//   } else {
//     return validator.textContent = ""
//   }
// };
