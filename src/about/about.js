import React, { Component } from 'react';
import Owner from '../assests/images/owner.jpg';

class About extends Component {

  render() {
    return (
      <section className="about">
        <h1>
        Carla Sadler
        </h1>
        <div className="aboutContent">
          <img src={Owner} alt="Owner with Dogs" className="ownerPic"/>
          <p>
              Hello, my name is Carla Sadler and I am the owner and groomer 
              at the Tails of the Town Grooming Salon. I opened on February 
              11, 2019. I'm blessed to say it has been thriving ever since. 
              My staff and I strive to make all dogs and cats look and feel 
              their best. No pup to big or too small, we do them all."
          </p>

        </div>

      </section>
    )
  }
}

export default About;