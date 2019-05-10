import React, { Component } from "react";
import { login } from "../config/firebase";
import "../App.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      temp: {}
    };

    this.log_in = this.log_in.bind(this);
  }
  log_in() {
    const { email, password } = this.state;

    try {
      const flag = login(email, password);
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
        <h3>Login Page</h3>
        <input
          className="loginInput"
          type="email"
          placeholder="Type Email...."
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <br />

        <input
          className="loginInput"
          type="password"
          placeholder="Type Password...."
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />

        <button className="loginButton" onClick={this.log_in}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
