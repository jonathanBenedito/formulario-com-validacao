function validarFormulario(event) {
    event.preventDefault();
    
    for(let i = 0; i < event.target.length; i++) {
        const campo = event.target[i];

        if (!campo.value) {
            campo.parentElement.classList.remove('valido');
            campo.parentElement.classList.add('invalido');
        } else {
            campo.parentElement.classList.remove('invalido');
            campo.parentElement.classList.add('valido');
        }
    }
}