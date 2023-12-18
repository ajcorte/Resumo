//Declarando variaveis
console.log("Digite o nome do jogador:");
//declarar uma variavel
let nickname = "ajcorte";
//concatenando uma mensagem fixa + uma variavel
console.log("Bem vindo " + nickname +"!");
console.log("Atencao, jogador " + nickname + " entrou no servidor!");

//Declarando constantes
const notificacao = "Pokemon Go diz: ";
//Saida
console.log(notificacao + "Tem um novo pokemon no game!");
console.log(notificacao + "Voce foi derrotado por um lider Ouro!");

//Exemplo pratico
//Variaveis
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

//Vetores e Matrizes
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
 " e esta no nivel " + timePokemon[1][2]);

 //Operadores Aritmeticos
 let adicao = 5 + 3;
 console.log(adicao);

 let subtracao = 8 - 2;
 console.log(subtracao);

 let multiplicacao = 4 * 6;
 console.log(multiplicacao);

 let divisao = 10 / 2;
 console.log(divisao);

 let modulo = 10 % 3;
 console.log(modulo);

 //Operadores Relacionais
 let igual = (5 == 5);
 console.log(igual);

 let diferente = (5 != 6);
 console.log(diferente);

 let maiorQue = (5 > 4);
 console.log(maiorQue);

 let menorQue = (4 < 5);
 console.log(menorQue);

 let maiorIgual = (5 >= 4);
 console.log(maiorIgual);

 let menorIgual = (4 <= 5);
 console.log(menorIgual);

 //Operadores Logicos
 //Operadores de Atribuicao
 //Operadores de Incremento e Decremento

 