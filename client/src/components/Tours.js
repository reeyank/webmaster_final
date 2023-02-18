import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class Tours extends React.Component {
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
                  <a className="nav-link active" href="services.html">
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
        <section
          className="py-5"
          style={{
            background:
              'url("assets/img/DALLE_2023-02-17_14.42.34_-_add_more_space_over_here.png") center / cover no-repeat'
          }}
        >
          <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Our Services</p>
                <h3 className="fw-bold">What we can do for you</h3>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{
                maxWidth: "900px"
              }}
            >
              <div className="col mb-5">
                <img
                  className="rounded img-fluid shadow"
                  src="assets/img/products/istockphoto-482954331-612x612.jpg"
                />
              </div>
              <div
                className="col d-md-flex align-items-md-end align-items-lg-center mb-5"
                style={{
                  background: "#000000",
                  borderRadius: "16px"
                }}
              >
                <div
                  style={{
                    height: "324px"
                  }}
                >
                  <h5
                    className="fw-bold"
                    style={{
                      paddingTop: "10px"
                    }}
                  >
                    Solar System Tour
                  </h5>
                  <p
                    className="text-muted"
                    style={{
                      color: "var(--bs-gray-100)",
                      fontSize: "12px"
                    }}
                  >
                    The solar system tour is an incredible adventure that takes
                    you on a journey through the vast expanse of our own solar
                    system. From the rocky, volcanic landscape of Venus to the
                    towering ice cliffs of Uranus' moon Miranda, you'll
                    experience the awe-inspiring beauty and diversity of the
                    planets, moons, and asteroids that make up our neighborhood
                    in space. Along the way, you'll learn about the history and
                    evolution of our solar system, from its formation billions
                    of years ago to the latest discoveries being made by NASA
                    and other space agencies today. Whether you're a seasoned
                    astronomy enthusiast or simply curious about the wonders of
                    the cosmos, the solar system tour is an unforgettable voyage
                    that will expand your understanding of our place in the
                    universe.
                  </p>
                  <button className="btn btn-primary shadow" type="button">
                    Book now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{
                maxWidth: "900px"
              }}
            >
              <div className="col order-md-last mb-5">
                <img
                  className="rounded img-fluid shadow"
                  src="assets/img/products/EmvV4u1UcAAnvjg.jpeg"
                />
              </div>
              <div
                className="col d-md-flex align-items-md-end align-items-lg-center mb-5"
                style={{
                  background: "#000000",
                  borderRadius: "16px"
                }}
              >
                <div>
                  <h5 className="fw-bold">Satellite Tour</h5>
                  <p className="text-muted mb-4">
                    A satellite tour is a fascinating experience that allows you
                    to explore and appreciate the Earth from a unique
                    perspective. During a satellite tour, you will board a
                    specially designed aircraft that flies at a high altitude,
                    allowing you to observe the Earth's surface and features
                    from a bird's-eye view. You will be able to witness the
                    curvature of the Earth, view landscapes and natural wonders
                    from a different perspective, and gain a deeper
                    understanding of the planet's geography and climate. This
                    tour is perfect for those who are interested in science,
                    geography, and nature, as it provides a unique and
                    educational experience that will leave a lasting impression.
                  </p>
                  <button className="btn btn-primary shadow" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{
                maxWidth: "900px"
              }}
            >
              <div className="col mb-5">
                <img
                  className="rounded img-fluid shadow"
                  src="assets/img/products/planet-Artist-impression-surface-mass-b-Proxima.webp"
                  width={426}
                  height={277}
                />
              </div>
              <div
                className="col d-md-flex align-items-md-end align-items-lg-center mb-5"
                style={{
                  background: "#000000",
                  borderRadius: "16px",
                  height: "312.734px"
                }}
              >
                <div>
                  <h5 className="fw-bold">Centauri Tour</h5>
                  <p
                    className="text-muted mb-4"
                    style={{
                      fontSize: "12px"
                    }}
                  >
                    The Centauri Tour is a fictional space tourism experience
                    that takes travelers on a journey through the Alpha Centauri
                    star system, which is the closest star system to our own.
                    Over the course of the tour, travelers will visit the three
                    stars in the system, as well as a number of exoplanets and
                    moons, including the potentially habitable Proxima b. Along
                    the way, travelers will learn about the unique features of
                    each celestial body, as well as the history and science
                    behind the discoveries made about the Alpha Centauri system.
                    This tour promises to be an unforgettable experience for
                    space enthusiasts and anyone who is fascinated by the
                    mysteries of the cosmos.
                  </p>
                  <button className="btn btn-primary shadow" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Tours;
