"use strict"

const semaphore = document.getElementById("semaphore")
const turnAutomatic = document.getElementById("turnAutomatic")
let idInterval

const isOff = () => semaphore.src.includes("desligado")

const isRed = () => semaphore.src.includes("vermelho")

const isYellow = () => semaphore.src.includes("amarelo")

function toTurnOff() {
    semaphore.src = "img/desligado.png"
}

function toTurnRed() {
    semaphore.src = "img/vermelho.png"
}

function toTurnYellow() {
    semaphore.src = "img/amarelo.png"
}

function toTurnGreen() {
    semaphore.src = "img/verde.png"
}

function changeImage() {
    if (isOff()) {
        toTurnRed()
    } else if (isRed()) {
        toTurnYellow()
    } else if (isYellow()) {
        toTurnGreen()
    } else {
        toTurnRed()
    }
}

function toTurnAutomatic() {

    if (turnAutomatic.textContent == "AUTOMATIC") {
        idInterval = setInterval(changeImage, 1000)
        turnAutomatic.textContent = "STOP"
    } else {
        clearInterval(idInterval)
        toTurnOff()
        turnAutomatic.textContent = "AUTOMATIC"
    }

}

document.getElementById("turnRed")
    .addEventListener("click", toTurnRed)

document.getElementById("turnYellow")
    .addEventListener("click", toTurnYellow)

document.getElementById("turnGreen")
    .addEventListener("click", toTurnGreen)

turnAutomatic.addEventListener("click", toTurnAutomatic)