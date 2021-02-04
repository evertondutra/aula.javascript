/*var nome = "Everton Dutra";
var idade = 29
var idade2 = 10
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "))
//alert(lista[2]);

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas[0].cor);


var idade = prompt("Qual a sua idade? ");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("Menor de idade");
};


var count = 0;
while (count <= 10){
    console.log(count);
    count = count + 1;
    // count ++
};


var count;
for(count=0; count <= 5; count ++){
    alert(count);
};


var d = new Date();
alert(d)  //mostra a data como dia, mês, horário
alert(d.getMonth()+ 1);  //mostra o mês
alert(d.getMinutes());  //mostra os minutos
*/


function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var valida;
    if (idade >=18){
        valida = true
    }else{
        valida = false
    }
    return valida;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade))

alert(soma(5, 10));


