// navigation control
map.addControl(new mapboxgl.NavigationControl());

// sökruta och sökknapp
var citySearchInput = document.getElementById('plats-search');
var searchButton = document.getElementById('search-button');

// söka med musklick
searchButton.addEventListener('click', function () {
    performCitySearch();
});

// funktion för "enter knapp" istället för att använda mus
citySearchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        performCitySearch();
    }
});

function performCitySearch() {
    var cityName = citySearchInput.value;

    // Mapbox API för geocode
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoiZ2lzZ3VzdGF2IiwiYSI6ImNsbWVra2YzdTA5ZnAzY29jYjIyb2llOWEifQ.VPiCrGek7Gud0y2WfZeocw`)
        .then(response => response.json())
        .then(data => {
            if (data.features.length > 0) {
                var coordinates = data.features[0].center;
                var cityName = data.features[0].text;

                map.flyTo({
                    center: coordinates,
                    zoom: 10
                });

                var popup = new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(cityName)
                    .addTo(map);
            } else {
                alert('City not found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function performSearch() {
  const searchTerm = document.getElementById("searchInput").value;
  localStorage.setItem("searchTerm", searchTerm);
  window.location.href = "map.html";
}