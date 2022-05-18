let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // booleano

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{}) //  Objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33 ))
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar')
console.log('' || null || 0 || 'Oi') // Retorna o único valor verdadeiro

let nome = ''

console.log(nome || 'Desconhecido')