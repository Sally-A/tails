import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Logo3 from '../assests/images/logo3.png';
import Groom1  from '../assests/images/groom1.jpg'; 
import Groom2  from '../assests/images/groom2.jpg'; 
import Groom3  from '../assests/images/groom3.png'; 
import Puppy1  from '../assests/images/puppy1.jpg';
import HomepageReviews from '../reviews/homepage-reviews.js';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section className="titleblock">
                    <div>
                        <Container>
                            <Row>
                                <Col className="col-4 col-sm-3 col-md-2 align-self-center">
                                    <img className="logo" src={Logo3} alt="Tails Of The Town" />
                                </Col>
                                <Col className="col">
                                    <h1>Tails of the Town</h1>
                                    <h2>Dog & Cat Grooming Salon</h2>
                                    <a role="button" className="btn btn-link" href="tel:+13308319545"><i className="fa fa-phone" /> 1-330-831-9545</a><br />
                                    <a role="button" className="btn btn-link" href="mailto:TailsOfTheTown@gmail.com"><i className="fa fa-envelope-o" /> TailsOfTheTown@gmail.com</a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>


                <section className="ophours">
                    <Container className="container">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <Row>
                                    <Col>
                                        <h2>Hours</h2>
                                        <p class="d-none d-sm-block">Our Hours are Monday through Friday 8am to 4:30pm and Saturday 8am
                                            to Noon. Please ask if you need to schedule outside of normal business hours.</p>
                                    </Col>
                                    <Col>
                                        <Link to="/grooming">
                                            <img src={Groom2} className="d-flex mr-3 img-thumbnail dogPic"  alt="All types grooming" />
                                        </Link>
                                    </Col>
                                    <Col>
                                        <h2>Location</h2>
                                        <p class="d-none d-sm-block">
                                            121 C North Market St.
                                            Lisbon, OH 44432
                                        </p>
                                    </Col>

                                </Row>

                            </div>
                        </div>
                    </Container>
                </section>


                <section className="groominginfo">
                    <Container className="container">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <Row>
                                    <Col>
                                        <Link to="/grooming">
                                            <img src={Puppy1} className="d-flex mr-3 img-thumbnail dogPic"  alt="All types grooming" />
                                        </Link>
                                    </Col>
                                    <Col>
                                        <h2>Grooming Services</h2>
                                        <p className="d-none d-sm-block">Our grooming services are provided by professional and caring
                                            technicians. Grooming include bath, brush out, nails, paw pads, ears, and anal gland
                                            expression. Full groom also includes a hair cut of your preference. We also have shampoos
                                            for skin conditions and coat conditions. Please ask about special products or services. </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>


                <section className="galleryinfo">
                    <Container className="container">
                            <div class="media">
                                <div class="media-body align-self-center">
                                    <Row>
                                        <Col>
                                            <h2>Tail Gallery</h2>
                                            <p className="d-none d-sm-block">A look at some of our happy customers </p>
                                        </Col>
                                        <Col className="media-body align-self-center">
                                            <Link to="/gallery">
                                                <img src={Groom3} className="d-flex mr-3 img-thumbnail dogPic"  alt="pictures" />
                                            </Link>       
                                        </Col>                                        
                                    </Row>
                                </div>
                            </div>
                        </Container>
                </section>

                <section className="contactinfo">
                    <Container className="container">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <Row>
                                    <Col>
                                        <Link to="/contact">
                                            <img src={Groom1} className="d-flex mr-3 img-thumbnail dogPic"  alt="All types grooming" />
                                        </Link>
                                    </Col>                                    
                                    <Col>
                                        <h2>Contact Us</h2>
                                        <p class="d-none d-sm-block">Contact us for all your pet grooming needs.</p>
                                        <a role="button" className="btn btn-link" href="tel:+13308319545"><i className="fa fa-phone" /> 1-330-831-9545</a><br />
                                        <a role="button" className="btn btn-link" href="mailto:TailsOfTheTown@gmail.com"><i className="fa fa-envelope-o" /> TailsOfTheTown@gmail.com</a>
                                    </Col>
                                    <Col>
                                        <Link to="/contact">
                                            <img src={Groom1} className="d-flex mr-3 img-thumbnail dogPic"  alt="All types grooming" />
                                        </Link>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Container>
                </section>

                <HomepageReviews />
            </Fragment>
        )
    }
}

export default Homepage;