import { useState } from "react";
import MapView from "../components/MapView";

function StudentLogin() {

  const [bus,setBus] = useState("");

  return (
    <div>

      <h2>Student Login</h2>

      <select onChange={(e)=>setBus(e.target.value)}>
        <option>Select Bus</option>
        <option value="BUS101">BUS101</option>
        <option value="BUS102">BUS102</option>
      </select>

      {bus && <MapView bus={bus} />}

    </div>
  );
}

export default StudentLogin;