import React, {Component} from 'react';
import ImageData from './images.js';
import './gallery.css';

class Gallery extends Component {
    
    render() {
        return (
            <section className="tailGallery">
                <div className="pagetitle">
                    <h1>Tail Gallery</h1>
                </div>

                <div className="gallery">
                    {ImageData.map((img, index) => {
                        return (
                            <li key={index}>
                                <img src={img.image} alt={img.text} className="dogPhotos"/>
                            </li>
                        )
                    })}
                </div> 
            </section>
        )
    }
}

export default Gallery;