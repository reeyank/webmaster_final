import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-md sticky-top py-3"
          id="mainNav"
          style={{
            background: "rgb(0,0,0)",
            marginTop: "-44px",
            fontSize: "14.5px"
          }}
        >
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-bezier"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                  />
                  <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                </svg>
              </span>
              <span>EXO INFINITY</span>
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Launch and Safety
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Vehicles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Training and Recovery
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary shadow"
                role="button"
                href="signup.html"
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
        <section className="py-5 contact">
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Contacts</p>
                <h2 className="fw-bold">How you can reach us</h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-xl-4">
                <div>
                  <form className="p-3 p-xl-4" method="post">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        id="name-1"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        id="email-1"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="message-1"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary shadow d-block w-100"
                        type="submit"
                      >
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                  <div className="d-flex align-items-center p-3">
                    <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-telephone"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-bold mb-0">Phone</h6>
                      <p className="text-muted mb-0 contact2">(678) 518-6700</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-pin"
                      >
                        <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
                      </svg>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-bold mb-0">Location</h6>
                      <p className="text-muted mb-0">
                        970 McElvaney Ln NW, Lawrenceville, GA 30044
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="bg-dark"
          style={{
            background: "rgb(0,0,0)"
          }}
        />
      </div>
    );
  }
}

export default Contact;
