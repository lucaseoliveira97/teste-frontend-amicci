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
    const [isLoading, setIdLoading] = useState<boolean>(true)
    const {lat, long} : UseGeolocationResponse = useGeolocation()
    const [data, setData] = useState<OpenWeatherResponse>();
    const [error, setError] = useState<boolean>(false);
    const getWeather = async (city:string) => {
        try {
          setIdLoading(true)
          const apiResponse = await fetch(getOpenWeatherEndpoint(city));
          const json:OpenWeatherResponse = await apiResponse.json();
          setCity(city)
          setData(json);
        } catch (error) {
          setError(true);
        }
        setIdLoading(false)
    };
    const getCity = async (lat:number, long:number) => {
        try {
          const apiResponse = await fetch(getGooglemapsEndpoint(lat, long));
          const json = await apiResponse.json();
          let adress = json.results[0].formatted_address;
          let city = adress.split(",")[2]?.split("-")[0]
          getWeather(city)
        } catch (error) {
          setError(true);
        }
    };

    const fetchCity = useCallback((city:string)=>getWeather(city),[])
    const fetchLatLong = useCallback(()=>getCity(lat,long),[])
    useEffect( ()=>{
      getCity(lat, long);
    },[lat, long])

  return {city, isLoading,error, weatherData:data,fetchCity,fetchLatLong } as const;
}
export default useCityWeather;