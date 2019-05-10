import React, { Component } from "react";
import { signup } from "../config/firebase";
import "../App.css";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      temp: {}
    };

    this.sign_up = this.sign_up.bind(this);
  }
  sign_up() {
    const { email, password } = this.state;

    try {
      const flag = signup(email, password);
      console.log("flag===>>>>", flag);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { temp } = this.state;
    console.log("temp======>>>> ", temp);
    return (
      <div>
        <h3>Signup Page</h3>
        <input
          className="signupInput"
          type="email"
          placeholder="Type Email...."
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <br />

        <input
          className="signupInput"
          type="password"
          placeholder="Type Password...."
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />

        <button className="signupButton" onClick={this.sign_up}>
          Signup
        </button>
      </div>
    );
  }
}

export default Signup;
