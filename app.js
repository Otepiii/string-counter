let userInput = document.querySelector(".result").value;
let enterBtn = document.querySelector(".enter-btn")
let resultSection = document.querySelector(".result");


enterBtn.addEventListener("click", () => {
    resultSection.innerHTML = userInput
})



