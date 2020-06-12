import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password1: "",
      error: {
        name: "",
        email: "",
        password: "",
        password1: "",
      },
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  password1ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== this.state.password) {
      this.setState({
        error: { password1: "Passwords do not match" },
      });
    } else {
      this.setState({
        error: { password1: "" },
      });
    }
  };
  passwordChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 8) {
      this.setState({
        error: { password: "Passwords should contain atleast 8 characters" },
      });
    } else {
      this.setState({
        error: { password: "" },
      });
    }
  };
  submitHandler = (e) => {
    const { name, email, password, password1 } = this.state;

    e.preventDefault();
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
    } else if (email === "") {
      this.setState({ error: { email: "Email is required" } });
    } else if (password === "") {
      this.setState({ error: { password: "Password is required" } });
    } else if (password.length < 8) {
      this.setState({
        error: { password: "Password should contain atleast 8 characters" },
      });
    } else if (password !== password1) {
      this.setState({ error: { password1: "Your passwords do not match!" } });
    } else {
      axios
        .post("http://localhost:5000/users/register", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        })
        .then((doc) => {
          if (doc.data.err) {
            this.setState({
              error: {
                email: "An account is already registered with this email",
              },
            });
          } else {
            this.props.history.push("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div className="container registerPage">
        <h1 className="text-info text-center">
          <i className="icon fa fa-user-plus"></i>
        </h1>
        <form onSubmit={this.submitHandler} className="mt-3">
          <div className="form-group">
            <label>Name : </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
              className="form-control"
            ></input>
            <small className="form-text text-danger">
              {this.state.error.name}
            </small>
          </div>
          <div className="form-group">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
              className="form-control"
            ></input>
            <small className="form-text text-danger">
              {this.state.error.email}
            </small>
          </div>
          <div className="form-group">
            <label>Password : </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
              className="form-control"
            ></input>
            <small className="form-text text-danger">
              {this.state.error.password}
            </small>
          </div>

          <div className="form-group">
            <label>Confirm Password : </label>
            <input
              type="password"
              name="password1"
              value={this.state.password1}
              onChange={this.password1ChangeHandler}
              className="form-control"
            ></input>
            <small className="form-text text-danger">
              {this.state.error.password1}
            </small>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-outline-info btn-lg float-right"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
