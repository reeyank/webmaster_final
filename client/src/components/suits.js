import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class Suits extends React.Component {
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
        <div
          className="row mb-5"
          style={{
            marginBottom: "150px",
            paddingBottom: "0px"
          }}
        >
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Space Suits</h2>
            <p />
          </div>
        </div>
        <div
          className="container py-4 py-xl-5"
          style={{
            textAlign: "center"
          }}
        >
          <div
            className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"
            style={{
              paddingTop: "0px",
              marginTop: "-86px"
            }}
          >
            <div className="col-lg-12 col-xl-12">
              <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h6 className="text-uppercase text-muted">Vulcan suit</h6>
                    <hr />
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2" />
                      <li className="d-flex mb-2" />
                    </ul>
                    <p>
                      Description: The Vulcan Suit is a specially designed space
                      suit that can withstand the extreme temperatures and harsh
                      conditions on the hottest planets, such as Venus. The suit
                      is made up of multiple layers of high-tech materials, each
                      serving a specific purpose in protecting the wearer from
                      the intense heat and radiation on the planet.
                      <br />
                      <br />
                      Outer Layer: The outer layer of the suit is made of a
                      specially designed heat-resistant fabric that can
                      withstand temperatures of up to 900 degrees Fahrenheit.
                      The fabric is also coated with a reflective material to
                      help protect the wearer from the intense radiation from
                      the sun.
                      <br />
                      <br />
                      Middle Layer: The middle layer of the suit is made up of a
                      combination of heat-resistant and insulating materials
                      that help to regulate the wearer's body temperature in the
                      extreme heat of the planet's environment. The materials
                      used in this layer are designed to wick away sweat and
                      moisture from the wearer's body while also providing
                      insulation to keep the wearer warm in the frigid
                      temperatures of space.
                      <br />
                      <br />
                      Inner Layer: The innermost layer of the suit is made up of
                      a breathable fabric that allows the wearer to sweat and
                      regulate their body temperature. The fabric used in this
                      layer is also designed to be anti-microbial, helping to
                      prevent the buildup of bacteria and odor in the confined
                      space of the suit.
                      <br />
                      <br />
                      Additional Features: The Vulcan Suit also includes a
                      built-in air filtration system that helps to remove any
                      harmful particles or gases from the air the wearer
                      breathes. The suit is also equipped with a communications
                      system that allows the wearer to stay in contact with
                      their base and other members of their team while they
                      explore the surface of different planets.
                    </p>
                  </div>
                  <img
                    src="assets/img/image%20(1).png"
                    width={888}
                    height={1325}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12">
              <div className="card border-primary border-2 h-100">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h6 className="text-uppercase text-muted">
                      Frostguard Suit
                    </h6>
                    <hr />
                    <ul className="list-unstyled" />
                  </div>
                  <p>
                    Outer Layer: The outermost layer is made of a highly
                    insulating material, including layers of aerogel and Mylar,
                    that is resistant to tearing, puncturing, and abrasion. This
                    layer is also highly reflective to reflect any sunlight that
                    reaches Pluto, which is about 1,500 times less than on
                    Earth.
                    <br />
                    <br />
                    Middle Layer: The middle layer is made up of an aerogel
                    material that is highly insulating and helps to retain heat.
                    The aerogel also provides excellent insulation against cold
                    and radiation.
                    <br />
                    <br />
                    Inner Layer: The inner layer is made of a breathable
                    material that helps to regulate body temperature and prevent
                    the buildup of moisture inside the suit.
                    <br />
                    Heating System: The Frostguard Suit has an integrated
                    heating system that can be activated to provide warmth when
                    needed. The heating system is powered by a rechargeable
                    battery that can last for up to 12 hours.
                    <br />
                    <br />
                    Life Support System: The suit's life support system includes
                    an oxygen supply, carbon dioxide scrubber, and a waste
                    management system to ensure the astronaut can breathe
                    comfortably for the duration of the mission.
                    <br />
                    <br />
                    Additional Features: To ensure mobility, the Frostguard Suit
                    is designed to be flexible and lightweight. It has a
                    built-in exoskeleton that provides support to the wearer
                    while allowing for a full range of motion. The Frostguard
                    Suit's helmet is designed to protect the astronaut's face
                    and head from the extreme cold and radiation. The helmet is
                    equipped with a built-in heads-up display that provides the
                    astronaut with important information about their environment
                    and suit systems. Additionally, the suit is equipped with a
                    layer of superconducting material to provide further
                    insulation, making it ideal for extremely cold environments
                    such as Pluto.
                  </p>
                  <img src="assets/img/image%20(2).png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suits;
