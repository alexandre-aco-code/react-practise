import React, {Component} from 'react';

class Jsx extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true
        }

        this.secondToggleName = this.secondToggleName.bind(this);
    }

    toggleName = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    secondToggleName() {
       this.toggleName();
    }

    passParam = (id, e) => {
        e.preventDefault();
        console.log(e);
        console.log(id);
    }

    render() {
        // const test = [1, 2, 3, 4,5 ,6, 7, 8, 9];
        // const num = 35;
        // const num2 = 24;
        const name = 'John Doe';
        const {isVisible} = this.state;
        return (
            <div>
                {/*{test.map((item, index) =>*/}
                {/*    <span key={index}>{item}</span>*/}
                {/*)}*/}
                {/*{num} + {num2} = {num + num2}*/}
                {isVisible ? <p>{name}</p> : null}

                <button onClick={this.toggleName} className="btn btn-success">Enregistrer</button>
                <button onClick={this.secondToggleName} className="btn btn-success">Enregistrer aussi</button>


                <button onClick={this.passParam.bind(this, 1)} className="btn btn-warning">Enregistrer ID</button>
            </div>
        );
    }
}

export default Jsx;
