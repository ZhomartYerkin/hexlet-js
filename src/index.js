import pkg from 'lodash'

const { random } = pkg

export default () => {
  console.log('Сколько вам лет?')

  const age = 18
  const currentYear = new Date().getFullYear()
  const birthYear = currentYear - age

  console.log(`Ваш год рождения: ${birthYear}`)
  console.log(`Случайное число: ${random(0, 5)}`)
}

