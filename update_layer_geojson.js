var myFeaturesMap = {};

var myGeoJsonLayerGroup = L.geoJson({
    onEachFeature: function (feature, layer) {
        myFeaturesMap[feature.properties.objectID] = layer;
    }
}).addTo(map);

function addNewFeatureToGeoJsonLayerGroup(newGeoJsonData) {
    myGeoJsonLayerGroup.addData(newGeoJsonData);
}

function updateFeature(updatedGeoJsonData) {
    deleteFeature(updatedGeoJsonData); // Remove the previously created layer.
    addNewFeatureToGeoJsonLayerGroup(updatedGeoJsonData); // Replace it by the new data.
}

function deleteFeature(deletedGeoJsonData) {
    var deletedFeature = myFeaturesMap[deletedGeoJsonData.properties.objectID];
    myGeoJsonLayerGroup.removeLayer(deletedFeature);
}
