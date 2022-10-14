// Criando meus objetos
const personagens1 = {

    nome: "Eddard Stark".toUpperCase(),
    casa: "Winterfell, norte de Westeros",
    cultura: "Homens do norte",
    vivo: false,
    totalTemporadas: 1,
    titulo: ["Mão do Rei, ", "Protetor do Norte"],
    foto1: "Ned"
}

const personagens2 = {
    nome: "Robert Baratheon".toUpperCase(),
    casa: "Ponta tempestade",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 1,
    titulo: ["Rei dos Ândalos e dos primeiros Homens Senhor dos Sete Reinos Protetor do Reino, ", "Rei dos Sete Reinos, ", "Lorde de Ponta Tempestade"],
    foto2: "Robert"
}

const personagens3 = {
    nome: "Jaime Lannister".toUpperCase(),
    origem: "Rochedo Casterly, Terras ocidentais de Westeros",
    posição: "Guarda real",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 8,
    titulo: ["Regicída, ", "Lorde comandante da Guarda Real"],
    foto3: "Jaime"
}
const personagens4 = {
    nome: "Daenerys Targaryen".toUpperCase(),
    casa: "Pedra do Dragão",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 8,
    titulo: ["Daenerys Nascida da Tormenta, ", "Rainha além do Mar Estreito, ", "Rainha Prateada, ", "Rainha Dragão, ", "Filha do Dragão, ", "Mãe dos dragões"],
    foto4: "Daenerys"
}
const personagens5 = {
    nome: "Jon Snow".toUpperCase(),
    casa: "Winterfell, norte de Westeros",
    cultura: "Homens do norte",
    vivo: true,
    totalTemporadas: 8,
    titulo: ["Bastardo Stark, ", "Menbro da guarda da noite, ", "Lorde Comandante da guarda da noite, ", "Protetor do Norte, ", "Rei do Norte"],
    foto5: "Jon"
}
const personagens6 = {
    nome: "Arya Stark".toUpperCase(),
    casa: "Winterfell",
    cultura: "Homens do norte",
    vivo: true,
    totalTemporadas: 8,
    titulo: ["Princesa de Winterfell, ", "Princesa e Senhora de Ponta Tempestade, ", "Ninguém"],
    foto6: "Arya"
}

// Criando variavel e concatenando objetos para verificar média de participação dos personagens
const participacao = (personagens1.totalTemporadas + personagens2.totalTemporadas + personagens3.totalTemporadas + personagens4.totalTemporadas + personagens5.totalTemporadas + personagens6.totalTemporadas);
// Criando variavel e relacionando objetos para verificar característica booleana
const mortalidade = (personagens1.vivo && personagens2.vivo && personagens3.vivo && personagens4.vivo && personagens5.vivo && personagens6.vivo);
// Exibindo média de participação dos personagens listados
console.log("A média de participação de temporadas dos personagens da lista em GOT É, ", participacao / 6, "num total de 8 temporadas");
// Exibindo variavel booleana 
console.log("Game of thores é uma série que gosta de manter os personagens vivos?", mortalidade);
// Exibindo nome dos personagens como string e titulos como array
console.log("Sobre Eddard Stark: ", personagens1);
console.log("Sobre Robert Baratheon: ", personagens2);
console.log("Sobre Jaime Lannister: ", personagens3);
console.log("Sobre Daenerys Targaryen: ", personagens4);
console.log("Sobre Jon Snow: ", personagens5);
console.log("Sobre Arya Stark: ", personagens6);
// criando um array vazio e uma condicional para utilizar o push apenas para os objetos com variavel boleana true
const elenco1 = [];
elenco1.push(personagens1);
elenco1.push(personagens2);
elenco1.push(personagens3);
elenco1.push(personagens4);
elenco1.push(personagens5);
elenco1.push(personagens6);
console.log(elenco1);
const elenco = [];
// personagens1.vivo === true ? elenco.push(personagens1) : alert('Não adicionado');
// personagens2.vivo === true ? elenco.push(personagens2) : alert('Não adicionado');
// personagens3.vivo === true ? elenco.push(personagens3) : alert('Não adicionado');
// personagens4.vivo === true ? elenco.push(personagens4) : alert('Não adicionado');
// personagens5.vivo === true ? elenco.push(personagens5) : alert('Não adicionado');
// personagens6.vivo === true ? elenco.push(personagens6) : alert('Não adicionado');
// console.log(elenco);    
// criando um laço para guardar das propriedades da array dentro dos objetos e devolvendo como string (refatoração)
// Depois usando essa refatoração iterei os objetos para imprimir no relatorio os valores de cada chave dos objetos
let tituloPersonagens1 = ' '
for (i of personagens1.titulo) {
    tituloPersonagens1 += i; ':'; personagens1[i] + ':';
}
console.log(` Nome: ${personagens1.nome.toUpperCase()}, Cidade natal: ${personagens1.casa}, Cultura: ${personagens1.cultura},  Sobreviveu até o final: ${personagens1.vivo}, Temporadas que participou: ${personagens1.totalTemporadas}, Titulos recebidos: ${tituloPersonagens1}`)

