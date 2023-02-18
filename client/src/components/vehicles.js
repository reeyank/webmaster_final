import React from "react";

class vehicles extends React.Component {
  render() {
    return (
      <div>
        <section className="py-5">
          <nav
            className="navbar navbar-dark navbar-expand-md sticky-top py-3"
            id="mainNav"
            style={{
              background: "rgb(0,0,0)",
              marginTop: "-44px"
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
                      Tours
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="projects.html">
                      Launch and Safety
                    </a>
                  </li>
                  <li className="nav-item" />
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
          <div className="container py-5">
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
        <div
          className="carousel slide"
          data-bs-ride="carousel"
          id="carousel-1"
          style={{
            height: "600px"
          }}
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                className="w-100 d-block position-absolute h-100 fit-cover"
                src="assets/img/falconheavy_sep.png"
                alt="Slide Image"
                style={{
                  zIndex: -1
                }}
              />
              <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                  <div className="col-md-6 col-lg-9 col-xl-4 offset-md-2">
                    <div
                      style={{
                        maxWidth: "350px"
                      }}
                    >
                      <h1 className="text-uppercase fw-bold">EXo Voyager</h1>
                      <a
                        className="btn btn-primary btn-lg me-2"
                        role="button"
                        href="#"
                      >
                        Button
                      </a>
                    </div>
                    <p
                      className="my-3"
                      style={{
                        fontSize: "14px"
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Specifications:
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Height: 70 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Width: 16 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Mass: 2,500,000 kg (including payload)
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to Low Earth Orbit (LEO): 80,000 kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to Geostationary Transfer Orbit (GTO): 30,000
                          kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          The rocket ship is powered by a novel propulsion
                          system that uses a combination of fusion and
                          antimatter reactions to generate thrust. This system
                          provides a specific impulse of 10 million seconds,
                          which is much higher than any currently available
                          propulsion technology. With this propulsion system,
                          the rocket ship is capable of traveling at a constant
                          speed of 100 km/s, allowing it to reach Pluto within a
                          few days.
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                className="w-100 d-block position-absolute h-100 fit-cover"
                src="assets/img/fh_performance.jpg"
                alt="Slide Image"
                style={{
                  zIndex: -1
                }}
              />
              <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                  <div className="col-md-6 col-lg-9 col-xl-4 offset-md-2">
                    <div
                      style={{
                        maxWidth: "350px"
                      }}
                    >
                      <h1 className="text-uppercase fw-bold">EXo Nova</h1>
                      <a
                        className="btn btn-primary btn-lg me-2"
                        role="button"
                        href="#"
                      >
                        Button
                      </a>
                    </div>
                    <p
                      className="my-3"
                      style={{
                        fontSize: "14px"
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Specifications:
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Height: 120 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Width: 26 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Mass: 6,000,000 kg (including payload)
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to Low Earth Orbit (LEO): 200,000 kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to Geostationary Transfer Orbit (GTO): 80,000
                          kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          The rocket ship is powered by a novel propulsion
                          system that uses a combination of fusion and
                          antimatter reactions to generate thrust. This system
                          provides a specific impulse of 10 million seconds,
                          which is much higher than any currently available
                          propulsion technology. With this propulsion system,
                          the rocket ship is capable of traveling at a constant
                          speed of 100 km/s, allowing it to reach Pluto within a
                          few days.
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                className="w-100 d-block position-absolute h-100 fit-cover"
                src="assets/img/107182934-1674566336033-52621815136_50da618a63_k_1.jpg"
                alt="Slide Image"
                style={{
                  zIndex: -1
                }}
              />
              <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                  <div className="col-md-6 col-lg-9 col-xl-4 offset-md-2">
                    <div
                      style={{
                        maxWidth: "350px"
                      }}
                    >
                      <h1 className="text-uppercase fw-bold">
                        <span
                          style={{
                            color: "rgb(0, 0, 0)"
                          }}
                        >
                          EXo Swift
                        </span>
                      </h1>
                      <a
                        className="btn btn-primary btn-lg me-2"
                        role="button"
                        href="#"
                      >
                        Button
                      </a>
                    </div>
                    <p
                      className="my-3"
                      style={{
                        fontSize: "14px"
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Specifications:
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Height: 50 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Width: 20 meters
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Mass: 5,000,000 kg (including fuel)
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to LEO: 100,000 kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          Payload to GTO: 50,000 kg
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          To achieve a speed close to the speed of light, Exo
                          Infinity's Exo Swift has a powerful propulsion system
                          with a fusion engine. This ship is only limited to
                          those who want to voyage on the Centauri Tours.{" "}
                        </span>
                      </strong>
                      <br />
                      <strong>
                        <span
                          style={{
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          The rocket ship can travel at 0.9 times the speed of
                          light and would take approximately 4.4 years to reach
                          Alpha Centauri, which is 4.37 light-years away.
                          However, time would be experienced differently on the
                          rocket ship due to time dilation, so the passengers
                          and crew would experience less time than someone on
                          Earth. For example, if the trip took 4.4 years from
                          Earth's perspective, it could feel like a few weeks to
                          the passengers and crew on the rocket ship, which is
                          why partaking in the Centauri Tours on the Exo Swift
                          is a once in a lifetime experience.
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carousel-1"
              data-bs-slide-to={0}
              className="active"
            />
            <li data-bs-target="#carousel-1" data-bs-slide-to={1} />
            <li data-bs-target="#carousel-1" data-bs-slide-to={2} />
          </ol>
        </div>
        <section className="py-4 py-xl-5">
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 col-lg-12">
                  <div className="text-white p-4 p-md-5">
                    <img
                      className="w-100 h-100 fit-cover"
                      src="assets/img/Screenshot%202023-02-17%20at%2010.28.24%20PM.png"
                    />
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

export default vehicles;
