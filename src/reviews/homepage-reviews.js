import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './reviews.css';


class HomepageReviews extends Component {

    render() {
        return (
            <section className="homepageReviews">
                {/* <div className="wrapper"> */}
                    <h1>Client Reviews</h1>
                    <Carousel animationSpeed={650} autoPlay={8000} infinite={true} margin-left="3em" margin-right="3em" >
                        <div className="clientsays">
                            <p>Carla is AMAZING she has been grooming Babe for the past 4 years.
                            She is gentle and patient with my pup as she is getting up there in age.
                            My dog is always excited to see Carla.  Our whole family loves her sparkling personality.
                            We highly recommended Tails Of The Town Grooming</p>
                            <p>-Erica</p>
                        </div>
                        <div className="clientsays">
                            <p>Bob N Mary Mo had the best grooming session ever!
                            Thanks to Carla Sadler at Tails Of The Town, LLC. She comes to your home. They were calm with her and the results were amazing. Grateful. </p>
                            <p>-Kate</p>
                        </div>
                        <div className="clientsays">
                            <p>Carla is just simply the best. I rescued my little girl Gabriella from a very traumatic situation and she was terrified of everything and everyone,
                            especially groomers. Carla won her over the first time they met. Her kind, loving and nurturing approach to animals is amazing.
                            Plus, she adds in some magic like lavender essential oil, bath time massage, gentle kind and loving words and soothing CBD.
                            The end results are a beautifully groomed dog who has just enjoyed a very pleasant day at the spa.</p>
                            <p>-Lori</p>
                        </div>
                        <div className="clientsays">
                            <p>Carla has been our groomer for close to two years now. We have a Great Pyrenees and Carla has been the only groomer for Ellie.
                            The bond that they have is so amazing, and every groom is perfect. She's even helped with our other two large dogs, both Doberman/Shepherd mixes.
                            The attention to detail and compassion that Carla has are just a few reasons why we will continue to go to Carla for all of our grooming needs.</p>
                            <p>-Mackenzie</p>
                        </div>
                        <div className="clientsays">
                            <p>Carla is the best! Her gentle disposition and CBD option keep my crazy dogs calm. and the finished results are amazing.</p>
                            <p>-Kate</p>
                        </div>
                    </Carousel>
                {/* </div> */}
            </section>
        )
    }
}

export default HomepageReviews;