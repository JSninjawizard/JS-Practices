const input = document.querySelector("input");
const btn = document.querySelector("button");
const validator = document.querySelector("h5");
const ordered = document.querySelector("ul");

validator.textContent = "";
let arrayOfAnswers = []


btn.addEventListener("click", function () {
  const inputName = input.value;

const inputLength = strLength(inputName)
const hasSpace = strSpace(inputName)
const hasUnderscore = strUnderscore(inputName)

val(inputLength, hasSpace, hasUnderscore)

arrayOfAnswers = []
arrayOfAnswers.push(inputLength, hasSpace, hasUnderscore)

for (const el of arrayOfAnswers) {
    const listItem = document.createElement("li")
    listItem.textContent = el
    ordered.appendChild(listItem)
    
}

// const orderedList = document.createElement("ol")
// const listItem = document.createElement("li")
// for (const el of arrayOfAnswers) {
//     console.log(el);
//     listItem.textContent = el
//     orderedList.appendChild(listItem)
//     validator.appendChild(orderedList)  

// }
    

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
        // const orderedList = document.createElement("ol")
        // const listItem = document.createElement("li")
        // listItem.textContent = `${a}, ${b}, ${c}`
        // orderedList.appendChild(listItem)
        // validator.appendChild(orderedList)  
}

