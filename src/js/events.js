import {add, reset, decrease} from './counter.js'


//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
let addButton = document.getElementById("add");
let resetButton = document.getElementById("reset");
let decreaseButton = document.getElementById("decrease");
addButton.addEventListener("click", add);
resetButton.addEventListener("click", reset);
decreaseButton.addEventListener("click", decrease);