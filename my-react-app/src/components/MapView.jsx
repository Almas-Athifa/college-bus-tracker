import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

function MapView({ bus }) {

  const [location, setLocation] = useState(null);

  useEffect(() => {

    const busRef = ref(db, "buses/" + bus);

    onValue(busRef, (snapshot) => {
      setLocation(snapshot.val());
    });

  }, [bus]);

  const center = location
    ? [location.latitude, location.longitude]
    : [11.0168, 76.9558]; // Coimbatore default

  return (

    <MapContainer center={center} zoom={15} style={{ height: "400px", width: "100%" }}>

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {location && (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>Bus Location</Popup>
        </Marker>
      )}

    </MapContainer>

  );

}

export default MapView;