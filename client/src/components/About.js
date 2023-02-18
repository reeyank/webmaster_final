import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";

class About extends React.Component {
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
                  <a className="nav-link active" href="index.html">
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
        <header className="bg-dark" />
        <section>
          <div
            className="container bg-dark py-5"
            style={{
              background:
                'url("assets/img/alek-kalinowski-Sj_3Jdr19L4-unsplash.jpg") center / cover no-repeat, var(--bs-black)'
            }}
          >
            <div className="row">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Our Services</p>
                <h3 className="fw-bold">What we can do for you</h3>
              </div>
            </div>
            <div className="py-5 p-lg-5">
              <div
                className="row row-cols-1 row-cols-md-2 mx-auto"
                style={{
                  maxWidth: "900px"
                }}
              >
                <div className="col mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute"
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-battery-charging text-success"
                        >
                          <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
                          <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                          <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z" />
                          <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Training</h5>
                      <p className="text-muted card-text mb-4">
                        Our space tourism company boasts a team of highly
                        certified trainers, with extensive experience in
                        astronautics and spaceflight. Our trainers are committed
                        to ensuring the safety and enjoyment of our guests,
                        providing them with the necessary skills and knowledge
                        to make the most of their space travel experience.
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute"
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-safe2 text-success"
                        >
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h12A1.5 1.5 0 0 1 16 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V14H.5a.5.5 0 0 1 0-1H1V9H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1v-.5zM2.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-12z" />
                          <path d="M5.035 8h1.528c.047-.184.12-.357.214-.516l-1.08-1.08A3.482 3.482 0 0 0 5.035 8zm1.369-2.303 1.08 1.08c.16-.094.332-.167.516-.214V5.035a3.482 3.482 0 0 0-1.596.662zM9 5.035v1.528c.184.047.357.12.516.214l1.08-1.08A3.482 3.482 0 0 0 9 5.035zm2.303 1.369-1.08 1.08c.094.16.167.332.214.516h1.528a3.483 3.483 0 0 0-.662-1.596zM11.965 9h-1.528c-.047.184-.12.357-.214.516l1.08 1.08A3.483 3.483 0 0 0 11.965 9zm-1.369 2.303-1.08-1.08c-.16.094-.332.167-.516.214v1.528a3.483 3.483 0 0 0 1.596-.662zM8 11.965v-1.528a1.989 1.989 0 0 1-.516-.214l-1.08 1.08A3.483 3.483 0 0 0 8 11.965zm-2.303-1.369 1.08-1.08A1.988 1.988 0 0 1 6.563 9H5.035c.085.593.319 1.138.662 1.596zM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Safety</h5>
                      <p className="text-muted card-text mb-4">
                        We are focused on safety and with our cutting-edge
                        technology and rigorous safety protocols, including
                        thorough pre-flight medical examinations and emergency
                        response plans, we can ensure a safe and enjoyable trip
                        for their passengers.
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute"
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-projector text-success"
                        >
                          <path d="M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z" />
                          <path
                            fillRule="evenodd"
                            d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 2 2 0 0 1-2-2V6Zm2-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                          />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Flight</h5>
                      <p className="text-muted card-text mb-4">
                        Looking for a once-in-a-lifetime experience? Our space
                        tourism company offers flights to the edge of space,
                        where you'll experience weightlessness and take in
                        stunning views of the Earth from above. Book now to
                        reserve your seat on our next flight and make history as
                        one of the few to have ever traveled beyond our planet's
                        atmosphere. Don't miss out on this unforgettable
                        adventure!
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute"
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-memory text-success"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-3Zm5 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-3Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"
                          />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Memorabilia</h5>
                      <p className="text-muted card-text mb-4">
                        Our space tourism company offers a wide range of
                        memorabilia to help you relive your out-of-this-world
                        adventure. From t-shirts and hats to patches and pins,
                        our selection has something for everyone. Our
                        high-quality products are designed to last and make the
                        perfect souvenirs to show off your trip to family and
                        friends.
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-5 mt-5"
          style={{
            marginBottom: "-48px"
          }}
        >
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Testimonials</p>
                <h2 className="fw-bold">
                  <strong>What People Say About us</strong>
                </h2>
                <p className="text-muted">
                  No matter the project, our team can handle it. 
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
              <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                  <p className="bg-dark border rounded border-dark p-4">
                    I went on a space tour with this company and it was truly an
                    unforgettable experience. The staff was extremely
                    knowledgeable and made sure that we had a safe and enjoyable
                    trip. The memorabilia selection was impressive and made for
                    the perfect souvenir to remember my trip. I would highly
                    recommend this company to anyone looking to take a trip of a
                    lifetime!
                  </p>
                  <div className="d-flex">
                    <img
                      className="rounded-circle flex-shrink-0 me-3 fit-cover"
                      width={50}
                      height={50}
                      src="assets/img/team/avatar2.jpg"
                    />
                    <div>
                      <p className="fw-bold text-primary mb-0">John Smith</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                  <p className="bg-dark border rounded border-dark p-4">
                    I was hesitant to book a space tour with this company, but
                    I'm so glad I did. From start to finish, the process was
                    seamless and hassle-free. The communication was great, and
                    they made sure that all my questions were answered. The tour
                    itself was amazing and exceeded all my expectations. I would
                    definitely book another trip with them in the future.
                  </p>
                  <div className="d-flex">
                    <img
                      className="rounded-circle flex-shrink-0 me-3 fit-cover"
                      width={50}
                      height={50}
                      src="assets/img/team/avatar4.jpg"
                    />
                    <div>
                      <p className="fw-bold text-primary mb-0">Bob Bing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                  <p className="bg-dark border rounded border-dark p-4">
                    I recently completed the space tourism training program
                    offered by this company, and it was an incredible
                    experience. The instructors were extremely knowledgeable and
                    provided hands-on training that prepared me for my upcoming
                    trip. The program covered everything from safety procedures
                    to the basics of space travel, and I feel confident and
                    excited for my trip. I also purchased some memorabilia from
                    the company and was impressed by the quality and selection.
                    I highly recommend this company for their training and
                    memorabilia."
                  </p>
                  <div className="d-flex">
                    <img
                      className="rounded-circle flex-shrink-0 me-3 fit-cover"
                      width={50}
                      height={50}
                      src="assets/img/team/avatar5.jpg"
                    />
                    <div>
                      <p className="fw-bold text-primary mb-0">Angel Brown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
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
                      <p className="text-muted mb-0">(678) 518-6700</p>
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
      </div>
    );
  }
}

export default About;
