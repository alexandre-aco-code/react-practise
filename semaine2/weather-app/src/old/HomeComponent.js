import React, { Component } from 'react';
// import Bootstrap from 'bootstrap';

class HomeComponent extends Component {
    state = {}
    showModal = () => {
        console.log("Modale shown")
        // document.getElementById('locModal').classList.add('show');
    }
    render() { 
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
                            <h1 id="w-location">Location</h1>
                            <h3 className="text-dark" id="w-desc">Titre</h3>
                            <h3 id="w-string">Test</h3>
                            {/* <img id="w-icon" src={http://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png} /> */}
                            <ul id="w-details" className="list-group mt-3">
                                <li className="list-group-item" id="w-humidity"></li>
                                <li className="list-group-item" id="w-dewpoint"></li>
                                <li className="list-group-item" id="w-feels-like"></li>
                                <li className="list-group-item" id="w-wind"></li>
                            </ul>
                                {/* </hr> */}
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#locModal" onClick={this.showModal}>
                                        Change Location
                            </button>
                        </div>
                    </div>
                </div>
                    

            </>
        );
    }
}

export default HomeComponent;