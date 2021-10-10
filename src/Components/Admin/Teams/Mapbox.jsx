import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Marker } from "react-mapbox-gl";
import { React, useState, useRef } from "react";
import Geocoder from "react-map-gl-geocoder";

export const Mapbox = () => {
  const [lngLat, setLngLat] = useState([-94.5, 40]);
  const [NewMarker, setNewMarker] = useState([]);
  const mapRef = useRef();

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoiam9obml4MjMzMiIsImEiOiJja3R3MTg1ZXIyZmtyMnZwbmpxN2l0YWh4In0.PD-DUYa6BWJCBLnBZGvgXQ",
  });

  const mapEventHandler = (map, event) => {
    var lat = event.lngLat.lat;
    var lng = event.lngLat.lng;
    setNewMarker([lng, lat]);
    setLngLat([lng, lat]);
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

  return (
    <Map
      ref={mapRef}
      center={lngLat}
      zoom={[3.2]}
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={{
        height: "60vh",
        width: "75%",
      }}
      onClick={mapEventHandler}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.13235092163085938, 51.518250335096376]} />
      </Layer>

      {NewMarker.length > 0 && (
        <Marker
          className="map-marker"
          //coordinates={[-99.0143826, 32.3902533]}
          coordinates={[NewMarker[0], NewMarker[1]]}
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
        mapRef={mapRef}
        // onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={Map.accessToken}
        position="top-left"
      />
    </Map>
  );
};
