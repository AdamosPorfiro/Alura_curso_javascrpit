// Passar uma mensagem para o usuario;
alert('"Seja bem-vindo ao jogo do número secreto!"');
console.log('O jogo iniciou!');

//let = Cria uma variavel, um espaço na memoria que será armazenado um valor;
//Usamos a função ,math.random() Que vai gerar um número pseudo aleatório mutiplicamos ele por 100 para termos valores inteiros e usamos a função parseInt() para preservar apenas o número inteiro, sem casas decimais.
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O número secreto é: ${numeroSecreto}`);

//prompt('') = Exibe mensagem para o usuario e permite o mesmo inserir uma mensagem;
let chute; 
console.log(chute);
//Tentativas de acerto;
let tentativas = 1;

//Enquanto o chute não for igual ao numero secreto.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se o chute for igual ao número secreto;
    if (chute == numeroSecreto) {
        break;
    } 
    //Se não for igual ao número secreto;
    else {
        // Se chute for maior;
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        //Se chute for menor;
        } else{
            alert(`O número secreto é maior que ${chute}`)
        }
        console.log('Game Over, Reinicie: F5');
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
//Template string: utilizamos a crase para misturar informações de texto com a variavel. Para concatenar a variavel usamos o cifrão seguido de chaves com nome da variavel;
//if (tentativas > 1){
//alert(`Isso ai! Você descobriu o número secreto que é: ${numeroSecreto} com ${tentativas} tentativas.`);
//console.log('O jogador acertou o número secreto!');
//}else{
    //alert(`Isso ai! Você descobriu o número secreto que é: ${numeroSecreto} com uma ${tentativas} tentativa.`);
//}
//Como o mercado escreve
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Operadores ternário
alert(`Isso ai! Você descobriu o número secreto que é: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
alert('Para reiniciar aperta: F5')
//"Se você está sempre tentando ser normal, nunca saberá o quão incrível você pode ser." (Maya Angelou)