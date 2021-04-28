import React, { useState, useEffect, Fragment } from 'react';


function WeatherComponent(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    /* const [city, setCity] = useState("Bordeaux"); */
    const city = props.city;
    const apiKey = 'f67f1dfdfba00b176d03787a71358e66';
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result);
            setItems(result);
            console.log(items);
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [city])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <Fragment>
            <h1 id="w-location">{items.name}</h1>
            <h3 className="text-dark" id="w-desc">{items.weather[0].main}</h3>
            <h3 id="w-string">{items.weather[0].description}</h3>
            <img id="w-icon" src={`http://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`} />
            <ul id="w-details" className="list-group mt-3">
                <li className="list-group-item">Humidité : {items.main.humidity} %</li>
                <li className="list-group-item">Temperature : {items.main.temp} °C</li>
                <li className="list-group-item">Ressenti : {items.main.feels_like} °C</li>
                <li className="list-group-item">Vent : {items.wind.speed}km/h</li> 
            </ul>
        </Fragment>
      );
    }
  }
  
export default WeatherComponent;