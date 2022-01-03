var imgElement

    const createMapImage = async () => {
      const width = 600;
      const height = 400;

      const mapElement = document.createElement("div");
      mapElement.style.width = `${width}px`;
      mapElement.style.height = `${height}px`;
      document.body.appendChild(mapElement);

      const map_print = L.map(mapElement, {
        attributionControl: false,
        zoomControl: false,
        fadeAnimation: false,
        zoomAnimation: false
      });

      const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map_print);

      var feature_print = L.geoJSON(featuresSelected, {
          style: {weight: 3, color: "green", fillOpacity: 0.3}
      }).addTo(map_print);  

      map_print.fitBounds(feature_print.getBounds());

      await new Promise(resolve => tileLayer.on("load", () => resolve()));
      const dataURL = await domtoimage.toPng(mapElement, { width, height });
      document.body.removeChild(mapElement);

      imgElement = document.createElement("img");
      imgElement.src = dataURL;
      document.body.appendChild(imgElement);

    };