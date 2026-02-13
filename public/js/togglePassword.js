document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', function () {

    const targetId = this.dataset.target
    const input = document.getElementById(targetId)

    if (input.type === 'password') {
      input.type = 'text'
      this.textContent = 'Ocultar'
    } else {
      input.type = 'password'
      this.textContent = 'Mostrar'
    }

  })
})
