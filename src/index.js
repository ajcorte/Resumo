//Declarando VARIAVEIS
console.log("Digite o nome do jogador:");
//declarar uma variavel
let nickname = "ajcorte";
//concatenando uma mensagem fixa + uma variavel
console.log("Bem vindo " + nickname +"!");
console.log("Atencao, jogador " + nickname + " entrou no servidor!");

//Declarando CONSTANTES
const notificacao = "Pokemon Go diz: ";
//Saida
console.log(notificacao + "Tem um novo pokemon no game!");
console.log(notificacao + "Voce foi derrotado por um lider Ouro!");

//Exemplo pratico
//VARIAVEIS
let poteCafe = "Cafe";
let poteAcucar = "Acucar";
let poteBiscoito = "Biscoito";
let mensagem = "Na cozina hoje tem: ";
//Saida
console.log(mensagem +
poteCafe + " - " +
poteAcucar + " - " +
poteBiscoito);

//Pokemon
let nomePokemon = "Pikachu";
let pokemonSexo = "M";
let nivelPokemon = 20;
let pontosDeVidaPokemon = 45;
let selecionavel = false;

console.log("O Pokemon " + nomePokemon +
" eh do sexo " + pokemonSexo +
", esta no nivel " + nivelPokemon +
" e tem " + pontosDeVidaPokemon + " pontos de vida.");

//VETORES e MATRIZES
let nomesPokemon = ["Pikachu" , "Chamander" , "Bubassaur"];
let timePokemon = [
  ["Pikachu" , "M" , 1],
  ["Chamander", "F" , 3]
];
// Linhas e Colunas
//      C[0]   C[1]   C[2]
//L[0] [0][0] [0][1] [0][2]
//L[1] [1][0] [1][1] [1][2]

console.log(
"O Pokemon " + timePokemon[1][0]  + 
" eh do sexo " + timePokemon[1][1] +
 " e esta no nivel " + timePokemon[1][2] + ".");

 //Operadores ARITMETICOS

 //ADICAO
 let adicao = 5 + 3;
 console.log("Adicao= " + adicao);

 //Sinal de + usado para concatenar string
 let idade1 = 30;
 console.log("Valor da minha variavel= " + idade1);

 // '+' realizando somas
 let idade2 = 30 + 6;
 console.log("Operacao de adicao= " + idade2);

 //SUBTRACAO
 let subtracao = 8 - 2;
 console.log("Subtracao= " + subtracao);

 // '-' Realizando subtracoes
 let primeiroNumero = 1023;
 let segundoNumero= 23;
 console.log("Resultado= " + (primeiroNumero - segundoNumero));

// MULTIPLICACAO
 let multiplicacao = 4 * 6;
 console.log("Multiplicao= " + multiplicacao);

 // '*' Realizando Multiplicacoes
 let multiplicador = 4;
 let multiplicando = 12;
 let produto = multiplicador * multiplicando;
 console.log("Resultado da multiplicacao= " + produto);

 // DIVISAO
 let divisao = 10 / 2;
 console.log("Divisao= " + divisao);

 // '/' Realizando Divisoes
 let notaDoMercado = 50;
 let pessoasParaDividir = 2;
 console.log("Operacao de divisao= " + notaDoMercado / pessoasParaDividir);

 // MODULO
 let modulo = 10 % 3;
 console.log("Modulo= " + modulo);

 // '%' Pegando o resto de uma divisao
 let calculo = 10 % 3;
 console.log("Operacao de modulo= " + calculo);

 //Operadores RELACIONAIS
// '=' eh atribuicao
// '==' compara valor
// '===' compara valor e formato do conteudo

