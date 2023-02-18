import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/extra.css";
import "../assets/css/styles.min.css";
import "../assets/css/Features-Image-icons.css";
import "../assets/css/Features-Image-images.css";


class Vehicles extends React.Component {
  render() {
    return (
      <div>
        <section className="py-5" style={{backgroundColor: "var(--bs-black)"}}>
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/launch">
                    Launch and Safety
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/vehicles">
                    Vehicles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/training">
                    Training and Recovery
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary shadow"
                role="button"
                href="/tours"
              >
                Book Now
              </a>
            </div>
          </div>
          </nav>
          <div className="container py-5" style={{backgroundColor: "var(--bs-black)"}}>
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2 className="fw-bold">EXO Infinity Vehicles</h2>
                <p className="text-muted w-lg-50">
                  Through our strategic partnership with the GSMST robotics
                  department, we are able to provide transportation unlike any
                  other.
                  <br />
                  <br />
                  <span
                    style={{
                      color: "var(--text-normal)",
                      backgroundColor: "var(--background-message-hover)"
                    }}
                  >
                    All spacecrafts are equipped with advanced life support
                    systems, including air revitalization, waste management, and
                    water recycling, which are designed to provide a safe and
                    comfortable environment for all passengers and crew during
                    the journey. In addition, the spacecraft is equipped with a
                    variety of scientific instruments, including cameras,
                    spectrometers, and other sensors. These instruments are used
                    to study the planets and moons that the spacecraft visits,
                    allowing our passengers to experience the wonders of the
                    solar system firsthand.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 py-xl-5" style={{backgroundColor: "var(--bs-black)"}}>
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 col-lg-12">
                  <div className="text-white p-4 p-md-5">
                    <h2
                      className="fw-bold text-white mb-3"
                      style={{
                        paddingTop: "20px"
                      }}
                    >
                      EXO Explorer Rover
                    </h2>
                    <p className="mb-4">
                      Name: Exo Explorer Drone
                      <br />
                      <br />
                      Overview: The Exo Explorer Rover is a user-controlled
                      rover designed for space tourism. It allows people to
                      explore different planets and celestial bodies from the
                      comfort of their home. The rover is equipped with a
                      high-quality camera and is designed to withstand the harsh
                      conditions of space.
                      <br />
                      <br />
                      Dimensions: The rover is small and compact, measuring
                      approximately 20 cm x 20 cm x 20 cm. It is lightweight,
                      weighing only 1 kg.
                      <br />
                      <br />
                      Battery Life: The Exo Explorer Rover has a long-lasting
                      battery that can last up to 4 hours on a single charge.
                      The battery is rechargeable and can be easily swapped out.
                      <br />
                      <br />
                      Camera: The rover is equipped with a high-resolution
                      camera that can capture stunning images and videos of the
                      surrounding environment. The camera is capable of
                      recording 4K video and can take high-quality photos. It
                      also has a live-streaming feature that allows users to see
                      the environment in real-time.
                      <br />
                      <br />
                      Sensors: The rover has a variety of sensors that help it
                      navigate in space. It has GPS, an altimeter, and a variety
                      of other sensors that allow it to determine its location
                      and orientation. It also has a range of environmental
                      sensors that allow it to detect things like temperature,
                      pressure, and radiation.
                      <br />
                      <br />
                      Mobility: The rover is designed for maneuverability and
                      can move in any direction. It is equipped with four small
                      motors that allow it to move through space with precision.{" "}
                      <br />
                      <br />
                      Control: The rover is controlled through a remote control
                      that is similar to a video game controller. It has a range
                      of up to 100 meters, allowing users to explore a wide
                      area. The controller also has a built-in screen that
                      displays the live video feed from the rover's camera.
                      <br />
                      <br />
                      Safety: The Exo Explorer Rover is designed with safety in
                      mind. It has a variety of fail-safe mechanisms that
                      prevent it from getting lost or crashing. It also has a
                      built-in system that allows it to return to its starting
                      point if it loses communication with the controller.
                    </p>
                    <div className="my-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Vehicles;
