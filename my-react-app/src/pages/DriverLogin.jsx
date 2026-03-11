import { useState } from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

function DriverLogin(){

  const [bus,setBus] = useState("");

  const startTracking = () => {

    if(!bus){
      alert("Please select bus");
      return;
    }

    navigator.geolocation.watchPosition((position)=>{

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      set(ref(db,"buses/"+bus),{
        latitude: lat,
        longitude: lng
      });

      console.log("Location sent:",lat,lng);

    });

  };

  return (

    <div>

      <h2>Driver Login</h2>

      <select onChange={(e)=>setBus(e.target.value)}>
        <option>Select Bus</option>
        <option value="BUS101">BUS101</option>
        <option value="BUS102">BUS102</option>
      </select>

      <button onClick={startTracking}>Start Tracking</button>

    </div>

  );

}

export default DriverLogin;