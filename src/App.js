import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Concact Manager" />
        <Contact name="John Doe" email="email@example.com" phone="3243242" />
        <Contact
          name="Karen Smith"
          email="karen@gmail.com"
          phone="333-333-3333"
        />
      </div>
    );
  }
}

export default App;
