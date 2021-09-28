import MapGL, { Marker } from "react-map-gl";
import { useState, useRef, useCallback } from "react";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export const Map = ({ searchInput, setSearchInput }) => {
  const [NewMarker, setNewMarker] = useState([]);
  const mapRef = useRef();
  const geocoderContainerRef = useRef();
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoiam9obml4MjMzMiIsImEiOiJja3R3MTg1ZXIyZmtyMnZwbmpxN2l0YWh4In0.PD-DUYa6BWJCBLnBZGvgXQ";

  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -94.5,
    zoom: 3.2,
    bearing: 0,
    pitch: 0,
  });

  const mapEventHandler = (event) => {
    var lng = event.lngLat[0];
    var lat = event.lngLat[1];
    setNewMarker([lng, lat]);
    fetch(
      "https://api.opencagedata.com/geocode/v1/json?q=" +
        lat +
        "%2C%20" +
        lng +
        "&key=d4b8dbf7c98d41aeafe53d2652540f02&language=en&pretty=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  };

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const SetSearchMarker = (result) => {
    var location_name =
      result.result.text + ", " + result.result.context[1].text;
    console.log(result.result);
    setSearchInput(location_name);
    setNewMarker([result.result.center[0], result.result.center[1]]);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="70vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onClick={mapEventHandler}
      >
        {NewMarker.length > 0 && (
          <Marker
            ref={mapRef}
            className="map-marker"
            longitude={NewMarker[0]}
            latitude={NewMarker[1]}
            offsetTop={-35}
            offsetLeft={-20}
            draggable
            anchor="bottom"
            onClick={() => alert("Marker")}
          >
            <svg
              width="16"
              height="28"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.8125 15.75H9.6875V26.25L7.75 28L5.8125 26.25V15.75ZM7.75 14C3.46979 14 0 10.866 0 7C0 3.13401 3.46979 0 7.75 0C12.0302 0 15.5 3.13401 15.5 7C15.5 10.866 12.0302 14 7.75 14ZM5.8125 7C6.88255 7 7.75 6.2165 7.75 5.25C7.75 4.2835 6.88255 3.5 5.8125 3.5C4.74245 3.5 3.875 4.2835 3.875 5.25C3.875 6.2165 4.74245 7 5.8125 7Z"
                fill="#D72130"
              />
            </svg>
          </Marker>
        )}

        <Geocoder
          onResult={SetSearchMarker}
          position="top-left"
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          language="en"
          zoom={8}
          marker={false}
        />
      </MapGL>
    </div>
  );
};
