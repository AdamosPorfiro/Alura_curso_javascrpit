//document = Acessa o arquivo HTML e querySelector = Permite selecionar um fragmento do html Ex: tag h1 ou tag p
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Criamos uma função para alcançar o mesmo resultado dos códigos digitados acima
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let quantidadeTentativas = 1;
function exibirTExtoNaTela(tag, texto){ // parâmetro tag= codigo html e texto o texto a ser informado
    let campo = document.querySelector(tag);//Variavel que vai selecionar a tag e inserir o texto no html e exibi-lo
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
//Criams uma função para exibir a mensagem na tela
function exibirMensagemInicial(){
    exibirTExtoNaTela('h1','Jogo do número secreto');
    exibirTExtoNaTela('p', 'Escolha um número entre 1 e 10');
}

let numeroSecreto = gerarNumeroAleatorio(); // guarda o numero secreto!
function gerarNumeroAleatorio() {
    //return = Vai retornar o numero e guardar
    let numeroEscolhido = parseInt(Math.random() * numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    } 


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();     
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    quantidadeTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){

        exibirTExtoNaTela('h1', 'Parabens, você acertou!');
        let palavraTentativa = quantidadeTentativas > 1? 'tentativas' : ' tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${quantidadeTentativas} ${palavraTentativa}!`
        exibirTExtoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //getElementById acessa um id do html
    }
    else if (chute > numeroSecreto) {
            
            exibirTExtoNaTela('h1', 'Errou, tente novamente!')
            exibirTExtoNaTela('p','O número secreto é MENOR!');
        }
        else{
            
            exibirTExtoNaTela('h1', 'Errou, tente novamente!')
            exibirTExtoNaTela('p', 'O número secreto é MAIOR!');
        }
        quantidadeTentativas++;
        limparCampo();
    }
exibirMensagemInicial();





