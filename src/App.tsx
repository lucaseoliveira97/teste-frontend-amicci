import './styles/reset.scss'
import './styles/global.scss'
import Header from './components/Header';
import Card from './components/Card';
import CardGridLayout from './components/CardGridLayout';


const gridAreasDesktop = ["temp temp-max humidity", "temp temp-min pressure", "visibility wind clouds" ]
const gridAreasMobile = ["temp", "temp-max", "humidity", "temp-min", "pressure", "visibility" ,"wind" ,"clouds" ]
function App() {
  return (
    <div className="App">
      <Header/>
      <main className='page--body main--card'>
        <CardGridLayout gridAreasDesktop={gridAreasDesktop} gridAreasMobile={gridAreasMobile}>
          <Card type='l' gridArea='temp'>
            aaa
          </Card>
          <Card type='m' gridArea='temp-max'>
            aada
          </Card>
          <Card type='m' gridArea='temp-min'>
            aada
          </Card>
          <Card type='m' gridArea='humidity'>
            aada
          </Card>
          <Card type='m' gridArea='pressure'>
            aada
          </Card>
          <Card type='m' gridArea='visibility'>
            aada
          </Card>
          <Card type='m' gridArea='wind'>
            aada
          </Card>
          <Card type='m' gridArea='clouds'>
            aada
          </Card>
        </CardGridLayout>
      </main>
    </div>
  );
}

export default App;
