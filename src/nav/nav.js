import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

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

                <FontAwesomeIcon icon={faPaw} size="xs" />
                <Link to="/about">About</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" />
                <Link to="/gallery">Gallery</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" />
                <Link to="/contact">Contact</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" />
                <Link to="/reviews">Reviews</Link>

                <FontAwesomeIcon icon={faPaw} size="xs" />
                <Link to="/grooming">Services</Link>

            </nav>
        )
    }
}

export default Nav