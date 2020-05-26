//EXERCÍCIO 1

//escreva um loop que percorre o vetoe a cima e informe se o aluno passou
// condiçãopara passar: nota maior que 7

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

console.log("FOR OF");

for (let aluno of alunos) {
    if(aluno.nota > 7){
        console.log(`${aluno.nome}: passou`);
    }
}

//EXERCÍCIO 2

// escreva uma função que receberá um valor n e percorrerá um loop
// para exibir no console o valor na posição N da sequencia de fibonacci
//fibonacci: 0,1,1,2,3,5,8 ...
// o numero é igual a soma dos 2 anteriores

function fibonacci(n){
    if(n < 2){
        return n;
    }

    let anterior = 1;
    let penultimo = 0;

    for (let i= 2; i <= n; i++) {
        if(i == n) {
            return penultimo + anterior;
        }

        let temporario= penultimo;
        penultimo= anterior;
        anterior= temporario + penultimo;
    }
}

//EXERCÍCIO 3

//Somando o Vetor
//A função abaixo receberá 2 parâmetros, um vetor com apenas valores numéricos e um número.
//Faça com que ela multiplique cada item do vetor pelo segundo parâmetro apenas se o item do vetor for maior que 5. Após isso, ela deve retornar o novo vetor.
//Exemplo:
//calcularVetor([1,5,10, 20], 2) retornará [2, 5, 20, 40] pois só 10 e 20 são maiores que 5.
//calcularVetor([1,3,4, 5], 10) retornará [1, 3, 4, 5] pois nenhum é maior que 5.
//calcularVetor([15, 20, 25, 30], 3) retornará [45, 60, 75, 90].

function calcularVetor(vetor, numero){
    for (let i =0; i < vetor.length; i++){
        if (vetor[i] > 5){
            vetor[i]= vetor[i] * numero;
        }
    }
    return vetor;
}

//EXERCÍCIO 4

//Complete a função abaixo de forma que ela receba uma variável como parametro e retorne um vetor no final.
//Essa variável passada por parametro terá as seguintes propriedades:
//1) Ela também será um vetor.
//2) Cada um de seus valores serão vetores com números.
//Você deve processar esta variavel de forma a retornar um novo vetor com a soma dos valores destes subvetores.
//exemplo:
//[ [1,1] , [1,1,1] , [0,0,0,1] ] retornará [2, 3, 1]
//[ [1,1,1] , [2,2,2] , [3,3,3] ] retornará [3, 6, 9]
//[ [0,0,1] , [2,0,0] , [0,3,0] ] retornará [1, 2, 3]
//Dica: Como estamos lidando com vetores dentro de vetores, você precisará fazer um loop dentro de um loop (tente o FOR ou FOR OF).

function somarSubVetores(vetor){
    let resultado= [];
    for (let indice = 0; indice < vetor.length; indice++){
        let subVetor= vetor[indice];
        let soma= 0;
        for (let subIndice = 0; subIndice < subVetor.length; subIndice++){
            soma= soma + subVetor[subIndice];
        }
        resultado[indice] = soma;
    }
    return resultado;
}

//TESTE FINAL UDEMY
function testeFinal(umaString, umNumero){
    // Aqui criei uma variavel para retornar no final da função, mas você pode
    // retornar o valor diretamente dentro de cada "case"
    let retorno;
 
    switch(umaString){
 
        //1) “mundojs”: Exibirá "MundoJS" no console e retornará o parâmetro Número.
        case "mundojs":
            // Bem simples, exibir o texto (cuidado com letras maiúsculas) e retornar o número
            console.log("MundoJS");
 
            // Atribui o número para a variável "retorno"
            retorno = umNumero;
            break;
 
        // 2) “soma”: Retornará o resultado da soma da metade do parâmetro número com o quadrado dele mesmo.
        case "soma":
            // Pegando a metade do parâmetro número
            let metadeNumero = (umNumero/2);
 
            // Pegando o quadrado do parâmetro número
            let quadradoNumero = (umNumero*umNumero);
 
            // atribuindo a soma das variáveis a variável retorno
            retorno = metadeNumero + quadradoNumero;
            break;
 
        // 3) “vetor”: Criará e retornará um vetor com 5 elementos.
                            // Cada elemento é igual ao parâmetro número mais o dobro do índice do vetor:
        case "vetor":
 
            // Criada a variavel com um vetor vazio (importante para o FOR abaixo)
            let vetor = [];
 
            // Utilizado o for para fazer 5 loops no vetor
            for(let i = 0; i< 5; i++){
 
                // Atribuído umNumero  mais o dobro do índice.
                vetor[i] = umNumero + (i * 2);
            }
 
            // armazenado  o vetor na variável de retorno
            retorno = vetor;
            break;
 
         // 4) “booleano”: Faça o mesmo vetor do caso vetor e retorne true 
                        // se a soma dos elementos deste vetor for maior que 35, do contrário, exibe false.
        case "booleano":
 
            // Criado um vetor. Observe que o nome é diferente do vetor anterior pois se for igual da erro de escopo.
            let array = [];
 
            // Criada variavel total para teste no retorno;
            let total = 0;
 
            // Feito 5 loops no vetor
            for(let i = 0; i < 5; i++){
 
                // Atribuído umNumero  mais o dobro do índice.
                array[i] = umNumero + (i * 2);
                
                // Adicionando o total
                total = total + array[i];
            }
 
            //Testa se o total é mair que 35
            retorno = total > 35;
            break;
      
         // Caso o parâmetro String seja diferente das opções acima, retornará -1.
        default:
            // Retorno padrão
            retorno = -1;
    }
    // Retorno da função
    return retorno;
}

