import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo3 from '../assests/images/logo3.png';
import Owner2Pic from '../assests/images/owner2.jpg';
import HomepageReviews from '../reviews/homepage-reviews.js';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section className="missionStatement">
                    <div>

                        <img className="logo" src={Logo3} alt="Tails Of The Town" />

                        <p>
                            We at <strong>Tails Of The Town</strong> understand that grooming can be a stressful experience for all.
                        Our intention is to create a calm experience for both you and your fur babies.
                        Through the use of gentle massage, soft relaxation music and calming aromatherapy,
                        your pet will experience a grooming session that eases their anxiety and enables them to relax and enjoy the experience.
                        Great communication with you of what is desired and what is possible with your dogs coat is crucial to keep standards high and anxiety low.
                        Gentle communication with your pet throughout enhances the experience even more.
                        </p>

                    </div>
                </section>
                <section className="homepageAbout">

                    <h1>Meet Carla Sadler</h1>
                    <div>
                        <img src={Owner2Pic} alt="Carl Sadler" className="owner2Pic" />
                        <p>
                            As an animal lover of all shapes and sizes, Carla has years of experience and has developed a passion working with dogs  since she was very young.
                            Participating in many dog obedience classes, agility, canine good citizen, showmanship and doga classes she has become well versed in dog behavior.
                        </p>
                        <Link to="/about">Learn More</Link>
                    </div>
                </section>
                <section className="serviceLinks">
                    <h1>Our Services</h1>
                    <div className="dogGrooming">
                        <Link to="/grooming">Pet Grooming</Link>
                    </div>
                
                    <p>Call <strong>(330) 831-9545</strong> to schedule an appointment today!</p>
                </section>

                <HomepageReviews />
            </Fragment>
        )
    }
}

export default Homepage;