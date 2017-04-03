if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const td1 = document.querySelector('#td1')
const td2 = document.querySelector('#td2')
const td3 = document.querySelector('#td3')
const td4 = document.querySelector('#td4')
const td5 = document.querySelector('#td5')
const td6 = document.querySelector('#td6')
const td7 = document.querySelector('#td7')
const td8 = document.querySelector('#td8')
const td9 = document.querySelector('#td9')
const anyTd = document.querySelectorAll('td')
const turnText = document.querySelector('.turnText')
const modal = document.querySelector('body')
const textinModal = document.querySelector('p')
let currentTurn = 'X'
const possibleWins = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7]]
let counter = 0

for (let i = 0; i < anyTd.length; i++) {
  anyTd[i].addEventListener('click', () => {
    if (anyTd[i].textContent !== ' ') {
      return
    }
    anyTd[i].textContent = currentTurn

    let someOneWon = false

    for (let i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i][0].textContent === currentTurn &&
        possibleWins[i][1].textContent === currentTurn &&
        possibleWins[i][2].textContent === currentTurn) {
        setTimeout(() => {
          possibleWins[i][0].style.backgroundColor = 'LightGreen'
        }, 400)
        setTimeout(() => {
          possibleWins[i][1].style.backgroundColor = 'LightGreen'
        }, 900)
        setTimeout(() => {
          possibleWins[i][2].style.backgroundColor = 'LightGreen'
        }, 1400)
        setTimeout(() => {
          turnText.textContent = `${currentTurn} Wins!`
          someOneWon = true
          modal.className = 'modal'
          textinModal.textContent = `${currentTurn} Wins!`
        }, 1900)
      }
    }

    if (!someOneWon) {
      counter++
      if (currentTurn === 'X') {
        currentTurn = 'O'
        turnText.textContent = "it's O's turn!"
      } else {
        currentTurn = 'X'
        turnText.textContent = "it's X's turn!"
      }
    }
    if (counter >= 9) {
      modal.className = 'modal'
      textinModal.textContent = "It's a draw!"
    }
  })
}

const button = document.querySelector('button.ok')
button.addEventListener('click', () => {
  modal.className = ''
  window.location.reload()
})
const newGame = document.querySelector('button.newGame')
newGame.addEventListener('click', () => {
  window.location.reload()
})

const main = () => {

}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
