numeros = [10, 20, 30, 40, 50]
nomes = ['Rafael', 'Maria', 'Fer', 'Corte', 'Macharete']

numeros.push(43)
nomes.push('Deh')

for (let indice in numeros){
    document.write(`${indice}<br>`)
}

document.write(`<p>valores do array <br>`)

for(let indice of numeros){
    document.write(`${indice}<br>`);
}

numeros[2] = 50;

nomes.forEach(item => document.write(`${item}<br>`));

numeros.unshift(3)
document.write(`${numeros} <br>`)

nomes.pop()
document.write(`${nomes} <br>`)

nomes.shift()
document.write(`${nomes} <br>`)

let grandao = nomes.map(nome => nome.toUpperCase())
document.write(`${grandao}<p>`)

let numDiv3 = numeros.filter(function(numero){
    return numero % 3 === 0
})

document.write(`${numDiv3}<p>`)

let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0
})

livrosP = ["Percy Jackson", "Diário de um banana", "O pequeno principe"]
livrosC = ["Pílulas de realidade 2", "É assim que acaba", "A 4 asa"]

let catalogo = [...livrosC, ...livrosP]