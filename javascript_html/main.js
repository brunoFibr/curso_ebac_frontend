const numeroUm = document.getElementById('campo-um');
const numeroDois = document.getElementById('campo-dois');
const form = document.getElementById('form');
const message = document.querySelector('.message');

function valida(numeroUm, numeroDois){
    return parseInt(numeroDois.value) > parseInt(numeroUm.value);
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    if(!valida(numeroUm, numeroDois)){

        message.classList.add('error');
        message.innerHTML = 'Invalido! Numero A maior/igual ao numero B';

    }else {
        message.classList.remove('error');
        message.classList.add('sucess');
        message.innerHTML = 'Numero B é Maior que o número A';
        
    }    
})

