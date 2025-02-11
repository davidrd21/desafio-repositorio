<<<<<<< HEAD
alert('Bem vindo ao jogo do número secreto!');
let adivinha ;
let numeroMax = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroMax);
let tentativas = 1;
// enquanto o adivinha não for igual ao número secreto... (repita)
while (adivinha != numeroSecreto) {
    adivinha = prompt('Digite um número entre 0 e 5000: ');
    // se o adivinha for igual o número secreto
    if (adivinha == numeroSecreto) {
       break;
        // senão
    } else {
        if (adivinha > numeroSecreto) {
            alert(`O número secreto é menor que ${adivinha}.`);
        } else {
            alert(`O número secreto é maior que ${adivinha}.`);

        }
        // tentativas = tentativas + 1
        tentativas ++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`);

// if (tentativas > 1){
//    alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//   alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} tentativa!`);
// }
=======
/*
alert('Bem vindo ao jogo do número secreto!');
let adivinha = prompt('Digite um número entre 0 e 10: ');
let numeroSecreto = 5;
// se o adivinha for igual o número secreto
if (adivinha == numeroSecreto) {
    alert(`Você acertou! O número secreto é ${numeroSecreto}!`);
} else {
    if (adivinha > numeroSecreto){
        alert(`Você errou! o número secreto é menor que ${adivinha}`);
    } else {
        alert(`Você errou! o número secreto é maior que ${adivinha}`);
    }
}
*/
>>>>>>> 96de4204094f579b273165b2ef158b0ac0ca92be
