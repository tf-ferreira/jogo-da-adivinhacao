function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarDOM(tag,conteudo){
    let campo = document.querySelector(tag);
    campo.innerHTML = conteudo;
    responsiveVoice.speak(conteudo,'Brazilian Portuguese Female',{rate:1.2});
}

function limparCampo(tag){
    let aux = document.querySelector(tag);
    aux.value = '';
}

function frasesIniciais(){
    alterarDOM('h1','Jogo da adivinhação');
    alterarDOM('p','Escolha um número entre 1 e 10:');
}

frasesIniciais();

let secretNumber = getRandomIntInclusive(1,10);
console.log(secretNumber);

let tentativas = 1;


function verificarChute(){
    let chute = document.querySelector('input').value;

    //chute == secretNumber ? alterarDOM('h1','Você acertou!') : alterarDOM('p','Tente de novo.');

    if(chute == secretNumber){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let frase = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        alterarDOM('h1','Parabéns!');
        alterarDOM('p',frase);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        tentativas += 1;
        alterarDOM('h1','Tente de novo.');
        if(chute > secretNumber){
            alterarDOM('p','O número secreto é menor.');
        }else{
            alterarDOM('p','O número secreto é maior.');
        }
        limparCampo('input');
    }
}

function novoJogo(){
    //window.location.reload(true);
    secretNumber = getRandomIntInclusive(1,10);
    console.log(secretNumber);
    frasesIniciais();
    limparCampo('input');
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
