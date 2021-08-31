"use strict"

const semaphore = document.getElementById("semaphore")
const turnAutomatic = document.getElementById("turnAutomatic")
let idInterval

const isSemaphoreOff = () => semaphore.src.includes("desligado")

const isSemaphoreRed = () => semaphore.src.includes("vermelho")

const isSemaphoreYellow = () => semaphore.src.includes("amarelo")

const toTurnSemaphoreOff = () => semaphore.src = "img/desligado.png"

const toTurnSemaphoreRed = () => semaphore.src = "img/vermelho.png"

const toTurnSemaphoreYellow = () => semaphore.src = "img/amarelo.png"

const toTurnSemaphoreGreen = () => semaphore.src = "img/verde.png"

function toTurnSemaphoreRedAndReset() {
    clearInterval(idInterval)
    turnAutomatic.textContent = "AUTOMATIC"
    semaphore.src = "img/vermelho.png"
}

function toTurnSemaphoreYellowAndReset() {
    clearInterval(idInterval)
    turnAutomatic.textContent = "AUTOMATIC"
    semaphore.src = "img/amarelo.png"
}

function toTurnSemaphoreGreenAndReset() {
    clearInterval(idInterval)
    turnAutomatic.textContent = "AUTOMATIC"
    semaphore.src = "img/verde.png"
}

function changeImage() {
    if (isSemaphoreOff()) {
        toTurnSemaphoreRed()
    } else if (isSemaphoreRed()) {
        toTurnSemaphoreYellow()
    } else if (isSemaphoreYellow()) {
        toTurnSemaphoreGreen()
    } else {
        toTurnSemaphoreRed()
    }
}

function toTurnSemaphoreAutomatic() {

    if (turnAutomatic.textContent == "AUTOMATIC") {
        idInterval = setInterval(changeImage, 1000)
        turnAutomatic.textContent = "STOP"
    } else {
        clearInterval(idInterval)
        toTurnSemaphoreOff()
        turnAutomatic.textContent = "AUTOMATIC"
    }

}

document.getElementById("turnRed")
    .addEventListener("click", toTurnSemaphoreRedAndReset)

document.getElementById("turnYellow")
    .addEventListener("click", toTurnSemaphoreYellowAndReset)

document.getElementById("turnGreen")
    .addEventListener("click", toTurnSemaphoreGreenAndReset)

turnAutomatic.addEventListener("click", toTurnSemaphoreAutomatic)