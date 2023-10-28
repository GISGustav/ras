// Legend med checkbox
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

// toggleelement med ID
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

// Kolla om lagret är valt eller ej
skreddatabasenToggle.addEventListener('change', function () {
    if (skreddatabasenToggle.checked) {
        // Om lagret är valt, visa lagret (Skreddatabasen)
        map.setLayoutProperty('skredID', 'visibility', 'visible');
    } else {
        // Om lagret inte är valt, visa inte lagret (Skreddatabasen)
        map.setLayoutProperty('skredID', 'visibility', 'none');
    }
});
jordartToggle.addEventListener('change', function () {
    if (jordartToggle.checked) {
        // Om lagret är valt, visa lagret (Riskabel jordart)
        map.setLayoutProperty('jordartID', 'visibility', 'visible');
    } else {
        // Om lagret inte är valt, visa inte lagret(Riskabel jordart)
        map.setLayoutProperty('jordartID', 'visibility', 'none');
    }
});
vattendragLineToggle.addEventListener('change', function () {
    if (vattendragLineToggle.checked) {
        // Om lagret är valt, visa lagret (Raiskabelt vattendrag)
        map.setLayoutProperty('vattendragLineID', 'visibility', 'visible');
    } else {
        // Om lagret inte är valt, visa inte lagret (Raiskabelt vattendrag)
        map.setLayoutProperty('vattendragLineID', 'visibility', 'none');
    }
});
vattendragPolygonToggle.addEventListener('change', function () {
    if (vattendragPolygonToggle.checked) {
        // Om lagret är valt, visa lagret (Raiskabelt större vattendrag)
        map.setLayoutProperty('vattendragPolygonID', 'visibility', 'visible');
    } else {
        // Om lagret inte är valt, visa inte lagret (Raiskabelt större vattendrag)
        map.setLayoutProperty('vattendragPolygonID', 'visibility', 'none');
    }
});
grundvattenPolygonToggle.addEventListener('change', function () {
    if (grundvattenPolygonToggle.checked) {
        // Om lagret är valt, visa lagret (Grundvattennivå)
        map.setLayoutProperty('grundvattenPolygonID', 'visibility', 'visible');
    } else {
        // Om lagret inte är valt, visa inte lagret (Grundvattennivå)
        map.setLayoutProperty('grundvattenPolygonID', 'visibility', 'none');
    }
});
// Lägg till legend till kartan
document.getElementById('map').appendChild(legend);