// '!==' eh diferente?
let marca1 = "Apple";
let marca2 = "Sansung";
let resultado1 = marca1 !== marca2;
console.log("As marcas sao diferentes. " + resultado1);

 let igual = (5 == 5); // '==' Comparar valor
 console.log("5 = 5: " + igual);

 // Guardar valor em uma variavel de resultado (TRUE / FALSE)
 let marca3 = "Apple";
 let resultado2 = marca3 === "Sansung";
 console.log("Resultado: " + resultado2);

 // Guardar valor em uma variavel de resultado (TRUE / FALSE)
 let cpfBloqueado = "123.456.789-00";
 let cpfUsuario1 = "123.456.789-XX";
 let ehCPFBloqueado1 = cpfUsuario1 === cpfBloqueado;
 console.log("O CPF do usuario eh valido? " + ehCPFBloqueado1);

 let cpfPermitido = "123.456.789-00";
 let cpfUsuario2 = "123.456.789-00";
 let ehCPFBloqueado2 = cpfUsuario2 === cpfPermitido;
 console.log("O CPF do usuario eh valido? " + ehCPFBloqueado2);

 let diferente = (5 != 6);
 console.log("5 =/ 6: " + diferente);

 let maiorQue = (5 > 4);
 console.log("5 > 4: " + maiorQue);

 let menorQue = (4 < 5);
 console.log("4 < 5: " + menorQue);

 let maiorIgual = (5 >= 4);
 console.log("5 >= 4: " + maiorIgual);
// EX2
 let idadeMinima = 18;
 let idadePessoa1 = 18;
 let idadePermitida = idadeMinima >= idadePessoa1;
console.log("Idade permitida? " + idadePermitida);

 let menorIgual = (4 <= 5);
 console.log("4 <= 5: " + menorIgual);
 //EX2
 let idadeMaxima = 50;
 let idadePessoa2 = 50;
 let resultadoIdadeValida = idadePessoa2 <= idadeMaxima;
 console.log("Idade Permitida? " + resultadoIdadeValida);

 // Operadores LOGICOS

 // AND ( && )
 let idade = 18;
 let vistoVerificado = false;
 let resultado = (idade >= 18) && (vistoVerificado === true);
 console.log("Requisitos preenchidos? " + resultado);

 // AND  ( && ) - 100 moedas coletadas e 1 item estrela
 let moedasColetadas = 99;
 let item = "estreal";
 let resultadoPlay1 = ( moedasColetadas >= 100) && (item === "estrela");
 console.log("Requisitos preenchidos? " + resultadoPlay1);

 // OR ( || ) - Personagem liberado se nao estiver chovendo ou se possuir guarda chuva
 let tempo = "chuva";
 let item1 = "guarda chuva";
 let liberado = (tempo !== "chuva") || (item1 === "guarda chuva");
 console.log("Personagem liberado? " + liberado);

 // NOT ( ! ) - Afirmacao Negativa
 let tempo1 = "chuva";
 let resultado3 = tempo1  === "chuva";
 console.log("Esta chovendo. " + !!resultado3);

 // NOT ( ! ) - Afirmacao Negativa
 let tempo2 = "chuva";
 let hora = 8;
 let resultado4 = !((tempo2 !=="chuva") && (hora > 6));
 console.log("Esta chovendo. " + resultado4);
 
 // Operadores de ATRIBUICAO
 let preco1 = 10
 preco1 += 5 // preco = preco + 5 = 15
 console.log("Resultado= " + preco1);

 let preco2 = 10
 preco2 -= 5 // preco = preco - 5 = 5
 console.log("Resultado= " + preco2);

 // Operadores de INCREMENTO e DECREMENTO
 // '++' Incremento
 let contador1 = 1;
 contador1++;
 contador1++;
 console.log("Contagem de 1 + 1 + 1 eh igual a: " + contador1);

 // '--' Decremento
 let contador2 = 5;
 contador2--;
 contador2--;
 console.log("Contagem de 5 - 1 - 1 eh igual a: " + contador2);

 // Estruturas CONDICIONAIS
 // IF, ELSE IF, ELSE

 // IF, ELSE
let possuiOvos = true;
let itensComprados = "";

if(possuiOvos);{
  itensComprados = "Leite";
}
else{
  console.log("Passou na sessao de congelados? ");
  itensComprados = "Lasanha congelada";
}

console.log("Item comprado: " + itensComprados);

// If, ELSE IF, ELSE