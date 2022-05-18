const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1), Number.isInteger(peso2))

const avaliacao1= 9.871
const avaliação2= 6.871

const total = avaliacao1 * peso1 + avaliação2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) // Retorna duas casas decimais
console.log(media.toString(2)) // Converter pra binário
console.log(typeof media)
console.log(typeof Number) // Number = função, number = número
