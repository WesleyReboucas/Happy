import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";
import "../styles/Pages/ofphaneges-map.css";
import "leaflet/dist/leaflet.css";

function OrphanegesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p> Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong>Bahia</strong>
          <span>Salvador</span>
        </footer>
      </aside>

      <Map
        center={[-12.9790678, -38.4926917]}
        zoom={14.4}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanege">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanegesMap;
