const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const restartBtn = document.querySelector(".restart");

// EM PORTUGUES ESTAO AS VARIAVEIS QUE ADQUIREM A QUANTIDADE
let contadorDeSegundos = 0;
let contadorDeMinutos = 0;
let contadorDeHoras = 0;

function zeroAEsquerda (num){
    return num>=10 ? num : `0${num}`;
}

startBtn.addEventListener("click", function(){
    countingSeconds = setInterval(function() {
        contadorDeSegundos++;
        if(contadorDeSegundos>59){
            contadorDeSegundos = 0;
            contadorDeMinutos++;
            if(contadorDeMinutos>59){
                contadorDeMinutos = 0;
                contadorDeHoras++;
            }
        }


            timer.innerHTML = `<h2> ${zeroAEsquerda(contadorDeHoras)}:${zeroAEsquerda(contadorDeMinutos)}:${zeroAEsquerda(contadorDeSegundos)}</h2>`   
    }, 1000);
    pauseBtn.addEventListener("click", function(){
        setTimeout(function(){
            clearInterval(countingSeconds);
        }, 0);
    });

    restartBtn.addEventListener("click", function(){
        setTimeout(function(){
            clearInterval(countingSeconds);
        }, 0);        
        contadorDeSegundos = 0;
        contadorDeMinutos = 0;
        contadorDeHoras = 0;
        timer.innerHTML = `<h2> 0${contadorDeHoras}:0${contadorDeMinutos}:0${contadorDeSegundos}</h2>`

    });
});// ATE AQUI O CODIGO CONTA O CRONOMETRO, INICIA, PAUSA E RESTARTA PERFEITAMENTE.

