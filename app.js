const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");

validator.textContent = "";
// let arrayOfAnswers = []


btn.addEventListener("click", function () {
  const inputName = input.value;

//   let isLong = isLongEnough(inputName);
//   let isSpace = isHasSpace(inputName);
//   let isUnderScore = isHasUnderScore(inputName);
//   console.log(isUnderScore);

//   validation(isLong, isSpace, isUnderScore);
//   reset();


// !new
const inputLength = strLength(inputName)
const hasSpace = strSpace(inputName)
const hasUnderscore = strUnderscore(inputName)

const validate = val(inputLength, hasSpace, hasUnderscore)
arrayOfAnswers = []
arrayOfAnswers.push(inputLength, hasSpace, hasUnderscore)
console.log(arrayOfAnswers);
});

// !new
strLength = (str) => {
    const strLength = str.length
    if (str.length <= 3) {
        return false
        // return `String is too short`
    } else {
        return true
        // return `String is at least 3 chars long`
    }
}

strSpace = (spaces) => {
    const spaceCount = spaces.split(" ").length - 1
    const arr = spaces.split("")
    const spaceInSptring = arr.includes(" ")
    return spaceInSptring
    // if (spaceCount != 0) {
    //     return `String has ${spaceCount} spaces`
    // } else {
    //     return `String has no spaces`
    // }
}

strUnderscore = (underscore) => {
    const underscoreCount = underscore.split("_").length -1
    // const arr = underscore.split("")
    // const underscoreInString = arr.includes("_")
    // return underscoreInString

    if (underscoreCount > 1) {
        return true
    } else {
        return false
    }

    // if (underscoreCount > 1) {
    //     return `String has ${underscoreCount} underscores`
    // } else {
    //     return `String has allowed number of underscores`
    // }
}

val = (a,b,c) => {
    if (a === true) {
        console.log('str > 3');
    } if (a === false) {
        console.log('str < 3');
    } if (b === true) {
        console.log('str has space');
    } if (b === false) {
        console.log("str has no space");
    } if (c === true) {
        console.log('str has more that 1 underscore');
    } if (c === false) {
        console.log('undersocres count ok');
    }
        // const orderedList = document.createElement("ol")
        // const listItem = document.createElement("li")
        // listItem.textContent = `${a}, ${b}, ${c}`
        // orderedList.appendChild(listItem)
        // validator.appendChild(orderedList)  
}





// isLongEnough = (input) => {
//   if (input.length <= 3) {
//     console.log(input);
//     return false;
//   } else return true;
// };

// isHasSpace = (input) => {
//   if (input.includes(" ")) {
//     return false;
//   } else return true;
// };

// isHasUnderScore = (input) => {
//   const numberOfUnderScores = input.split("_").length - 1;
//   console.log(numberOfUnderScores);
//   if (numberOfUnderScores <= 1) {
//     return true;
//   } else return false;
// };

// const validation = (length, space, underscore) => {
//   if (length) {
//     const span1 = document.createElement("span");
//     const text1 = document.createTextNode("Correct, ");
//     span1.appendChild(text1);
//     validator.appendChild(span1);
//     span1.classList.add("correct");
//   } else {
//     const span1 = document.createElement("span");
//     const text1 = document.createTextNode("Too short, ");
//     span1.appendChild(text1);
//     validator.appendChild(span1);
//     span1.classList.add("wrong");
//   }
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
//     const text3 = document.createTextNode(`underscore count > 2`);
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
// };

// const reset = () => {
//   input.value = "";
// };
