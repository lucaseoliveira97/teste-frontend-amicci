const API_KEY = "AIzaSyDijrAmQEV3dpbmTcsc4qTduV2-uYZXmOU";
export const getGooglemapsEndpoint = (lat:number, long:number)=> `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`
