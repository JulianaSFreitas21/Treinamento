//ROCKETSEAT

//EXERCÍCIO 1

//Retorne o seguinte conteudo:
//O usuário mora em São Paulo / SP,no bairro Centro, na rua "Rua dos Pinheiros" com n° 1293.

var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com n° ${endereco.numero}.`)


//EXERCÍCIO 2

//crie uma função que dado um intervalo (entre x e y) exiba todos os números pares

function pares(x,y){
    while(x<=y){
        if((x%2)==0){
        var par = x
    }
    x++   
    console.log(par) 
    }
}

pares(32, 321);
