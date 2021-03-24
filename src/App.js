import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './homepage/homepage.js';
import About from './about/about.js';
import Gallery from './gallery/gallery.js';
import Contact from './contact/contact.js';
import Reviews from './reviews/reviews.js';
import Grooming from './services/grooming.js';
import Nav from './nav/nav';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isTablet: false,
      isMobile: false,
      photos: [],
      user: [],
      isLoggedIn: false
    }
  }

  componentDidMount() {
    let mobileMediaQuery = window.matchMedia('(max-width: 850px)');

    if (mobileMediaQuery.matches) {
      this.setState({
        isTablet: false,
        isMobile: true
      })
    }

    fetch('https://pacific-fortress-97426.herokuapp.com/', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((photos) => {
      this.setState({
        photos
      })
    }).catch((e) => {
      console.log({ e })
    })
  }

  componentWillUnmount() {
    localStorage.removeItem('user')
  }

  setUserState = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    this.setState({
      user: data,
      isLoggedIn: true
    })
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>

          <Nav />}

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/grooming" render={(props) => <Grooming/>} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
