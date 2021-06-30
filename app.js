let userInput = document.querySelector(".result").value;
let enterBtn = document.querySelector(".enter-btn")
let resultSection = document.querySelector(".result");


enterBtn.addEventListener("click", () => {
    console.log(userInput)
    resultSection.innerHTML = userInput
})






// function stringNum(){
//     let stringCount
//     stringCount = userInput.length;
//     return resultSection.innerHTML = stringCount;
 
// }


