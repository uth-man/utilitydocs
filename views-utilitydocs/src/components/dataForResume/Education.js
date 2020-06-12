import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      major: "",
      institute: "",
      startDate: "",
      endDate: "",
      grade: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.addQualification(this.state);
    this.setState({
      major: "",
      institute: "",
      startDate: "",
      endDate: "",
      grade: "",
    });
  };

  render() {
    return (
      <div className="row container-fluid m-auto p-3 academic-data">
        <div className="col-sm-12 col-md-6 info-box">
          <h1>Academic Information</h1>
          <div className="instructions">
            <ul>
              <li>
                Make sure to leave a single space after commas to make your
                resume look organized (Hints are given in input fields)
              </li>
              <li>
                You can leave a field if you want to (e.g Grades ) its optional
              </li>
              <li>
                After clicking add button you can put another academic record
                and so on
              </li>
              <li>
                After putting all info of one academic record make sure you
                click add button before going nextBlock to include current
                information in your resume otherwise it will be discarded
              </li>
              <li>You can go back to previous step/section</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-3 form-box">
          <h1>Step II</h1>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="major"
                value={this.state.major}
                onChange={this.onChangeHandler}
                placeholder="Your degree, Major"
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="institute"
                value={this.state.institute}
                onChange={this.onChangeHandler}
                placeholder="Institute, Location"
              ></input>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  type="number"
                  name="grade"
                  step="0.1"
                  max="4"
                  min="0"
                  value={this.state.grade}
                  onChange={this.onChangeHandler}
                  placeholder="Grade/4"
                ></input>
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-5">
                Start Date
                <input
                  className="form-control p-0"
                  type="month"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.onChangeHandler}
                ></input>
              </div>
              <div className="col-5">
                End Date
                <input
                  className="form-control p-0"
                  type="month"
                  name="endDate"
                  value={this.state.endDate}
                  onChange={this.onChangeHandler}
                ></input>
              </div>

              <div className="col-2 align-self-center p-0 ">
                <button
                  className="btn btn-outline-success"
                  name="Button"
                  onClick={this.onClickHandler}
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
                onClick={this.props.nextBlock}
              >
                Next
              </button>
              <button
                className="btn btn-outline-secondary float-right mr-3 px-3"
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

export default Education;
