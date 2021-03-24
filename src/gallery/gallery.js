import React, {Component} from 'react';
import ImageData from './images.js';
import './gallery.css';

class Gallery extends Component {
    
    render() {
        return (
            <section className="dogGallery">
                <ul className="gallery">
                    {ImageData.map((img, index) => {
                        return (
                            <li key={index}>
                                <img src={img.image} alt={img.text} className="dogPhotos"/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Gallery;