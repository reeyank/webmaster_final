import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class Sattelite extends React.Component {
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
        <section className="py-4 py-xl-5">
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 col-lg-12">
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <h2 className="text-uppercase fw-bold mb-3">Satellite Tour</h2>
                <p className="mb-4">
                  Embark on an unforgettable journey with our satellite tour!
                  Our space tourism company offers a unique opportunity to
                  explore and experience the wonders of space like never before.
                  You will have the chance to witness stunning views of Earth
                  and the surrounding universe from the comfort of our specially
                  designed satellite. Our experienced staff will guide you
                  through the tour, providing you with insights and knowledge
                  about space and its mysteries. This is an adventure you won't
                  want to miss, so book your satellite tour today and experience
                  the thrill of space travel!
                </p>
                <a
                  className="btn btn-primary fs-5 me-2 py-2 px-4"
                  type="button"
                  href="/contact"
                >
                  Contact Us To Book Now
                </a>
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
                      Solar System ITINERARY
                    </h1>
                    <p className="mb-4">
                      <strong>Day 1-2: Earth</strong>
                      <br />
                      <strong>
                        Arrive on Earth and spend the first day settling in and
                        getting to know your fellow space tourists. On the
                        second day, take a tour of Earth's major landmarks and
                        natural wonders, such as the Great Wall of China, the
                        Grand Canyon, and the Great Barrier Reef.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 3-4: Moon</strong>
                      <br />
                      <strong>
                        Travel to the Moon, Earth's natural satellite, and spend
                        two days exploring its unique environment. Visit the
                        landing sites of the Apollo missions, observe the moon's
                        craters and mountains, and learn about its geology and
                        history.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 5-7: Titan</strong>
                      <br />
                      <strong>
                        Head to Titan, the largest moon of Saturn, and spend
                        three days exploring its unique environment. Titan has a
                        dense atmosphere and methane lakes, and its surface is
                        covered in a layer of organic material. You can visit
                        the Huygens probe, which landed on Titan in 2005, and
                        explore the moon's diverse geography.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 8-10: Europa</strong>
                      <br />
                      <strong>
                        Travel to Europa, one of Jupiter's four largest moons,
                        and spend three days exploring its icy surface. Europa
                        is thought to have a subsurface ocean, which may be one
                        of the most promising locations in the solar system for
                        finding alien life. You can explore the moon's many
                        cracks and ridges, and observe its geysers and plumes.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 11-12: Enceladus</strong>
                      <br />
                      <strong>
                        Head to Enceladus, one of Saturn's icy moons, and spend
                        two days exploring its subsurface ocean. Enceladus is
                        thought to have hydrothermal vents on its ocean floor,
                        which may provide a habitat for alien life. You can
                        observe the moon's geysers and plumes, and study its
                        ocean chemistry and habitability.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 13-14: Io</strong>
                      <br />
                      <strong>
                        Travel to Io, one of Jupiter's four largest moons, and
                        spend two days exploring its volcanic landscape. Io is
                        the most volcanically active body in the solar system,
                        with over 400 active volcanoes. You can observe the
                        moon's colorful lava flows and ash plumes, and study the
                        geology and chemistry of its surface.
                      </strong>
                      <br />
                      <br />
                      <strong>Day 15: Return to Earth</strong>
                      <br />
                      <strong>
                        After an incredible tour of the moon and some of the
                        most interesting moons in the solar system, return to
                        Earth and reflect on your amazing journey.
                      </strong>
                      <br />
                      <br />
                      <strong>Price: $200,000</strong>
                    </p>
                    <a
                  className="btn btn-light fs-5 me-2 py-2 px-4"
                  type="button"
                  href="/contact"
                >
                  Contact Us To Book Now
                </a>
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

export default Sattelite;
