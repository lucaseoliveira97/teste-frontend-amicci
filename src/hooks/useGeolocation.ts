import { useState, useEffect } from 'react';


export type UseGeolocationResponse = 
{
    lat:number,
    long:number
}

function useGeolocation() : UseGeolocationResponse {

    const [userLocation, setUserLocation] = useState<UseGeolocationResponse>({lat:0, long:0});
    const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
    
              setUserLocation({ lat:latitude, long:longitude });
            },
    
            (error) => {
              console.error("Error get user location: ", error);
            }
          );
        } else {
          console.log("Geolocation is not supported by this browser");
        } 
      };
      useEffect( ()=>{
        getUserLocation();
    },[])
    return {lat:userLocation.lat, long:userLocation.long} as const;
}
export default useGeolocation;