const API_KEY = "5a555c26f6777ed5d61c82bea1ac1a90";
export const getEndpoint = (city:string)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br`

export type OpenWeatherResponse = {
    "coord": {
      "lon": number,
      "lat": number,
    },
    "weather": [
      {
        "id": number,
        "main": string
        "description": string
        "icon": string
      }
    ],
    "base": string
    "main": {
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number,
      "pressure": number,
      "humidity": number,
      "sea_level": number,
      "grnd_level": number,
    },
    "visibility": number,
    "wind": {
      "speed": number,
      "deg": number,
      "gust": number,
    },
    "rain": {
      "1h": number,
    },
    "clouds": {
      "all": number,
    },
    "dt": number,
    "sys": {
      "type": number,
      "id": number,
      "country": string
      "sunrise": number,
      "sunset": number,
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod":number,
  }                        
