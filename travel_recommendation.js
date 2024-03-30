const submitBtn = document.getElementById('submitBtn');
const answer = document.getElementById('answer');

function thankyou() {
    const name = document.getElementById('name').value.toUpperCase();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        answer.innerHTML = `get in touch, ${name}`;
    } else {
        window.alert("Input correct values");
    }
}

submitBtn.addEventListener('click', thankyou);