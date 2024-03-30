const submitBtn = document.getElementById('submitBtn');


function thankyou(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.toUpperCase();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('answer').innerHTML = `<p>THANKS, ${name},</p> 
        <p>WE'll GET IN TOUCH!</p>`;
    } else {
        window.alert("Input correct values");
    }
   
    reset();
}

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

submitBtn.addEventListener('click', thankyou);