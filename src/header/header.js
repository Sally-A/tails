import React, { Component, Fragment } from 'react';
import Logo3 from '../assests/images/logo3.png';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <img className="logo" src={Logo3} alt="Tails Of The Town" />
                </header>
            </Fragment>
        )
    }
}

export default Header;