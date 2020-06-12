import React, { Component } from "react";
import Axios from "axios";

import Personal from "./dataForResume/Personal";
import Education from "./dataForResume/Education";
import Experience from "./dataForResume/Experience";
import SkillsAndHobbies from "./dataForResume/SkillsAndHobbies";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: null,
      email: null,
      loggedIn: false,
      error: null,
      formStep: 1,
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        birthday: "",
        about:
          "Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.",
      },
      education: [],
      experience: [],
      skills: [],
      hobbies: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/users/dashboard", {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((response) => {
        if (response.data.error) {
          this.props.history.push("/login");
          localStorage.removeItem("jwt");
        } else {
          const { _id, name, email } = response.data;
          this.setState({
            id: _id,
            name: name,
            email: email,
            loggedIn: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  onChangePersonal = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  //=================== Add Qualification =======================

  addQualification = (newState) => {
    this.setState({
      education: [...this.state.education, newState],
    });
  };

  //==================== Add Experience =======================
  addExperience = (newExp) => {
    this.setState({
      experience: [...this.state.experience, newExp],
    });
  };

  //==================== Add Skills =======================

  addSkills = (newSkill) => {
    this.setState({
      skills: [...this.state.skills, newSkill],
    });
  };

  //==================== Add Hobbies =======================

  addHobbies = (newHobby) => {
    this.setState({
      hobbies: [...this.state.hobbies, newHobby],
    });
  };

  //========================== Form Steps ===========================

  nextBlock = (e) => {
    e.preventDefault();
    this.setState({
      formStep: this.state.formStep + 1,
    });
  };

  prevBlock = (e) => {
    e.preventDefault();
    this.setState({
      formStep: this.state.formStep - 1,
    });
  };

  //===========================***********==========================

  continue = () => {
    const data = {
      personal: this.state.personal,
      education: this.state.education,
      experience: this.state.experience,
      skills: this.state.skills,
      hobbies: this.state.hobbies,
    };
    Axios.post("http://localhost:5000/users/provide/" + this.state.id, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    })
      .then((res) => {
        if (!res.error) {
          console.log({ msg: "Form Submitted" });
          this.props.history.push("/template/" + this.state.id);
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    switch (this.state.formStep) {
      case 1:
        return (
          <div className="mt-5 pt-5 dashboardPage">
            <Personal
              nextBlock={this.nextBlock}
              onChangePersonal={this.onChangePersonal}
              personal={this.state.personal}
            />
          </div>
        );
      case 2:
        return (
          <div className="mt-5 pt-5 dashboardPage">
            <Education
              nextBlock={this.nextBlock}
              prevBlock={this.prevBlock}
              addQualification={this.addQualification}
            />
          </div>
        );
      case 3:
        return (
          <div className="mt-5 pt-5 dashboardPage">
            <Experience
              nextBlock={this.nextBlock}
              prevBlock={this.prevBlock}
              addExperience={this.addExperience}
            />
          </div>
        );

      case 4:
        return (
          <div className="mt-5 pt-5 dashboardPage">
            <SkillsAndHobbies
              prevBlock={this.prevBlock}
              addSkills={this.addSkills}
              addHobbies={this.addHobbies}
              continue={this.continue}
              allData={this.state}
            />
          </div>
        );
      default:
        return null;
    }
  }
}
export default Dashboard;
