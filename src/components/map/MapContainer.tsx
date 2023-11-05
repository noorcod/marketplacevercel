import { GoogleMap,MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { googleMapsKey } from "../../utility/env";
import {useEffect,useState} from "react"
import axios from 'axios';


interface MapContainerProps {
    data:any
   
  }
   const MapContainer = ({data}:any) => {
  const [adress, setAdress] = useState<any>()

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: `${googleMapsKey}`
    })
    const center = { lat: Number(adress?.lat), lng:Number(adress?.lng)  };
    const mapStyles = {
      height: '30vh',
      width: '100%',
    };
    
    const getCitiesGeocoding=async()=>{
        try{
     const res= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${data?.city.city_name}&key=${googleMapsKey}`)
     setAdress(res.data.results[0].geometry.location)
     }catch(error){
       console.log(error) 
     }
     }
    useEffect(() => {
        if(Math.round(data?.longitude)===0 && Math.round(data?.latitude)===0){
          getCitiesGeocoding()
        }
        else{
         setAdress({
           lat:data?.latitude,
           lng:data?.longitude
         })
        }
      }, [data])
    return (
   
      isLoaded?(
       
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={center}
        >
           <MarkerF
                  position={center }
                  >
                </MarkerF>
        </GoogleMap>
      ):<></>
    );
  }

export default MapContainer