import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assests/images/logo.png';

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            isHovered: false
        }
    }

    toggleHover = () => {
        this.setState(prevState => ({
          isHovered: !prevState.isHovered
        }))
      }

    render() {

        return (

            <nav className="nav">
                <h4><Link to="/">Tails Of The Town </Link></h4>
                <img src={Logo} alt="Tails Logo" className="logo-sm-tail" />

                <FontAwesomeIcon icon={faPaw} size="xs" className="pawicon" />
                <Link to="/about">About</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" className="pawicon" />
                <Link to="/gallery">Gallery</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" className="pawicon" />
                <Link to="/contact">Contact</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" className="pawicon" />
                <Link to="/reviews">Reviews</Link>

                <FontAwesomeIcon icon={faPaw} size="xs"className="pawicon" />
                <Link to="/grooming">Services</Link>

            </nav>
        )
    }
}

export default Nav