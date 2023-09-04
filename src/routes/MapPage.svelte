<script>
  import { onMount } from "svelte";
  import { Map, View } from "ol";
  import TileLayer from "ol/layer/Tile";
  import XYZ from "ol/source/XYZ";
  import GeoJSON from "ol/format/GeoJSON";
  import VectorLayer from "ol/layer/Vector";
  import VectorSource from "ol/source/Vector";
  import Style from "ol/style/Style";
  import Fill from "ol/style/Fill";
  import Stroke from "ol/style/Stroke";

  let map;

  onMount(() => {
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    const vectorSource = new VectorSource({
      format: new GeoJSON(),
      url: "https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson",
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({
          color: "#006a4e",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(0, 106, 78, 0.75)",
        }),
      }),
    });

    map.addLayer(vectorLayer);
  });
</script>

<div id="map" />

<style>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
