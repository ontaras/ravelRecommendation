const btnSearch = document.getElementById('btnSearch');

function searchCondition(event) {
    event.preventDefault();
    const input = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input === 'australia' || input === 'brazil' || input === 'japan') {

            const country = data.countries.find(item => item.name.toLowerCase() === input);
            const cities = country.cities;
            for (i in cities) {
                // console.log(country.cities[i]);
                for (j in cities[i]) {
                    // console.log(cities[i]['name'] + ', ' + cities[i]['description']);
                    resultDiv.innerHTML += `<fieldset><img src="${cities[i]['imageUrl']}" style='width:500px; height:250px; margin-bottom: 10px;'<p>${cities[i]['name']}<p>${cities[i]['description']}<p></fieldset>`;
                    break;
                }
            }   
        } else if (input === 'beach' || input === 'beaches') {
            const beaches = data.beaches;
            for (i in beaches) {
                for (j in beaches[i]) {
                    resultDiv.innerHTML += `<fieldset><img src="${beaches[i]['imageUrl']}" style='width:500px; height:250px; margin-bottom: 10px;'<p>${beaches[i]['name']}<p>${beaches[i]['description']}<p></fieldset>`;
                    break;
                }
            } 
        } else if (input === 'temples' || input === 'temple') {
            const temples = data.temples;
            for (i in temples) {
                for (j in temples[i]) {
                    resultDiv.innerHTML += `<fieldset><img src="${temples[i]['imageUrl']}" style='width:500px; height:250px;margin-bottom: 10px;'<p>${temples[i]['name']}<p>${temples[i]['description']}<p></fieldset>`;
                    break;
                }
            }
        } else {
          resultDiv.innerHTML = `<fieldset style="height: 50px">destination or keyword not found.</fieldset>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = `<fieldset style="height: 50px">An error occurred while fetching data.</fieldset>`;
      });
  }

  btnSearch.addEventListener('click', searchCondition);
