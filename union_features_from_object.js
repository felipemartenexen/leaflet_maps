var union = {type:'FeatureCollection', features: []}

//populate union feature with the object
for (let i = 0; i < receiver.features.length; i++) {
    const element = receiver.features[i];
    union.features.push(element)        
};

//union the geometry and push to the fc object
var dissolved  = union.features[0];

for (let i=1; i<union.features.length; i++) {
    dissolved = turf.union(dissolved, union.features[i]);
};

var fc = {
    "type": "FeatureCollection",
    "features": [dissolved] 
};

console.log(fc);
