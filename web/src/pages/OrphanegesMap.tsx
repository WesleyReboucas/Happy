import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";
import MapIcon from "../utils/mapIcon";
import api from "../services/api";

import "../styles/pages/ofphaneges-map.css";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanegesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

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
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanages) => {
          return (
            <Marker
              icon={MapIcon}
              position={[orphanages.latitude, orphanages.longitude]}
              key={orphanages.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanages.name}
                <Link to={`orphanages/${orphanages.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanege">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanegesMap;
