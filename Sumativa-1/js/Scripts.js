const email = document.getElementById("email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([.-_]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/

    if (!regexEmail.test(email.value)) {
        warnings += '* Error : El email no cumple con los estandares.<br>'
        entrar = true
    }
    if (!regexPass.test(pass.value)) {
        warnings += '* Error : Minimo 8 caracteres Maximo 15, Al menos una letra mayúscula y al menos una letra minucula, un dígito, no espacios en blanco y al menos 1 caracter especial<br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Aceptado"
    }
})



