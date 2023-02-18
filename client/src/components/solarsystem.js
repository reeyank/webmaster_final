import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class SolarSystem extends React.Component {
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
                  <img src="assets/img/solar-system-g6863b29e7_1920.jpg" />
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
                  Solar System tour
                </h2>
                <p className="mb-4">
                  The solar system tour is an incredible adventure through our
                  neighborhood in space, showcasing the planets, moons, and
                  asteroids. Learn about the history and evolution of our solar
                  system, from its formation to the latest discoveries. It's an
                  unforgettable voyage that expands your understanding of the
                  universe.
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
                      Solar System ITINERARY
                    </h1>
                    <p className="mb-4">
                      <strong>Day 1-2: Earth</strong>
                      <br />
                      Arrive on Earth and spend the first day settling in and
                      getting to know your fellow space tourists. On the second
                      day, take a tour of Earth's major landmarks and natural
                      wonders, such as the Great Wall of China, the Grand
                      Canyon, and the Great Barrier Reef.
                      <br />
                      <br />
                      <strong>Day 3-4: Venus</strong>
                      <br />
                      Travel to Venus, the hottest planet in the solar system,
                      and spend two days exploring its hellish surface. Visit
                      the Venusian volcanoes, some of which are still active,
                      and the vast plains of hardened lava. You can also observe
                      the planet's thick, toxic atmosphere from a safe distance.
                      <br />
                      <br />
                      <strong>Day 5-7: Mars</strong>
                      <br />
                      Travel to Mars and spend three days exploring the Red
                      Planet. Visit the Valles Marineris, the largest canyon in
                      the solar system, and the Olympus Mons, the largest
                      volcano in the solar system. You can also visit the
                      Curiosity Rover and the InSight lander, which are
                      currently exploring Mars.
                      <br />
                      <br />
                      <strong>Day 8-10: Jupiter</strong>
                      <br />
                      Head to Jupiter and spend three days exploring this gas
                      giant. Take a tour of the planet's four largest moons: Io,
                      Europa, Ganymede, and Callisto. You can also see the Great
                      Red Spot, a massive storm that has been raging on Jupiter
                      for centuries.
                      <br />
                      <br />
                      <strong>Day 11-13: Saturn</strong>
                      <br />
                      Travel to Saturn and spend three days exploring this
                      ringed planet. Visit the Cassini-Huygens probe, which
                      explored Saturn and its moons for over a decade. You can
                      also take a tour of the planet's rings and visit the
                      largest moon, Titan, which has a thick atmosphere and
                      lakes of liquid methane.
                      <br />
                      <br />
                      <strong>Day 14-16: Pluto</strong>
                      <br />
                      Finally, head to Pluto and spend three days exploring this
                      dwarf planet at the edge of the solar system. Visit the
                      New Horizons probe, which flew by Pluto in 2015 and sent
                      back detailed images of its surface. You can also see the
                      other icy objects in the Kuiper Belt, a region of the
                      solar system beyond Neptune.
                      <br />
                      <br />
                      <strong>Day 17: Return to Earth</strong>
                      <br />
                      After an amazing solar system tour, return to Earth and
                      reflect on your incredible journey.
                      <br />
                      <br />
                      <strong>Price: $300,000</strong>
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

export default SolarSystem;