let tituloPersonagens2 = ''
 for (i of personagens2.titulo) {
    tituloPersonagens2 += i, ';', personagens2.titulo
}
console.log(`Nome: ${personagens2.nome.toUpperCase()}, Cidade natal: ${personagens2.casa}, Cultura: ${personagens2.cultura},  Sobreviveu até o final: ${personagens2.vivo}, Temporadas que participou: ${personagens2.totalTemporadas}, Titulos recebidos: ${tituloPersonagens2}`)

let tituloPersonagens3 = ''
for (i of personagens3.titulo) {
    tituloPersonagens3 += i, ';', personagens3.titulo
}
console.log(`Nome: ${personagens3.nome.toUpperCase()}, Cidade natal: ${personagens3.casa}, Cultura: ${personagens3.cultura},  Sobreviveu até o final: ${personagens3.vivo}, Temporadas que participou: ${personagens3.totalTemporadas}, Titulos recebidos: ${tituloPersonagens3}`)

let tituloPersonagens4 = ''
for (i of personagens4.titulo) {
    tituloPersonagens4 += i, ';', personagens4.titulo
}
console.log(`Nome: ${personagens4.nome.toUpperCase()}, Cidade natal: ${personagens4.casa}, Cultura: ${personagens4.cultura},  Sobreviveu até o final: ${personagens4.vivo}, Temporadas que participou: ${personagens4.totalTemporadas}, Titulos recebidos: ${tituloPersonagens4}`)

let tituloPersonagens5 = ''
for (i of personagens5.titulo) {
    tituloPersonagens5 += i, ';', personagens5.titulo
}
console.log(`Nome: ${personagens5.nome.toUpperCase()}, Cidade natal: ${personagens5.casa}, Cultura: ${personagens5.cultura},  Sobreviveu até o final: ${personagens5.vivo}, Temporadas que participou: ${personagens5.totalTemporadas}, Titulos recebidos: ${tituloPersonagens5}`)

let tituloPersonagens6 = ''
for (i of personagens6.titulo) {
    tituloPersonagens6 += i, ';', personagens6.titulo
}
console.log(`Nome: ${personagens6.nome.toUpperCase()}, Cidade natal: ${personagens6.casa}, Cultura: ${personagens6.cultura},  Sobreviveu até o final: ${personagens6.vivo}, Temporadas que participou: ${personagens6.totalTemporadas}, Titulos recebidos: ${tituloPersonagens6}`)

//  devolver os objetos como strings por meio de uma função

