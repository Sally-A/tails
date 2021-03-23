import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (

    <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <h2>About Us</h2>
                <hr />
            </div>
        </div>

        <div className="row row-content tailsOwner">
            <div className="col col-sm-6">
                <h2>Meet the Owner</h2>
                <p>Hello, my name is Carla Sadler and I am the owner and groomer 
                    at the Tails of the Town Grooming Salon. I opened on February 
                    11, 2019. I'm blessed to say it has been thriving ever since. 
                    My staff and I strive to make all dogs and cats look and feel 
                    their best. No pup to big or too small, we do them all."</p>
            </div>


            <view 
                style={{
                    width: '100%',
                    flex: 1
                    }}
                >
                <img className="owner"
                    src='../assets/images/owner_with_dogs.jpg'
                    style={{
                    width: 500,
                    resizeMode: 'contain'
                    }}
                />
            </view>

        </div>

    </div>

    );
  }
}

export default About;