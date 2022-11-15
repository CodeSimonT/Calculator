const buttons = document.querySelector(".body")
const input = document.querySelector(".input")
const output = document.querySelector(".output")

buttons.addEventListener("click", e => {
    if(e.target.matches(".button")) {
        input.innerText += e.target.innerText
    }
})