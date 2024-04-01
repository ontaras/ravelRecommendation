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

        // console.log(JSON.stringify(country));


        if (country) {
          resultDiv.innerHTML += `<fieldset><img src="${country['cities'][0]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][0]['name']}<p>${country['cities'][0]['description']}</fieldset>`;
          resultDiv.innerHTML += `<fieldset><img src="${country['cities'][1]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][1]['name']}<p>${country['cities'][1]['description']}</fieldset>`;
        } else {
          resultDiv.innerHTML = `<fieldset style="height: 50px">Condition not found.</fieldset>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = `<fieldset style="height: 50px">An error occurred while fetching data.</fieldset>`;
      });
  }

  btnSearch.addEventListener('click', searchCondition);
