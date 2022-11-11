const input = document.querySelector('.index_input');
const button = document.querySelector('.index_button');
const form = document.querySelector('.index_form');

const validateInput = ({ target }) => {
  if (target.value.length > 2){
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput);

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/tema.html'
}

form.addEventListener('submit',handleSubmit);