function getInteiroAleartorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getInteiroAleartorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)