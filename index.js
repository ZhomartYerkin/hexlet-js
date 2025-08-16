import readlineSync from 'readline-sync'

console.log('Сколько вам лет?')

const age = readlineSync.questionInt('Введите ваш возраст: ')
const currentYear = new Date().getFullYear()
const birthYear = currentYear - age

console.log(`Ваш год рождения: ${birthYear}`)

