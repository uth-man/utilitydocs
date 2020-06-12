import React, { Component } from "react";

class SkillsAndHobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      hobby: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addSkills = (e) => {
    e.preventDefault();
    this.props.addSkills(this.state.skill);
    this.setState({
      skill: "",
    });
  };
  addHobbies = (e) => {
    e.preventDefault();
    this.props.addHobbies(this.state.hobby);
    this.setState({
      hobby: "",
    });
  };
  continue = (e) => {
    e.preventDefault();
    this.props.continue();
  };
  render() {
    return (
      <div>
        <div className="row container-fluid  m-auto p-3">
          <div className="col-sm-12 col-md-6 info-box">
            <h1>Your Skills And Hobbies</h1>
            <div className="instructions">
              <ul>
                <li>
                  In this last step add your single hobby or skill and click add
                  button and then add another hobby or skill and so on and so
                  forth
                </li>
                <li>Do follow instruction given in previous steps too</li>
                <li>Click back button to go back to previous steps</li>
                <li>
                  click create button to select your favourite theme/template
                  for resume
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <h1>Step IV</h1>
            <form>
              <div className="row">
                <div className="form-group col-8">
                  <input
                    name="skill"
                    value={this.state.skill}
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="Enter a skill"
                  ></input>
                </div>
                <div className="form-group col-4">
                  <button
                    className="btn btn-outline-success"
                    onClick={this.addSkills}
                  >
                    Add
                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="form-group col-8">
                  <input
                    name="hobby"
                    value={this.state.hobby}
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="Enter a hobby"
                  ></input>
                </div>
                <div className="form-group col-4">
                  <button
                    className="btn btn-outline-success"
                    onClick={this.addHobbies}
                  >
                    Add
                  </button>
                </div>
              </div>
              <br />
              <br />
              <div className="form-group">
                <button
                  className="btn btn-info float-right px-5"
                  onClick={this.continue}
                >
                  Create
                </button>
                <button
                  className="btn btn-outline-dark float-right px-3 mr-3"
                  onClick={this.props.prevBlock}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillsAndHobbies;
