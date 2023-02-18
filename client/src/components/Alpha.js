import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class Alpha extends React.Component {
  render() {
    return (
      <section className="py-4 py-xl-5">
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
        <section className="py-4 py-xl-5">
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 col-lg-12">
                  <img src="assets/img/planet-Artist-impression-surface-mass-b-Proxima%20(1).webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <h2 className="text-uppercase fw-bold mb-3">
                  Alpha Centauri Tour
                </h2>
                <p className="mb-4">
                  Looking for a space tourism destination that's out of this
                  world? Look no further than Alpha Centauri, the closest star
                  system to our own. With our expertly designed space tours, you
                  can travel to this incredible destination and witness the
                  stunning beauty of this interstellar wonder. Our knowledgeable
                  staff will guide you through the journey, ensuring your safety
                  and providing you with an unforgettable experience. Book your
                  Alpha Centauri space tour today and embark on the adventure of
                  a lifetime!
                </p>
                <button
                  className="btn btn-primary fs-5 me-2 py-2 px-4"
                  type="button"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="py-4 py-xl-5">
          <div className="container h-100">
            <div
              className="text-white bg-primary border rounded border-0 p-4 py-5"
              style={{
                background: "rgb(0,0,0)"
              }}
            >
              <div className="row h-100">
                <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                  <div>
                    <h1 className="text-uppercase fw-bold text-white mb-3">
                      ALPHA CENTAURI ITINERARY
                    </h1>
                    <p className="mb-4">
                      <strong>Day 1-2: Earth</strong>
                      <br />
                      <strong>
                        Arrive on Earth and spend the first day getting to know
                        your fellow space tourists. On the second day, attend a
                        briefing on the Alpha Centauri system and the mission.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 3-4: Proxima Centauri b</strong>
                      <br />
                      <strong>
                        Travel to Proxima Centauri b, the closest exoplanet to
                        Earth. Spend two days exploring this potentially
                        habitable world, which is roughly the same size as Earth
                        and orbits within the habitable zone of its star. You
                        can observe the planet's geology and study its
                        atmosphere, looking for signs of life.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 5-7: Alpha Centauri Bb</strong>
                      <br />
                      <strong>
                        Head to Alpha Centauri Bb, a super-Earth planet that
                        orbits its star in just 3.2 days. This world is too
                        close to its star to be habitable, but it has fascinated
                        astronomers for years. Spend three days studying the
                        planet's composition and structure, and learn about its
                        possible formation and evolution.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 8-10: Alpha Centauri A</strong>
                      <br />
                      <strong>
                        Travel to Alpha Centauri A, the largest and brightest
                        star in the system, and spend three days studying its
                        properties. Learn about the star's composition,
                        temperature, and magnetic field, and observe its many
                        sunspots and flares.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 11-12: Alpha Centauri B</strong>
                      <br />
                      <strong>
                        Head to Alpha Centauri B, the smaller and cooler star in
                        the system, and spend two days studying its properties.
                        Learn about the star's composition, temperature, and
                        magnetic field, and observe its many sunspots and
                        flares.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 13-14: Alpha Centauri C</strong>
                      <br />
                      <strong>
                        Travel to Alpha Centauri C, a dim red dwarf star that is
                        also known as Proxima Centauri. Spend two days studying
                        this star and its properties, and learn about its flares
                        and other stellar activity.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 15: Return to Earth</strong>
                      <br />
                      <strong>
                        After an amazing tour of the Alpha Centauri system,
                        return to Earth and reflect on your incredible journey.
                      </strong>
                      <br />
                      <strong>Price: $1,000,000</strong>
                    </p>
                    <button
                      className="btn btn-light fs-5 py-2 px-4"
                      type="button"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Alpha;
