const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna Valor vazio
console.log(escola.charCodeAt(3)) // Retorna o codigo da tabela Unicode do caracter
console.log(escola.indexOf('3')) // Pega o index da posição atraves do caractere
console.log(escola.substring(1)) // A partir do valor inicial
console.log(escola.substring(0,3)) // vai do index 0 ate o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos por e
console.log(escola.replace(/\w/g, 'e')) // Substitui todas letras e digitos por e
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array
