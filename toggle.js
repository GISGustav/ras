// Create the legend element with a toggle
const legend = document.createElement('div');
legend.className = 'legend';
legend.innerHTML = `
   <h4>Innehåll</h4>
   <label>
       <input type="checkbox" id="skreddatabasenToggle">
   </label>
   <div class="legend-item">
       <div class="legend-color" style="background-color: red;"></div>
       <div class="legend-label">Skreddatabasen</div>
   </div>
	<label>
       <input type="checkbox" id="jordartToggle">
	</label>
	<div class="legend-item">
       <div class="legend-color" style="background-color: blue;"></div>
       <div class="legend-label">Riskabel jordart</div>
	</div>
      <label>
       <input type="checkbox" id="vattendragLineToggle">
	</label>
	<div class="legend-item">
       <div class="legend-color" style="background-color: blue;"></div>
       <div class="legend-label">Riskabelt vattendrag</div>
	</div>
    <label>
       <input type="checkbox" id="vattendragPolygonToggle">
   </label>
   <div class="legend-item">
       <div class="legend-color" style="background-color: blue;"></div>
       <div class="legend-label">Riskabelt större vattendrag</div>
   </div>
    <label>
       <input type="checkbox" id="grundvattenPolygonToggle">
   </label>
   <div class="legend-item">
       <div class="legend-color" style="background-color: blue;"></div>
       <div class="legend-label">Grundvattennivåer</div>
   </div>
`;

// Get the toggle element by its ID
const skreddatabasenToggle = legend.querySelector('#skreddatabasenToggle');
const jordartToggle = legend.querySelector('#jordartToggle');
const vattendragLineToggle = legend.querySelector('#vattendragLineToggle');
const vattendragPolygonToggle = legend.querySelector('#vattendragPolygonToggle');
const grundvattenPolygonToggle = legend.querySelector('#grundvattenPolygonToggle');

//default är lagren avstängda
skreddatabasenToggle.checked = false;
jordartToggle.checked = false;
vattendragLineToggle.checked = false;
vattendragPolygonToggle.checked = false;
grundvattenPolygonToggle.checked = false;

// Listen for the 'change' event on the toggle
skreddatabasenToggle.addEventListener('change', function () {
    if (skreddatabasenToggle.checked) {
        // If the Skreddatabasen toggle is checked, show the "point-layer" (Skreddatabasen layer)
        map.setLayoutProperty('skredID', 'visibility', 'visible');
    } else {
        // If the Skreddatabasen toggle is unchecked, hide the "point-layer" (Skreddatabasen layer)
        map.setLayoutProperty('skredID', 'visibility', 'none');
    }
});
jordartToggle.addEventListener('change', function () {
    if (jordartToggle.checked) {
        // If the Jordart toggle is checked, show the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('jordartID', 'visibility', 'visible');
    } else {
        // If the Jordart toggle is unchecked, hide the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('jordartID', 'visibility', 'none');
    }
});
vattendragLineToggle.addEventListener('change', function () {
    if (vattendragLineToggle.checked) {
        // If the Jordart toggle is checked, show the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('vattendragLineID', 'visibility', 'visible');
    } else {
        // If the Jordart toggle is unchecked, hide the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('vattendragLineID', 'visibility', 'none');
    }
});
vattendragPolygonToggle.addEventListener('change', function () {
    if (vattendragPolygonToggle.checked) {
        // If the Jordart toggle is checked, show the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('vattendragPolygonID', 'visibility', 'visible');
    } else {
        // If the Jordart toggle is unchecked, hide the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('vattendragPolygonID', 'visibility', 'none');
    }
});
grundvattenPolygonToggle.addEventListener('change', function () {
    if (grundvattenPolygonToggle.checked) {
        // If the Jordart toggle is checked, show the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('grundvattenPolygonID', 'visibility', 'visible');
    } else {
        // If the Jordart toggle is unchecked, hide the "jord-layer" (Riskabel jordart layer)
        // Replace 'jord-layer' with the actual name of your "Riskabel jordart" layer
        map.setLayoutProperty('grundvattenPolygonID', 'visibility', 'none');
    }
});
// Append the legend to the map container
document.getElementById('map').appendChild(legend);