/* .............................................AULA 1 - VARIÁVEIS */


/* 

//As declarações são TIPADAS - ele já reconhece o tipo de variável declarada(ex: int, num etc...)

var nome = "Alessandro";
var idade = 44;
var idade2 = 10 //quem dera!!

var frase = "Japão é o melhor time do mundo!"


alert("meu primeiro js");   //ALERT 
alert("Bem vindo: "+nome);  //CONCATENAÇÃO
alert(idade+idade2);        //OPERAÇÃO

var n1 = 5;
var n2 = 87;



console.log(nome+" "+idade+" "+"Seja Bem Vindo!")   //CONSOLE


console.log(frase.replace("Japão","O SANTOS"));// REPLACE
console.log(frase.replace("Japão","O SANTOS").toLowerCase());       //todas minúsculas
console.log(frase.replace("Japão","O SANTOS").toUpperCase());      //TODAS MAIÚSCULAS


 */





/* .............................................AULA 2 - ARRAY (ARRANJOS) */




/* 

var lista = ["maçã","pera","laranja"];    //ARRAY ou LISTA

lista.push("uva");                    //INCLUI UM ITEM NA LISTA
console.log(lista);
lista.pop("pera");                   //RETIRA O ULTIMO ELEMENTO DA LISTA(lista.length);                       //APRESENTA O TAMANHO DA LISTA

console.log(lista);
console.log(lista[0]);
lista.push("jaca");  
console.log(lista.length);           //apresenta o tamanho da lista - quantidade de itens
console.log(lista);
alert(lista[0]);

console.log(lista.reverse());            // imprime a lista ao contrário - do ultimo ao primeiro

console.log(lista.toString());      //imprime os itens em forma de STRING

console.log(lista.toString()[0]);     //imprime apenas a primeira letra da STRING da primeira palavra da lista

console.log(lista.join(" * "));       //define qual tipo de elemento ou caractere separa os itens da lista apresentada

//DICIONÁRIOS
var fruta = {nome: "maçã", cor:"vermelha"}      //DICIONÁRIO (similar ao um json ) 
console.log(fruta);                             //imprime a coleção de itens

console.log(fruta.nome);                           //imprime o item da coleção solicitado
alert(fruta.cor);

// listas de DICIONÁRIOS
var frutas = [{nome: "maçã", cor:"vermelha"},{nome:"banana", cor:"amarela"},{nome:"melância",cor:"verde"}];
alert(frutas[1].nome);                //imprime o item da lista de Dicionários




 */




/* .........................   AULA 3 - CONDICIONAIS IF e ELSE        ............. */



/* 
var idade = prompt("Qual sua idade?")
//var idade = 18;
if(idade >= 18){                                  //condicional IF
    alert("Maior de idade");
}else{                                            //condicional ELSE
    alert("Menor de idade");
};



var count = 0;

while(count <= 1){                                 // condicional WHILE
    console.log(count);
   
    //count = count + 1;
    count++;
   
}


var numero;
for(numero = 10; numero <= 11; numero++){         // condicional FOR
    alert(numero);
};


var d = new Date();
alert(d);

alert(d.getMonth()+1);           //imprime a partir do 0 por isso o '+1',  mês ou / getYear ano  ou / getDay dia

alert(d.getMinutes());
alert(d.getUTCDate());




 */


/* .........................   AULA 4 - FUNÇÕES function(){};    ou       =>(){};        ............. */



/* 

function soma(n1,n2){           //function NOMEDAFUNÇÃO(PARAMETRO1,PARAMETRO2)
    return n1+n2                //RETORNA O QUE FAZER
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}




var validar = 0;    // variável GLOBAL

function validaIdade(idade){
    var validar;  // variável LOCAL

    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}


alert(soma(33,99));            //apresenta o que faz a função usando os parametros digitados no caso o '33' e o '99'

alert(setReplace("Vai Japão", "Japão", "Brasil"));

var idade = prompt("Qual a sua idade?");
//console.log(validaIdade(idade));
validaIdade(idade)
console.log(validar);   //está imprimindo a variável GLOBAL

 */





/* .........................   AULA 4 - MANIPULANDO ELEMENTOS        ............. */



function clicar(){

   alert("Obrigado por clicar !")
}

function agradecimento(){
    document.getElementById("agradecimento").innerHTML ="<p style= color:red;>OBRIGADO</p>";
    //console.log(document.getElementById());
    
}



function outraPagina(){
  window.open("http://www.apitsolutions.com.br");  //abre nova janela com o endereço indicado
 window.location.href="http://www.desenvolva.ong.br";  //muda para o endereço indicado na propria janela
}


function trocar(elemento){
    document.getElementById("mouseover").innerHTML = "Você passou o mouse em cima";
}

function voltar(elemento){
    document.getElementById("mouseover").innerHTML = "PASSE O MOUSE EM CIMA";  //elemento HTML - tag com ID
}

function trocar2(elemento){
   elemento.innerHTML = "Você usou a função trocar2(elemento)";              //elemento HTML - tag sem ID
}


function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
alert
variaveis
console.log
array e dicionario
condicional (if else)
laçoes de repetição while e for
push, pop e length
reverse array
toString para array
join par array
replace
loweCase, upperCase
redirecionar para outra página
date
function
*/