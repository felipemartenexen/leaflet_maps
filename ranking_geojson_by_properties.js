var fc = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "valor": 24
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -47.5927734375,
              -7.983077720238418
            ],
            [
              -46.702880859375,
              -7.983077720238418
            ],
            [
              -46.702880859375,
              -6.795535025719518
            ],
            [
              -47.5927734375,
              -6.795535025719518
            ],
            [
              -47.5927734375,
              -7.983077720238418
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "valor": 300
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -46.87316894531249,
              -6.751896464843375
            ],
            [
              -46.23046874999999,
              -6.751896464843375
            ],
            [
              -46.23046874999999,
              -6.271618064314864
            ],
            [
              -46.87316894531249,
              -6.271618064314864
            ],
            [
              -46.87316894531249,
              -6.751896464843375
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "valor": 30
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -47.4334716796875,
              -6.328947931902748
            ],
            [
              -46.99127197265625,
              -6.328947931902748
            ],
            [
              -46.99127197265625,
              -5.8974567569002545
            ],
            [
              -47.4334716796875,
              -5.8974567569002545
            ],
            [
              -47.4334716796875,
              -6.328947931902748
            ]
          ]
        ]
      }
    }
  ]
};

print (fc);


var array =  {type:'FeatureCollection', features: []};

for (var key in fc.features) {
	array.features.push(fc.features[key]);  
}

array.features.sort(function(a, b){
    return b.properties.valor - a.properties.valor;
});

var rank = 1;

for (var i = 0; i < array.features.length; i++) {
  if (i > 0 && array.features[i].properties.valor < array.features[i - 1].properties.valor) {
    rank++;
  }
	array.features[i].properties.rank = rank;
}

print(array);
