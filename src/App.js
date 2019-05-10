import React, { Component } from "react";
import logo from "./logo.svg";
import yellowLogo from './assets/images/react-logo-yellow.png'
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

class App extends Component {
  constructor() {
    super();

    this.state = {
      trigger: false,
      themeColor: "#61DAFB"
    };
  }

  render() {
    const { trigger, themeColor } = this.state;
    document.getElementsByTagName("META")[2].content = themeColor;

    return (
      <div className="App">
        {trigger && (
          <div>
          <img src={yellowLogo} className="App-logo" alt="logo" />
            <Login />
            <hr />
            <p>Don't have an Account?</p>
            <button
              className="signupButton"
              onClick={() => {
                this.setState({ trigger: !trigger, themeColor: '#61DAFB' });
              }}
            >
              Sign up
            </button>
          </div>
        )}

        {!trigger && (
          <div>
          <img src={logo} className="App-logo" alt="logo" />
            <Signup />
            <hr />
            <p>Already have an Account?</p>
            <button
              className="loginButton"
              onClick={() => {
                this.setState({ trigger: !trigger, themeColor: '#f1fb61' });
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
