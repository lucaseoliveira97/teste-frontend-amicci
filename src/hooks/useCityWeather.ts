import { useState, useEffect, useCallback } from 'react';
import { OpenWeatherResponse, getOpenWeatherEndpoint } from '../services/openWeatherMap';
import { getGooglemapsEndpoint } from '../services/googleMaps';
import useGeolocation, { UseGeolocationResponse } from './useGeolocation';

type UseCityWeatherResponse = 
{
    city:string,
    isLoading:boolean,
    error:boolean,
    weatherData: undefined | OpenWeatherResponse ,
    fetchCity: (city:string) => void,
    fetchLatLong: () => void
}

function useCityWeather() : UseCityWeatherResponse {
    const [city, setCity] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {lat, long} : UseGeolocationResponse = useGeolocation()
    const [data, setData] = useState<OpenWeatherResponse>();
    const [error, setError] = useState<boolean>(false);
    const getWeather = async (city:string) => {
        try {
          setIsLoading(true)
          setError(false)
          const apiResponse = await fetch(getOpenWeatherEndpoint(city));
          if(apiResponse.status === 200)
          {
            const json:OpenWeatherResponse = await apiResponse.json();
            setCity(city)
            setData(json);
          }
          else
          {
            setError(true);
          }
        } catch (error) {
          setError(true);
        }
        setIsLoading(false)
    };
    const getCity = async (lat:number, long:number) => {
        try {
          setIsLoading(true)
          const apiResponse = await fetch(getGooglemapsEndpoint(lat, long));
          const json = await apiResponse.json();
          let adress = json.results[0].formatted_address;
          let city = adress.split(",")[2]?.split("-")[0]
          getWeather(city)
        } catch (error) {
          console.error(error)
        }
    };

    const fetchCity = useCallback((city:string)=>getWeather(city),[])
    const fetchLatLong = useCallback(()=>getCity(lat,long),[lat,long])
    useEffect( ()=>{
      getCity(lat, long);
    },[lat, long])

  return {city, isLoading,error, weatherData:data,fetchCity,fetchLatLong } as const;
}
export default useCityWeather;