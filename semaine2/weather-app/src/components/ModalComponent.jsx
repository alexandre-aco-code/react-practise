import React, { useState } from 'react';

const ModalComponent = (props) => {

    let isVisible = props.visible;
    let setVisible = props.setVisible;
    let setCity = props.setCity;

    const changeLoc = (e) => {
        
        const form = e.target;
        const input = form.querySelector('input').value;    
        setCity(input);
        e.preventDefault();
    }

    return (
        <div className={`modal fade ${isVisible ? "show" : ""}`} id="locModal" tabIndex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="locModalLabel">Choose Location</h5>
                        <button onClick={setVisible} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="w-form" onSubmit={changeLoc}>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" className="form-control"/>
                                <button id="w-change-btn" type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={setVisible} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ModalComponent;