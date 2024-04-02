const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchCondition(event) {
    event.preventDefault();
    const input = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input === 'country' || input === 'countries') {
            
            const country = data.countries;
            const cities = [];
            for (i in country) {
                for (j in country[i]) {
                    cities.push(country[i]['cities']);
                    break;
                }
            }
            
            for (i in cities) {
                for (j in cities[i]) {
                    console.log(cities[i][j]['name']);
                    resultDiv.innerHTML += `<fieldset><img src="${cities[i][j]['imageUrl']}" style='width:500px; height:250px; margin-bottom: 10px;'<p>${cities[i][j]['name']}<p>${cities[i][j]['description']}<p></fieldset>`;
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
  
  function clearResult(event) {
    event.preventDefault();
    document.getElementById('keyword').value = '';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
  }

  btnSearch.addEventListener('click', searchCondition);
  btnClear.addEventListener('click', clearResult);
