const form = document.getElementById('registration-form');

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
    if (form.firstname.value && form.lastname.value && form.email.value && form.password.value) {
        event.preventDefault();
        let div = document.createElement('div');
        div.innerHTML = (`
        <p class='thankyou'>Благодарим вас, ${form.firstname.value} ${form.lastname.value}, за регистрацию!</p>
        <img id="lizard" src="lizard.jpg">
        `);
        form.append(div);
    }
});