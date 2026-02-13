document.addEventListener("DOMContentLoaded", () => {

  const passwordInput = document.getElementById('password')
  const confirmPassword = document.getElementById('confirmPassword')

  const ruleLength = document.getElementById("rule-length")
  const ruleNumber = document.getElementById("rule-number")
  const ruleUpperLetter = document.getElementById("rule-upper-letter")
  const ruleLowerLetter = document.getElementById('rule-lower-letter')
  const ruleSpecial = document.getElementById("rule-special")

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value

    const hasLength = value.length >= 8
    const hasNumber = [...value].some(char => char >= '0' && char <= '9')
    const hasUppercase = [...value].some(char => char >= 'A' && char <= 'Z')
    const hasLowercase = [...value].some(char => char >= 'a' && char <= 'z')
    const specialChars = "!@#$%^&*(),.?':{}|<>"
    const hasSpecial = [...value].some(char => specialChars.includes(char))


    hasLength ? setValid(ruleLength) : setInvalid(ruleLength)
    hasNumber ? setValid(ruleNumber) : setInvalid(ruleNumber)
    hasUppercase ? setValid(ruleUpperLetter) : setInvalid(ruleUpperLetter)
    hasLowercase ? setValid(ruleLowerLetter) : setInvalid(ruleLowerLetter)
    hasSpecial ? setValid(ruleSpecial) : setInvalid(ruleSpecial)
})


  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === passwordInput.value) {
      confirmPassword.classList.add('valid')
      confirmPassword.classList.remove('invalid')
    } else {
      confirmPassword.classList.add('invalid')
      confirmPassword.classList.remove('valid')
    }
  })

  function setValid(element) {
    element.classList.add('valid')
    element.classList.remove('invalid')
  }

  function setInvalid(element) {
    element.classList.add('invalid')
    element.classList.remove('valid')
  }

})
