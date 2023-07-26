const form = document.getElementById('form');
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')

const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    message: /^[a-zA-ZÀ-ÿ\s]{10,120}$/  // Máximo de 120 caracteres
}

const fields = {
    name: false, 
    message: false
}

const validateForm = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validateField(expressions.name, e.target, 'name');
            break;
        case "mensaje":
            validateField(expressions.message, e.target, 'message')
            break;
        default:
            break;
    };
}

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`${field}`).classList.remove('contact__input-message-error')
        document.getElementById(`${field}`).classList.add('contact__input-message')
        document.getElementById(`${field}-container`).classList.remove('contact__input-container--invalid')
        fields[field] = true;
    } else{
        document.getElementById(`${field}`).classList.add('contact__input-message-error')
        document.getElementById(`${field}-container`).classList.add('contact__input-container--invalid')
        fields[field] = false;
    } 
}

inputs.forEach((input)=> {
    input.addEventListener( 'keyup', validateForm);
    input.addEventListener( 'blur', validateForm);
})


textarea.addEventListener( 'keyup', validateForm);
textarea.addEventListener( 'blur', validateForm);


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    if (fields.name && fields.message) {
        form.reset()
        document.getElementById('message-success').classList.add('contact__input-message-success');
        setTimeout(()=> {document.getElementById('message-success').classList.remove('contact__input-message-success')}, 5000);
    }
})
