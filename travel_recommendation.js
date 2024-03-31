const submitBtn = document.getElementById('submitBtn');
const btnSearch = document.getElementById('btnSearch');
const result = document.getElementById("result");

function searchDestination(event) {
    event.preventDefault();
    const input = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);

        if (countries) {
            console.log('found');
          /*const symptoms = condition.symptoms.join(', ');

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;*/
        } else {
          resultDiv.innerHTML = '<fieldset>Not found</fieldset>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
  btnSearch.addEventListener('click', searchDestination);

/*
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
   
    resetForm();
    console.log('thank you function performed');
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

submitBtn.addEventListener('click', thankyou);
*/
