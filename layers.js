mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lzZ3VzdGF2IiwiYSI6ImNsbWVra2YzdTA5ZnAzY29jYjIyb2llOWEifQ.VPiCrGek7Gud0y2WfZeocw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gisgustav/clnx3ovgu006101qxh4pnc94e', // Bakgrund-style för kartan
  center: [12.1, 58.2], // Startkoordinater
  zoom: 7 // Startnivå på zoom
});

map.on('load', function () {
	var skredatabas = 'mapbox://gisgustav.clnlfv9le2ilv2io2cvik0v9g-6ms2x'; 
	var jordart = 'mapbox://gisgustav.clnwvid5v122n2cn5y75zd0al-5q5xy'; 
	var vattendragLine = 'mapbox://gisgustav.duzqnkkf'; 
	var vattendragPolygon = 'mapbox://gisgustav.0ra76uo0'; 
	var grundvattenPolygon = 'mapbox://gisgustav.dsnl2eis'; 
	
  map.addSource('skredSource', {
    type: 'vector',
    url: skredatabas
  });

  map.addSource('jordartSource', {
    type: 'vector',
    url: jordart
  });
    map.addSource('vattendragLineSource', {
    type: 'vector',
    url: vattendragLine
  });
    map.addSource('vattendragPolygonSource', {
    type: 'vector',
    url: vattendragPolygon
  });
    map.addSource('grundvattenPolygonSource', {
    type: 'vector',
    url: grundvattenPolygon
  });
  map.addLayer({
    id: 'jordartID',
    type: 'fill',
    source: 'jordartSource',
    'source-layer': 'riskabel_jordart_wgs', 
    paint: {
		'fill-color': 'brown',
		'fill-opacity': 0.4
	},
	    'layout': {
        'visibility': 'none' // Start-visibility 'none'
    },
	minzoom: 0,
    maxzoom: 22
  });
  
    map.addLayer({
    id: 'vattendragLineID',
    type: 'fill',
    source: 'vattendragLineSource',
    'source-layer': 'vattendrag_line-bl5ugo', 
    paint: {
		'fill-color': 'red',
		'fill-opacity': 0.4
	},
	    'layout': {
        'visibility': 'none' // Start-visibility 'none'
    },
	minzoom: 0,
    maxzoom: 22
  });
  
    map.addLayer({
    id: 'vattendragPolygonID',
    type: 'fill',
    source: 'vattendragPolygonSource',
    'source-layer': 'vattendrag_polygon-3sa4kh', 
    paint: {
		'fill-color': 'red',
		'fill-opacity': 0.4
	},
	    'layout': {
        'visibility': 'none' // Start-visibility 'none'
    },
	minzoom: 0,
    maxzoom: 22
  });
  
  map.addLayer({
    id: 'skredID',
    type: 'circle',
    source: 'skredSource',
    'source-layer': 'Skreddatabas',
	  paint: {
    'circle-radius': 5,
    'circle-color': 'blue' 
	},
	'layout': {
    'visibility': 'none' // Start-visibility 'none'
    },
	minzoom: 0,
    maxzoom: 22
  });
      map.on('click', 'skredID', function (e) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const typ = e.features[0].properties.typ;
        const namn = e.features[0].properties.namn;
        const Skred_id = e.features[0].properties.namn;

        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: true,
        })
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${namn}</h3>
            <p><strong>Typ:</strong> ${typ}</p>
            ${Skred_id === "E6 Stenungsund Munkeröd" ? '<iframe width="100%" height="100%" src="3d_map.html" frameborder="0" allowfullscreen></iframe>' : ''}
        `)
        .addTo(map);
    });
	map.addLayer({
    id: 'grundvattenPolygonID',
    type: 'fill-extrusion',
    source: 'grundvattenPolygonSource',
    'source-layer': 'grundvattenPolygon-7h1u85', 
    paint: {
		'fill-extrusion-color': '#80eeff',
		'fill-extrusion-opacity': 0.4,
		'fill-extrusion-height': [
            'case',
            ['==', ['get', 'Z'], 0], // Om Z = 0, behåll 0
            0, // Annars, lägg på 10 gånger värdet för Z
            ['*', 10, ['get', 'Z']]
        ],
		'fill-extrusion-base': 0 // Basen över mark
	},
	    'layout': {
        'visibility': 'none' // Start-visibility 'none'
    },
	minzoom: 0,
    maxzoom: 22
  });
});