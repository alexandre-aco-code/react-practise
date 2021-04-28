import './App.css';
// import Weather from './old/weather';
// import HomeComponent from './components/HomeComponent';
import HomeComponent from './components/HomeComponent';
import ModalComponent from './components/ModalComponent';
import WeatherComponent from './components/WeatherComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <ModalComponent/>
      <WeatherComponent/>
    
    </div>
  );
}

export default App;
