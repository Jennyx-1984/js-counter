function getNumber() {
    return document.getElementById("number");
}


function add(){
    //Escribir tu código que aumenta
    const number = getNumber();
    number.innerHTML = String(parseInt(number.innerHTML) + 1);
}

function reset(){
    //Escribir tu código que hace un reset a 0
    const number = getNumber();
    number.innerHTML = 0;
}

function decrease(){
    //Escribir tu código que resta
    const number = getNumber();
    let current = String(parseInt(number.innerHTML));
    number.innerHTML = current > 0 ? current - 1 : 0;
};

export {add, reset, decrease}