const objDeArray = [
    {

    nome: "Eddard Stark".toUpperCase(),
    casa: "Winterfell, norte de Westeros",
    cultura: "Homens do norte",
    vivo: false,
    totalTemporadas: 1,
    titulo: ["Mão do Rei, ", "Protetor do Norte"],
    foto1: "Ned"
},
{
    nome: "Robert Baratheon".toUpperCase(),
    casa: "Ponta tempestade",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 1,
    titulo: ["Rei dos Ândalos e dos primeiros Homens Senhor dos Sete Reinos Protetor do Reino, ", "Rei dos Sete Reinos, ", "Lorde de Ponta Tempestade"],
    foto2: "Robert"
},
{
    nome: "Jaime Lannister".toUpperCase(),
    casa: "Rochedo Casterly, Terras ocidentais de Westeros",
    posição: "Guarda real",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 8,
    titulo: ["Regicída, ", "Lorde comandante da Guarda Real"],
    foto3: "Jaime"
},
 {
    nome: "Daenerys Targaryen".toUpperCase(),
    casa: "Pedra do Dragão",
    cultura: "Ândalos",
    vivo: false,
    totalTemporadas: 8,
    titulo: ["Daenerys Nascida da Tormenta, ", "Rainha além do Mar Estreito, ", "Rainha Prateada, ", "Rainha Dragão, ", "Filha do Dragão, ", "Mãe dos dragões"],
    foto4: "Daenerys"
},
 {
    nome: "Jon Snow".toUpperCase(),
    casa: "Winterfell, norte de Westeros",
    cultura: "Homens do norte",
    vivo: true,
    totalTemporadas: 8,
    titulo: ["Bastardo Stark, ", "Menbro da guarda da noite, ", "Lorde Comandante da guarda da noite, ", "Protetor do Norte, ", "Rei do Norte"],
    foto5: "Jon"
},
{
    nome: "Arya Stark".toUpperCase(),
    casa: "Winterfell",
    cultura: "Homens do norte",
    vivo: true,
    totalTemporadas: 8,
    titulo: ["Princesa de Winterfell, ", "Princesa e Senhora de Ponta Tempestade, ", "Ninguém"],
    foto6: "Arya"
}
]

function recebeArray (arrayObj, valorString){
    let objARetornar = {};
    for (let i=0; i<arrayObj.length; i++){
        if(arrayObj[i].nome === valorString){
            objARetornar.nome = arrayObj[i].nome;
            objARetornar.casa = arrayObj[i].casa;
            objARetornar.cultura = arrayObj[i].cultura;
            objARetornar.vivo = arrayObj[i].vivo;
            objARetornar.totalTemporadas = arrayObj[i].totalTemporadas;
            objARetornar.titulo = arrayObj = arrayObj[i].titulo
        }
    }
    if (objARetornar.nome !== valorString){
        alert('Não encontrado')
    }else{
        return objARetornar;
    }
    console.log(objARetornar)
}
console.log(objDeArray)


const meuParagrafo = document.getElementById('paragrafo');
console.log(meuParagrafo)

// criando lista que guarda personagems
const listaDomPersonagem = document.createElement("ul");
// buscanto elementos armazenados
const containerPai = document.getElementById('containerPai');
// inserindo no id container os elementos da lista
containerPai.insertAdjacentElement("beforeend", listaDomPersonagem);
console.log(listaDomPersonagem);
// atribuindo elementos a lista 
listaDomPersonagem.setAttribute('id', 'lista-personagens')
// exibindo lista de personagens
const documentoDelista = document.getElementById('lista-personagens')
console.log(documentoDelista);
for (let i = 0; i< objDeArray.length; i++ ){
    documentoDelista.innerHTML += `<li>${objDeArray[i].nome}</li>`
}

function retornaPersonagens(){
    // buscando o elemento do campo pelo id
    const elemento =document.getElementById('campo');
    // considerando o elemento de input preenchido a variavel const buscatexto recebe o value isto é o valor escrito no input
    const buscaTexto = elemento.value
    // chamando a funcao que recebe o array e um parametro de busca e passando como argumento o array do itens e a string.value 
    const personagemRetornado = recebeArray(objDeArray, buscaTexto);
    if (personagemRetornado.nome){

    }
    const documentoDelista = document.getElementById('lista-personagens')
    documentoDelista.innerHTML = `<li>${personagemRetornado.nome}</li>`
}