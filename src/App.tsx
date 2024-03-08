import './styles/reset.scss'
import './styles/global.scss'
import Header from './components/Header';
import Card from './components/Card';
import CardGridLayout from './components/CardGridLayout';
import { useCallback, useState } from 'react';
import useCityWeather from './hooks/useCityWeather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { capitalized } from './utils/string';



const gridAreasDesktop = ["temp temp feels_like humidity", "temp temp visibility clouds", "pressure pressure wind wind" ]
const gridAreasMobile = ["temp", "feels_like", "humidity", "visibility", "clouds", "pressure" ,"wind"]
function App() {
  const [cityName, setCityName] = useState<string>()
  const {city,isLoading, error, weatherData,fetchCity,fetchLatLong } = useCityWeather();
  console.log("isLoading",isLoading,error)
  return (
    <div className="App">
      <Header updateCityName={fetchCity} updateLatLog={fetchLatLong}/>
      <main className='page--body main--card'>
        <div className={`main--card-loading ${(isLoading || error) ? "main--card-loading-open" : "main--card-loading-close"}`}>
          {error ? "Cidade não encontrada":<FontAwesomeIcon size='3x' icon={faSpinner} />}
        </div>
        <CardGridLayout gridAreasDesktop={gridAreasDesktop} gridAreasMobile={gridAreasMobile}>
          <Card.Root gridArea='temp'>
            <Card.Header>
              <div className='cards-card__header-description'>
                {weatherData?.weather && <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} alt="Clima icone" />}
                <h2>{weatherData?.name}</h2>
              </div>
              <h1>
                Temperatura
              </h1>
            </Card.Header>
            <Card.Data>
              <div>
                <h1>{weatherData?.main?.temp}<span className='cards--card-symbol'>&#8451;</span></h1>
              </div>
                {capitalized(weatherData?.weather ? weatherData?.weather[0].description : "")}     
            </Card.Data>
            <Card.Footer>
              <div><b>Maxima:</b>{weatherData?.main?.temp_max}<span>&#8451;</span></div>
              <div><b>Minimo:</b>{weatherData?.main?.temp_min}<span>&#8451;</span></div>
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
