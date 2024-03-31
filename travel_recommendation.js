const btnSearch = document.getElementById('btnSearch');

function searchCondition(event) {
    event.preventDefault();
    const input = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);

        console.log(JSON.stringify(country));

        if (country) {
        resultDiv.innerHTML += `<fieldset>${country['cities'][0]['name']}<p>${country['cities'][0]['description']}</p></fieldset>`;
        resultDiv.innerHTML += `<fieldset>${country['cities'][1]['name']}<p>${country['cities'][1]['description']}</p></fieldset>`;
          //resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

  btnSearch.addEventListener('click', searchCondition);