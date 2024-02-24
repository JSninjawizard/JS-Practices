const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

validator.textContent = "";
let arrayOfAnswers = []


btn.addEventListener("click", function () {
  const inputName = input.value;

const inputLength = strLength(inputName)
const hasSpace = strSpace(inputName)
const hasUnderscore = strUnderscore(inputName)

const validate = val(inputLength, hasSpace, hasUnderscore)
arrayOfAnswers = []
arrayOfAnswers.push(inputLength, hasSpace, hasUnderscore)
console.log(arrayOfAnswers);
});

strLength = (str) => {
    if (str.length <= 3) {
        return `String is too short`
    } else {
        return `String is at least 3 chars long`
    }
}

strSpace = (spaces) => {
    const spaceCount = spaces.split(" ").length - 1
    if (spaceCount != 0) {
        return `String has ${spaceCount} spaces`
    } else {
        return `String has no spaces`
    }
}

strUnderscore = (underscore) => {
    const underscoreCount = underscore.split("_").length -1
    if (underscoreCount > 1) {
        return `String has ${underscoreCount} underscores`
    } else {
        return `String has allowed number of underscores`
    }
}

val = (a,b,c) => {
    // if (a === true) {
    //     console.log('str > 3');
    // } if (a === false) {
    //     console.log('str < 3');
    // } if (b === true) {
    //     console.log('str has space');
    // } if (b === false) {
    //     console.log("str has no space");
    // } if (c === true) {
    //     console.log('str has more that 1 underscore');
    // } if (c === false) {
    //     console.log('undersocres count ok');
    // }
        // const orderedList = document.createElement("ol")
        // const listItem = document.createElement("li")
        // listItem.textContent = `${a}, ${b}, ${c}`
        // orderedList.appendChild(listItem)
        // validator.appendChild(orderedList)  
}

