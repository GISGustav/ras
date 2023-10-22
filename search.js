// Add navigation control
map.addControl(new mapboxgl.NavigationControl());

// Get the search input and button
var citySearchInput = document.getElementById('plats-search');
var searchButton = document.getElementById('search-button');

// Handle the search button click event
searchButton.addEventListener('click', function () {
    performCitySearch();
});

// Handle the "Enter" key press in the search input field
citySearchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        performCitySearch();
    }
});

function performCitySearch() {
    var cityName = citySearchInput.value;

    // Use Mapbox Geocoding API to search for the city
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