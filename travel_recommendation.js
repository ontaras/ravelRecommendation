const btnSearch = document.getElementById('btnSearch');

function searchCondition(event) {
    event.preventDefault();
    const input = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        //const country = data.countries.find(item => item.name.toLowerCase() === input);

        if (input === 'australia' || input === 'brazil' || input === 'japan') {

            const country = data.countries.find(item => item.name.toLowerCase() === input);
            //debugger;
            
            for (i in country) {
                console.log(country[i]);
                for (j in country[i]) {
                    console.log(country[i]['id'] + country[i]['name'] + country[i][j]['name']);
                }
            }
            
        
                
            

            // for (i in country) {
            //     console.log(country[i]);
            //     for (j in country[i]) {
            //         console.log(country[i]['name'] + country[i]['cities']);
            //         for (k in country[i][j]) {
            //             console.log(country[i][j]['name'] + ', ' + country[i][j]['description']+ ', ' + country[i][j]['imageUrl']);
            //             //resultDiv.innerHTML += `<fieldset>${country[i][j]['name']}<p>${country[i][j]['description']}<p>${country[i][j]['imageUrl']}</fieldset>`;
            //             break;
            //         }

            //     }
            // }
            // resultDiv.innerHTML += `<fieldset><img src="${country['cities'][0]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][0]['name']}<p>${country['cities'][0]['description']}</fieldset>`;
            // resultDiv.innerHTML += `<fieldset><img src="${country['cities'][1]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][1]['name']}<p>${country['cities'][1]['description']}</fieldset>`;

        } else if (input === 'beach' || input === 'beaches') {
            const beaches = data.beaches;
            for (i in beaches) {
                console.log(beaches[i]);
                for (n in beaches[i]) {
                    console.log(beaches[i]['name'] + ', ' + beaches[i]['description']);
                    resultDiv.innerHTML += `<fieldset>${beaches[i]['name']}</fieldset>`;
                    break;
                }
            }
            
            //resultDiv.innerHTML += `<fieldset><img src="${country['cities'][0]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][0]['name']}<p>${country['cities'][0]['description']}</fieldset>`;
            //resultDiv.innerHTML += `<fieldset><img src="${country['cities'][1]['imageUrl']}" style='width:500px; height:250px;'><p>${country['cities'][1]['name']}<p>${country['cities'][1]['description']}</fieldset>`;
        }
         else {
          resultDiv.innerHTML = `<fieldset style="height: 50px">destination or keyword not found.</fieldset>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = `<fieldset style="height: 50px">An error occurred while fetching data.</fieldset>`;
      });
  }

  btnSearch.addEventListener('click', searchCondition);
