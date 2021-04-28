import { Fragment, useState } from "react"
import ModalComponent from './ModalComponent';
import WeatherComponent from './WeatherComponent';

const HomeComponent = () => {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [city, setCity] = useState("Bordeaux");

    const handleModal = () => {
        setModalIsVisible(!modalIsVisible);
    }
    

    return (
        <Fragment>
            <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
                    <WeatherComponent city={city} />
                    <hr/>
                    <button onClick={handleModal} type="button" className="btn btn-primary" data-toggle="modal" data-target="#locModal">
                        Change Location
                    </button>
                </div>
            </div>
        </div>
        <ModalComponent visible={modalIsVisible} setVisible={handleModal} setCity ={setCity} />
    </Fragment>
    )
};

export default HomeComponent;