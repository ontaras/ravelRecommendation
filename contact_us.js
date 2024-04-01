function thankyou(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const name = document.getElementById('name').value.toUpperCase();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('answer').innerHTML = `<p>THANKS, ${name},</p>
        <p>WE'll GET IN TOUCH!</p>`;
    } else {
    window.alert("Input correct values");
    }

    resetForm();
    console.log('thank you function performed');
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
submitBtn.addEventListener('click', thankyou);
