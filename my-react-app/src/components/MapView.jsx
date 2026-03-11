import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function MapView({bus}){

 const [location,setLocation]=useState(null);

 const { isLoaded } = useJsApiLoader({
   googleMapsApiKey: "YOUR_GOOGLE_MAP_KEY"
 });

 useEffect(()=>{

   const busRef = ref(db,"buses/"+bus);

   onValue(busRef,(snapshot)=>{

     setLocation(snapshot.val());

   });

 },[bus]);

 if(!isLoaded) return <div>Loading map...</div>;

 return(

   <GoogleMap
     zoom={15}
     center={location || {lat:11.0168,lng:76.9558}}
     mapContainerStyle={{width:"100%",height:"400px"}}
   >

     {location && (
       <Marker position={{
         lat:location.latitude,
         lng:location.longitude
       }}/>
     )}

   </GoogleMap>

 );

}

export default MapView;