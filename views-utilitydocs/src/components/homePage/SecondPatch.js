import React from "react";

function secondPatch() {
  return (
    <div className="patch2 container-fluid text-center my-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 contactUs">
          <h1 className="text-center text-info">Contact Us</h1>
          <div className="px-5">
            <p className="lead text-light ">Feel free to talk to us</p>

            <div className="contact-icons w-50">
              <i className="fa fa-quora"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
            <hr className="w-50 bg-info" />
            <p className="lead text-light ">
              We would also like to have a feedback from you
            </p>

            {/* ====================== Model Starts ======================== */}
            <button
              type="button"
              className="btn btn-outline-info"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-envelope"></i> Send
            </button>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Feedback/Suggestions
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter your email here"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <textarea
                        rows="5"
                        placeholder="Start writing from here..."
                        required
                        className="form-control"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-info">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ====================== Model End ======================== */}
        </div>

        <div className="col-md-6 col-sm-12 aboutUs">
          <h1 className="text-center text-info">About Us!</h1>
          <div className="text-center text-light">
            <p className="lead px-5">
              This is some random meaningless senseless text This is some random
              meaningless senseless text This is some random meaningless
              senseless text This is some random meaningless senseless text This
              is some random meaningless senseless text This is some random
              meaningless senseless text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default secondPatch;
