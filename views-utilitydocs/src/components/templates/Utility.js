import React, { Component } from "react";
import Axios from "axios";
class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/users/" + this.props.match.params.id, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.data.error) {
          this.setState({ data: res.data });
          console.log(this.state.data);
        } else {
          console.log(res.data.error);
          localStorage.removeItem("jwt");
          this.props.history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  }
  keys = () => {
    return Math.floor(Math.random() * 50 + Math.random() * 100);
  };
  render() {
    const {
      personal,
      education,
      experience,
      skills,
      hobbies,
    } = this.state.data;
    const fullName = personal ? (
      <h1 className="">
        {personal.firstName} {personal.lastName}
      </h1>
    ) : (
      <h1>loading..</h1>
    );
    const phone = personal ? (
      <li className="">
        {personal.phone} <i className="icons fa fa-phone"></i>
      </li>
    ) : (
      <h5>...</h5>
    );
    const email = personal ? (
      <li className="">
        {personal.email} <i className="icons fa fa-envelope"></i>
      </li>
    ) : (
      <h5>...</h5>
    );
    const address = personal ? (
      <li className="person-address">
        {personal.address} <i className="icons fa fa-map"></i>
      </li>
    ) : (
      <h5>...</h5>
    );
    const DOB = personal ? (
      <li className="">
        {personal.birthday} <i className="icons fa fa-table"></i>
      </li>
    ) : (
      <h5>...</h5>
    );
    const userEducation = education ? (
      education.map((data) => (
        <ul key={this.keys()}>
          <li className="">{data.major}</li>
          <li className="">{data.institute}</li>
          <li className="">{data.startDate + " - " + data.endDate}</li>
          <li>{data.grade ? "gpa : " + data.grade : ""}</li>
          <br />
        </ul>
      ))
    ) : (
      <h5>...</h5>
    );
    const userSkills = skills ? (
      skills.map((skill) => <li key={this.keys()}>{skill}</li>)
    ) : (
      <h5>...</h5>
    );

    const userHobbies = hobbies ? (
      hobbies.map((hobby) => <li key={this.keys()}>{hobby}</li>)
    ) : (
      <h5>...</h5>
    );

    // For Right Column
    const personalProfile = personal ? (
      <p className="">{personal.about}</p>
    ) : (
      <h5>...</h5>
    );
    const UserExperience = experience ? (
      experience.map((data) => {
        return (
          <div key={this.keys()}>
            <h6 className="companyDetails">
              {data.companyName} | {data.companyLocation} | {data.startMonth}
              {" - "}
              {data.endMonth}
            </h6>
            <h6>{data.jobTitle}</h6>
            <p className="lead">{data.jobDescription}</p>
          </div>
        );
      })
    ) : (
      <h5>...</h5>
    );
    return (
      <div className=" mt-5 px-0 pt-5  utility-template">
        <div className="template-body container-fluid p-0">
          <div className="top container-fluid text-center">{fullName}</div>
          <div className="container columns">
            <div className="row">
              <div className="p-0 text-right left-col">
                <div className="personal">
                  <ul>
                    {phone}
                    {email}
                    {address}
                    {DOB}
                  </ul>
                </div>

                <div className="education">
                  <h4>Education</h4>
                  {userEducation}
                </div>

                <div className="skills">
                  <h4>Skills</h4>
                  <ul>{userSkills}</ul>
                </div>

                <div className="hobbies">
                  <h4>Hobbies</h4>
                  <ul>{userHobbies}</ul>
                </div>
              </div>

              <div className="right-col">
                <div className="personal">
                  <h4>Personal Profile</h4>
                  {personalProfile}
                </div>
                <div className="userExperience">
                  <h4>Experience</h4>
                  {UserExperience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Default;
