// Header.js
import { Component } from "react";


class Header extends Component {

    componentDidMount() {
        console.log('testing some hash');
    }


    render() {
        return (
            <header style={Style}>
                <nav className={'nav justify-content-center'}>

                    <a className={'nav-link'} href="/#about">About</a>

                    <a className={'nav-link'} href="/#faq">FAQ</a>

                </nav>
            </header>
        )
    }
}



const Style = {
    backgroundColor: 'black',
    color: 'white'
}

export default Header;