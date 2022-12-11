var layer = L.geoJSON(geojson, { 
    filter: filterCompany,        
    onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.nm_fantasia,{autoClose: false, autoPan: false}); 
      }               
}).addTo(map);
    
function filterCompany (json) {

  var companytypeFilter = [];

  var municipioSelect = $('#municipio').val();

  var atuacaoSelected = $('#atuacao').val();

  companytypeFilter = municipioSelect.concat(atuacaoSelected)

  var att = json.properties;

  var cond1 = (companytypeFilter.indexOf(att.municipio) >= 0);

  var cond2 = (companytypeFilter.indexOf(att.atuacao) >= 0);

  return(cond1 & cond2);

}


// apply filter
function filter(){  

    markers.clearLayers();  
    
    layer = L.geoJSON(geojson, { filter: filterCompany
        //onEachFeature: onEachFeature
    })//.addTo(map);

    map.fitBounds(layer.getBounds());

    markers.addLayer(layer);

    map.addLayer(markers);
    
};
