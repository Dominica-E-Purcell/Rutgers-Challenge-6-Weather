var citySearchElement = getElementById('current-search-results')
var previousSearchElement =  getElementById('previous-searches')
var newSearchElement =  getElementById('new-search')
var cityInput = [{lat}, {lon}];

function searchResults() {
fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b42218bf8657ef7bf4e7e9c2b8885fb6}&list.main.temp.units=imperial&list.main.humidity&list.wind.speed.units=imperial)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    cityInput = (data).value
        if(localStorage.getItem('previous-searches') === null) {
            localStorage.setItem('previous-searches', '[]');
            var previousSearchElement = JSON.parse(localStorage.getItem('previous-searches'));
            previousSearchElement.push(newSearchElement);
            localStorage.setItem('previous-searches', JSON.stringify(previousSearchElement));
        if (localStorage.getItem('previous-searches') !== null) {
                document.getElementById('new-search').innerHTML = JSON.parse(localStorage.getItem('current-search-results'))
        return;
                }
            }
        }
    });
}
 