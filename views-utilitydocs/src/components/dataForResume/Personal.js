import React from "react";

function Personal(props) {
  return (
    <div className="row container-fluid m-auto p-3 personal-data">
      <div className="col-sm-12 col-md-6 info-box">
        <h1>Personal Information</h1>

        <div className="instructions">
          <ul>
            <li>
              This section will include your personal info as asked in this
              form.
            </li>
            <li>
              Make sure to fill the form by providing your details correctly
              specially make sure you write working email and rest is upon us
            </li>
            <li>
              Use single space after comma (if you are using commas) in address
              field to make it look good
            </li>
            <li>
              In About / Objective section you can use default writing but try
              to write it on your own that will make you stand out
            </li>
            <li>
              After filling the form click Next button to go to next step for
              your further details
            </li>
            <li>You can always come back to this step</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 p-3 form-box">
        <h1>Step I</h1>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={props.personal.firstName}
                  onChange={props.onChangePersonal}
                  placeholder="First Name"
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  onChange={props.onChangePersonal}
                  value={props.personal.lastName}
                  placeholder="Last Name"
                ></input>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={props.onChangePersonal}
              value={props.personal.email}
              placeholder="Email.."
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="phone"
              onChange={props.onChangePersonal}
              value={props.personal.phone}
              placeholder="Phone Number"
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="address"
              onChange={props.onChangePersonal}
              value={props.personal.address}
              placeholder="Address"
            ></input>
          </div>
          <div className="form-group">
            <label>Date of birth</label>
            <input
              className="form-control"
              type="date"
              name="birthday"
              onChange={props.onChangePersonal}
              value={props.personal.birthday}
            ></input>
          </div>
          <div className="form-group">
            <label>Objectives/About yourself</label>
            <textarea
              rows="5"
              className="form-control"
              name="about"
              onChange={props.onChangePersonal}
              value={props.personal.about}
              placeholder="Write something about yourself.."
            ></textarea>
          </div>
          <br />
          <br />
          <div className="form-group">
            <button
              className="btn btn-info float-right px-5"
              onClick={props.nextBlock}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Personal;
