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

  render() {

    return (
      <div className="App">
        <BrowserRouter>

          <Nav/>

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/grooming" component={Grooming} />
            </Switch>
          </main>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
