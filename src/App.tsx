import './styles/reset.scss'
import './styles/global.scss'
import Header from './components/Header';
import Card from './components/Card';
import CardGridLayout from './components/CardGridLayout';
import { useCallback, useState } from 'react';
import useCityWeather from './hooks/useCityWeather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



const gridAreasDesktop = ["temp temp feels_like humidity", "temp temp visibility clouds", "pressure pressure wind wind" ]
const gridAreasMobile = ["temp", "feels_like", "humidity", "visibility", "clouds", "pressure" ,"wind"]
function App() {
  const [cityName, setCityName] = useState<string>()
  const {city,isLoading, error, weatherData,fetchCity,fetchLatLong } = useCityWeather();
  console.log("isLoading",isLoading)
  return (
    <div className="App">
      <Header updateCityName={fetchCity} updateLatLog={fetchLatLong}/>
      <main className='page--body main--card'>
        <div className={`main--card-loading ${isLoading ? "main--card-loading-open" : "main--card-loading-close"}`}>
          <FontAwesomeIcon size='3x' icon={faSpinner} />
        </div>
        <CardGridLayout gridAreasDesktop={gridAreasDesktop} gridAreasMobile={gridAreasMobile}>
          <Card.Root gridArea='temp'>
            <Card.Header>
              <h2>{weatherData?.name}</h2>
              <h1>
                Temperatura
              </h1>
            </Card.Header>
            <Card.Data>
              {weatherData?.main?.temp}<span>&#8451;</span>
            </Card.Data>
            <Card.Footer>
              <div>Maxima:{weatherData?.main?.temp_max}<span>&#8451;</span></div>
              <div>Minimo:{weatherData?.main?.temp_min}<span>&#8451;</span></div>
            </Card.Footer>
          </Card.Root>

          <Card.Root gridArea='feels_like'>
            <Card.Title>
              Sensação térmica
            </Card.Title>
            <Card.Data>
              {weatherData?.main?.feels_like}<span>&#8451;</span>
            </Card.Data>
          </Card.Root>

          <Card.Root  gridArea='visibility'>
            <Card.Title>
              Visibilidade
            </Card.Title>
            <Card.Data>
              {weatherData?.visibility}<span>&#8451;</span>
            </Card.Data>
          </Card.Root>

          <Card.Root gridArea='humidity'>
            <Card.Title>
              Umidade
            </Card.Title>
            <Card.Data>
              {weatherData?.main?.humidity}<span>&#8451;</span>
            </Card.Data>
          </Card.Root>

          <Card.Root  gridArea='clouds'>
            <Card.Title>
              Nebulosidade
            </Card.Title>
            <Card.Data>
              {weatherData?.clouds?.all}<span>%</span>
            </Card.Data>
          </Card.Root>

          <Card.Root gridArea='pressure'>
          <Card.Title>
            Pressão
            </Card.Title>
            <Card.Data>
              <>
              {weatherData?.main?.sea_level}<span>%</span>
              {weatherData?.main?.grnd_level}<span>%</span>
              </>
            </Card.Data>
          </Card.Root>

          <Card.Root  gridArea='wind'>
            <Card.Title>
              Vento
            </Card.Title>
            <Card.Data>
              <>
              {weatherData?.wind?.speed}<span>m/s</span>
              {weatherData?.wind?.deg}<span>%</span>
              {weatherData?.wind?.gust}<span>m/s</span>
              
              </>
            </Card.Data>
          </Card.Root>
        </CardGridLayout>
      </main>
    </div>
  );
}

export default App;
