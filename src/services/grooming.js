import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './services.css';

class Grooming extends Component {
    render() {
        return (

            <section className="services">
                <div className="pagetitle">
                    <h1>Services &amp; Pricing</h1>
                </div>

                <div className="service">
                    <h2>Services</h2>
                </div>
                <Container fluid className="container" id="services">
                    <Row className="row">
                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Basic Grooming</h2>
                            <ul>
                                <li>Bath &amp; Brush Out </li>
                                <li>Nails &amp; Paw Pads Trimmed </li>
                                <li>Nails Ground </li>
                                <li>Ears Cleaned </li>
                                <li>Anal Gland Expression (if necessary) </li>
                            </ul>
                        </Col>

                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Full Grooming</h2>
                            <ul>
                                <li>Bath &amp; Brush Out </li>
                                <li>Pattern Hair Cut </li>
                                <li>Nails &amp; Paw Pads Trimmed </li>
                                <li>Nails Ground </li>
                                <li>Ears Cleaned </li>
                                <li>Anal Gland Expression (if necessary) </li>
                            </ul>
                        </Col>

                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Add-On Services</h2>
                            <ul>
                                <li>Hand Stripping $50</li>
                                <li>Flea Bath $10.00</li>
                                <li>De-Skunking $15.00</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>


                <div className="price">
                    <h2>Prices</h2>
                </div>

                <Container fluid className="container" id="prices">
                    <Row className="row">
                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Small Dogs</h2>
                                Ex: Shih Tzu, Maltese, Chihuahuas
                                <ul>
                                    <li>Basic Grooming $15.00 - $25.00</li>
                                    <li>Full Grooming $30.00 - $35.00</li>
                                </ul>
                        </Col>

                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Medium Dogs</h2>
                                Ex: Shelties, Cocker Spaniels
                                <ul>
                                    <li>Basic Grooming $30.00 - $40.00</li>
                                    <li>Full Grooming $45.00 - $55.00</li>
                                </ul>
                        </Col>


                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Large dogs</h2>
                                Ex: Labs, Golden Retrievers
                                <ul>
                                    <li>Basic Grooming $35.00 - $45.00</li>
                                    <li>Full Grooming $50.00 - $65.00</li>
                                </ul>
                        </Col>
                    </Row>

                    <Row className="row">
                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Extra-Large Dogs</h2>
                                Ex: Great Pyrenees, St. Bernard
                                <ul>
                                    <li>Basic Grooming $50 &amp; Up</li>
                                    <li>Full Grooming $65 &amp; Up</li>
                                </ul>
                        </Col>

                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>Cats</h2>
                                <ul>
                                    <li>Full Grooming $30 &amp; Up</li>
                                    <li>Pricing and services depend upon behavior and condition of cat </li>
                                </ul>
                        </Col>

                        <Col className="col-12 col-md-4 serviceTypes">
                            <h2>*Prices listed are subject to change depending upon:</h2>
                                <ul>
                                    <li>Coat length </li>
                                    <li>Coat condition </li>
                                    <li>Skin condition </li>
                                    <li>Matting of the coat </li>
                                    <li>Pet's behavior </li>
                                </ul>
                        </Col>
                    </Row>
                </Container>

            </section>
        )
    }
}

export default Grooming