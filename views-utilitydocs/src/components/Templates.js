import React, { Component } from "react";
import template1 from "../assets/templates/template1.jpg";
import { Link } from "react-router-dom";
class Templates extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 pt-5 templates">
        <h1 className="text-center text-dark">Select your template</h1>
        <div className="container-fluid row">
          <div className="col-sm-6 col-md-3 p-3">
            <Link to={"/template/dafault/" + this.props.match.params.id}>
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 p-3">
            <Link to="#">
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 p-3">
            <Link to="#">
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 p-3">
            <Link to="#">
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 p-3">
            <Link to="#">
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 p-3">
            <Link to="#">
              <img src={template1} alt="template1"></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Templates;
