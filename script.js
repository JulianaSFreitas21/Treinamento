let alunos = [
    {
        nome: "Maria",
        nota:8
    },
    {
        nome: "Pedro",
        nota:4
    },
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Paulo",
        nota:9
    },
    {
        nome: "Ana",
        nota: 7
    },
    {
        nome: "Bianca",
        nota:6
    },
]
//escreva um loop que percorre o vetoe a cima e informe se o aluno passou
// condiçãopara passar: nota maior que 7

console.log("FOR");

for(let i= 0; i < alunos.length; i++){
    if(alunos[i].nota > 7){
        console.log('${alunos[i].nome}:passou');
    }
}