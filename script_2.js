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

//EXERCICIO 3 

//Escreva uma função que verifique se o vetor de habilidade passado possui a habilidade "javascript" e retorna um boleano true/false caso
//exista ou não

function temHabilidade(skills){
    if(skills.indexOf("Javascript") ==  0){
        return true
    } else {
        return false
    }
}

var skills = [ "Javascript", "ReactJS", "React Native"];
temHabilidade(true || false);

// EXERCICIO 4

//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é

function experiencia(anos){
    switch(anosEstudos){
        case 0 || 1:
            console.log("Iniciante");
            break;
        case 1 || 2 :
            console.log("Intermediário");
            break;
        case 3 || 4 || 5 || 6:
            console.log("Avançado");
            break;
        case 7:
            console.log("Jedi Master");
            break;
        default:
            break;
    }
}

var anosEstudos= 7;
experiencia(anosEstudos);

// De 0-1 ano: Iniciante
//De 1-3 anos:Intermedipario
//De 3-6 anos: Avançado
//De 7 anos acima: Jedi Master

//EXERCICIO 5

// Escreva uma função que produza o seguinte resultado: O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["Vue", "Ruby on Rails", "Elixir"]
    }
];

for (let usuario of usuarios) {
       console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join()}.`)
}