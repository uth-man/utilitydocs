import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyLocation: "",
      startMonth: "",
      endMonth: "",
      jobTitle: "",
      jobDescription: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addExperience = (e) => {
    e.preventDefault();
    this.props.addExperience(this.state);
    this.setState({
      companyName: "",
      companyLocation: "",
      startMonth: "",
      endMonth: "",
      jobTitle: "",
      jobDescription: "",
    });
  };
  render() {
    return (
      <div className="row container-fluid  m-auto p-3">
        <div className="col-sm-12 col-md-6 info-box">
          <h1>Experience</h1>

          <div className="instructions">
            <ul>
              <li>
                You can add as much experience as much you want or as much you
                have
              </li>
              <li>Follow the same instruction mentioned in previous step</li>
              <li>
                At the last text area try to be Brief about your role and your
                responsibilities you had at particular place
              </li>
              <li>
                After filling all field make sure to click on add button before
                going next to prevent your information from being scraped
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-3">
          <h1>Step III</h1>
          <form>
            <div className="row">
              <div className="col-sm-12 col-md-6 form-group">
                <input
                  type="text"
                  name="companyName"
                  onChange={this.onChangeHandler}
                  value={this.state.companyName}
                  placeholder="Company Name"
                  className="form-control"
                ></input>
              </div>
              <div className="col-sm-12 col-md-6 form-group">
                <input
                  type="text"
                  name="companyLocation"
                  onChange={this.onChangeHandler}
                  value={this.state.companyLocation}
                  placeholder="Company Location"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 form-group">
                <label>Joining Month</label>
                <input
                  type="month"
                  name="startMonth"
                  onChange={this.onChangeHandler}
                  value={this.state.startMonth}
                  placeholder="Company Name"
                  className="form-control"
                ></input>
              </div>
              <div className="col-sm-12 col-md-6 form-group">
                <label>End Month</label>
                <input
                  type="month"
                  name="endMonth"
                  onChange={this.onChangeHandler}
                  value={this.state.endMonth}
                  placeholder="Company Location"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12 col-md-6">
                <input
                  type="text"
                  name="jobTitle"
                  onChange={this.onChangeHandler}
                  value={this.state.jobTitle}
                  className="form-control"
                  placeholder="Your Job Title"
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-10 form-group">
                <textarea
                  rows="4"
                  name="jobDescription"
                  onChange={this.onChangeHandler}
                  value={this.state.jobDescription}
                  className="form-control"
                  placeholder="Brief description of your position and responsiilities.."
                ></textarea>
              </div>
              <div className="col-2 form-group p-0">
                <button
                  className="btn btn-outline-success"
                  onClick={this.addExperience}
                >
                  Add
                </button>
              </div>
            </div>
            <br />
            <br />
            <div className="form-group">
              <button
                className="btn btn-info px-5 float-right"
                onClick={this.props.nextBlock}
              >
                Next
              </button>
              <button
                className="btn btn-outline-secondary px-3 mr-3 float-right"
                onClick={this.props.prevBlock}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Skills;
