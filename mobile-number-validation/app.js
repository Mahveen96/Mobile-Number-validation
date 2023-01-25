const time = document.querySelector('.time')
const input = document.querySelector('#input')
const btns = document.querySelectorAll('.btn')
const message = document.querySelector('.message')
const phoneBtn = document.querySelector('.phone-icon')

const date = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

time.innerText = date

const isValidPhoneNumber = (value) => {
  return /^\d{7,}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ''))
}

const displayMessage = (input) => {
  let msg = isValidPhoneNumber(input)
    ? (message.innerText = 'VALID PHONE NUMBER! 🎉')
    : (message.innerText = 'INVALID PHONE NUMBER! 🥶')
  return msg
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let number = e.currentTarget.children[0].innerText
    input.value += number
  })
})

phoneBtn.addEventListener('click', () => {
  displayMessage(input.value)
})

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    displayMessage(e.target.value)
  }
})
