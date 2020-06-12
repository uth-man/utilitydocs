import React from "react";
import resumeImg from "../../assets/picture2.jpg";
import { Link } from "react-router-dom";
import SecondPatch from "./SecondPatch";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="landing-content container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Hello</h1>
              <p className="lead">this is a new one</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page container-fluid mt-5 ">
        <div className="row text-center">
          <div className="col-md-6 col-sm-12 p-0">
            <h1>Create A Professional Résumé</h1>
          </div>
          <div className="col-md-6 col-sm-12 align-self-center px-5">
            <p className="lead ">
              Create a professional resume that will help you stand apart & we
              are here to bring our services on the table and provide you
              professional resume that will make you count for free
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 col-sm-12 align-self-center px-5 order-sm-last order-md-1 ">
            <p className="lead">
              Everyone wants to do a dream job that makes them happily make
              money.. If you are too then it all starts with an eye-catching
              resume.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 order-sm-1 order-md-12">
            <h1>
              Pursue Your Dream <br />
              Job!
            </h1>
          </div>
        </div>
      </div>

      <SecondPatch />

      <div className="container patch2-5 text-center text-info px-5 py-3 w-75">
        <h1>Now! let us help you creating your resume..</h1>
      </div>
      <div className="home-3 container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0">
            <img src={resumeImg} className="w-100" alt="here was pic"></img>
          </div>
          <div className="col-md-6 col-sm-12 align-self-center p-5">
            <div className="card w-100">
              <h5 className="card-header bg-info text-light p-3">
                Resume Or CV?
              </h5>
              <div className="card-body p-4">
                <p className="card-text p-3">
                  A <b>resume</b> or <b>résumé</b> is a brief summary of your
                  skills and experience over one or two pages while a <b>CV</b>{" "}
                  is more detailed and can stretch well beyond two pages.
                </p>
                <Link to="/login" className="btn btn-outline-info float-right">
                  Create Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
