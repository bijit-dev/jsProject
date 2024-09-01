let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")


let mainDiv=document.querySelector(".main")


btn1.addEventListener('click', function () {
    mainDiv.style.background="red"
    mainDiv.style.color="white"
}) 

btn2.addEventListener('click', function () {
    mainDiv.style.background="yellow"
    mainDiv.style.color="blue"
}) 

btn3.addEventListener('click', function () {
    mainDiv.style.background="blue"
    mainDiv.style.color="white"
}) 


btn4.addEventListener('click', function () {
    mainDiv.style.background="green"
    mainDiv.style.color="black"
}) 

btn5.addEventListener('click', function () {
    mainDiv.style.background="pink"
    mainDiv.style.color="black"
}) 