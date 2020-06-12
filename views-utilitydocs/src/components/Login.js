import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      loggedIn: false,
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    Axios.post("http://localhost:5000/users/login", user)
      .then((doc) => {
        if (doc.data.error) {
          const errMsg = (
            <div className="alert alert-danger text-center" role="alert">
              <span className="text-start">{doc.data.error}</span>
            </div>
          );
          this.setState({
            error: errMsg,
          });
        } else {
          localStorage.setItem("jwt", doc.data);
          this.setState({
            loggedIn: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container loginPage">
        <h1 className="text-info text-center">
          <i className="icon fa fa-sign-in"></i>
        </h1>
        <form onSubmit={this.handleSubmit}>
          {this.state.error}
          <div method="post" className="form-group">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label>Password : </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-outline-info btn-lg float-right"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
