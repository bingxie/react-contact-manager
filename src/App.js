import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Concact Manager" />
        <div className="container">
          <Contact name="John Doe" email="email@example.com" phone="3243242" />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
