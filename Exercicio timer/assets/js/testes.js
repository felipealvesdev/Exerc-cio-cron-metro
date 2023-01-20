const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const restartBtn = document.querySelector(".restart");
let contadorDeSegundos = 1;
let contadorDeMinutos = 0;
let contadorDeHoras = 0;
/*
let countingSeconds = setInterval (function () {
    console.log(`O valor de contadorDeSegundos é ${contadorDeSegundos} `);
    contadorDeSegundos++;
}, 1000);

setTimeout(function(){
    clearInterval(countingSeconds);
}, 10000);

//contar segundos e parar de contar está funcionando

let countingMinutes = setInterval (function () {
    contadorDeMinutos++;
    console.log(`O valor de contadorDeMinutos é ${contadorDeMinutos} `);
}, 3000);
// contar minutos está funcionando

setTimeout(function(){
    clearInterval(countingMinutes);
}, 9000);

// contar e parar countingMinutes está funcionando 
*/
/*
startBtn.addEventListener("click", function(){
    let countingSeconds = setInterval (function () {
        
        timer.innerHTML = `<h2> ${contadorDeHoras}:${contadorDeMinutos}: ${contadorDeSegundos}</h2>`;
        contadorDeSegundos++;
    }, 1000);   
    let countingMinutes = setInterval (function () {
        contadorDeMinutos++;        
    }, 3000);
    let countingHours = setInterval (function () {
        contadorDeHoras++;        
    }, 3000);
    pauseBtn.addEventListener("click", function(){
        console.log("Apertouuuuu o pausee");
        setTimeout(function(){
            clearInterval(countingSeconds);
        }, 0);
        setTimeout(function(){
            clearInterval(countingMinutes);
        }, 0);
        setTimeout(function(){
            clearInterval(countingHours);
        }, 0);
    });
    restartBtn.addEventListener("click", function(){
        contadorDeHoras = 0;
        contadorDeMinutos = 0;
        contadorDeSegundos = 0;
    });
});
*/

/*SEGUNDO PROGRAMA EM JS QUE TENTEI 
    /*
let data = new Date();
    
let dataObj = {
    segundos: data.getSeconds(),
    minutos: data.getMinutes(),
    horas: data.getHours(),
    }
*/
/*
startBtn.addEventListener("click", function(){
    data = new Date();
    let dataObj = {
        segundos: data.getSeconds(),
        minutos: data.getMinutes(),
        horas: data.getHours(),
        }
    segundoInicial = dataObj.segundos;
    minutoInicial = dataObj.minutos;
    horaInicial = dataObj.horas;
    
    let countingSeconds = setInterval (function () {   
    let data = new Date();
    let dataObj = {
        segundos: data.getSeconds(),
        minutos: data.getMinutes(),
        horas: data.getHours(),
    }
        timer.innerHTML = `tempo marcado: ${((dataObj.segundos - segundoInicial) + segundoInicial)} e o segundoInicial é de: ${segundoInicial}`;
    
    }, 1000);


});
*/


