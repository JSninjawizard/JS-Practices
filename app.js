function nameVal (name) {
    const nameLength = name.length
    const isSpace = name.includes(" ")

    const nameToArr = name.split("")
    const UnScores = nameToArr.filter((el) => el.includes("_"))

    if (nameLength <= 3 || isSpace || UnScores.length >=2) {
        console.log('idi na huy');
    } else {
        console.log(name);
    }

}

nameVal("skasdfa")

// ---

const input = document.querySelector("input")
const btn = document.querySelector("button")
const validator = document.querySelector("h5")


validator.textContent = ""

btn.addEventListener("click", function(){
    const inputName = input.value
    validateName(inputName)
})

validateName = (inputName) => {
    const iLength = inputName.length
    const iSpace = inputName
    const iUnderScore = inputName

    lengthCheck(iLength)
    spaceCheck(iSpace)
    underScoreCheck(iUnderScore)
}

lengthCheck = (iLength) => {
    if (iLength <= 3) {
        validator.textContent = 'Name too short'
    }
}

spaceCheck = (iSpace) => {
    if (iSpace.includes(" ")) {
        validator.textContent = 'Name has space character'
    }
}

spaceCheck = (iSpace) => {
    if (iSpace.includes(" ")) {
        validator.textContent = 'Name has space character'
    }
}

underScoreCheck = (iUnderScore) => {
    const toArr = iUnderScore.split("")
    const count = toArr.filter((el) => el.includes("_"))

    if (count.length >= 2) {
        validator.textContent = "Name has more than 2 underscore characters"
    }
}