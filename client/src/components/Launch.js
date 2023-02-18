import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/extra.css";
import "../assets/css/styles.min.css";

class Launch extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "var(--bs-black)"}}>
        <nav
          className="navbar navbar-dark navbar-expand-md sticky-top py-3"
          id="mainNav"
          style={{
            background: "rgb(0,0,0)"
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
        <section>
          <div className="container bg-dark py-5 launch">
            <div className="row">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h3 className="fw-bold launch5">Launch and Safety</h3>
                <p>
                  Overview of Safety Measures
                  <br />
                  At Exo Infinity, safety is our top priority. We understand
                  that space tourism can be an exciting yet daunting prospect,
                  which is why we have taken every measure to ensure the safety
                  of our passengers and crew from launch to landing.
                  <br />
                  Our spacecraft are equipped with state-of-the-art technology
                  that undergoes rigorous testing and maintenance to ensure
                  optimal performance. Our team of experienced engineers and
                  astronauts work tirelessly to ensure that every flight is safe
                  and secure.
                  <br />
                  We also follow strict safety protocols throughout every phase
                  of the journey, from launch to landing, to ensure the safety
                  of all onboard. We believe in transparency and encourage our
                  passengers to ask questions and voice their concerns about
                  safety.
                  <br />
                  We believe that our commitment to safety, along with our
                  advanced technology and experienced team, make us a reliable
                  choice for space tourism.
                </p>
              </div>
            </div>
            <div className="py-5 p-lg-5 launch2">
              <div className="row row-cols-1 row-cols-md-2 mx-auto launch6">
                <div className="col-lg-12 mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5 launch3">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-bell text-success"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Launch Procedures</h5>
                      <p className="text-muted card-text mb-4">
                        Our launch procedures are designed to ensure that the
                        spacecraft is ready for takeoff and that all passengers
                        and crew are safe during this critical phase of the
                        journey.
                        <br />
                        Before launch, our engineers conduct a thorough
                        inspection of the spacecraft to ensure that all systems
                        are functioning properly. This includes checks of the
                        propulsion system, life support systems, and
                        communication systems.
                        <br />
                        Our crew then undergoes a series of training sessions to
                        prepare for launch, including emergency procedures and
                        communication protocols. The crew also conducts a final
                        systems check to confirm that all systems are working
                        correctly.
                        <br />
                        Once everything is confirmed to be in order, the
                        spacecraft is loaded with fuel and the countdown begins.
                        Throughout the launch phase, our engineers and mission
                        control team closely monitor the spacecraft to ensure
                        that it is performing as expected.
                        <br />
                        In the event of an emergency during launch, our crew is
                        trained to follow established emergency procedures and
                        protocols to ensure the safety of all onboard.
                        <br />
                        We are committed to the highest levels of safety and
                        work tirelessly to ensure that every launch is a
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5 launch3">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-bezier text-success"
                          style={{
                            borderRadius: "16px"
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                          />
                          <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">In-Flight Safety</h5>
                      <p className="text-muted card-text mb-4">
                        The safety of our passengers and crew is our top
                        priority throughout the entire journey, including during
                        the in-flight phase.
                        <br />
                        Our spacecraft are equipped with a range of safety
                        features to ensure the safety of all onboard. These
                        features include redundant life support systems,
                        state-of-the-art communication systems, and safety
                        harnesses for passengers.
                        <br />
                        During the in-flight phase, our crew monitors the
                        spacecraft and its systems continuously to ensure that
                        everything is functioning correctly. They are trained to
                        respond to any emergency that may arise and to
                        communicate with mission control if necessary.
                        <br />
                        Passengers are also briefed on safety procedures before
                        the flight, including emergency protocols and how to use
                        safety equipment such as oxygen masks and safety
                        harnesses.
                        <br />
                        We also conduct extensive risk assessments before every
                        flight to ensure that any potential safety concerns are
                        identified and mitigated. This includes identifying and
                        addressing any potential hazards related to radiation
                        exposure, microgravity, or other space-related risks.
                        <br />
                        We are committed to the safety of all our passengers and
                        crew, and we take every measure to ensure that every
                        in-flight experience is safe and secure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5 launch3">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-pin-angle text-success"
                          style={{
                            borderRadius: "16px"
                          }}
                        >
                          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Landing Procedures</h5>
                      <p className="text-muted card-text mb-4">
                        Our landing procedures are designed to ensure that the
                        spacecraft lands safely and that all passengers and crew
                        remain safe during this critical phase of the journey.
                        <br />
                        Before landing, our crew performs a series of systems
                        checks to ensure that all systems are functioning
                        correctly. They also communicate with mission control to
                        confirm that the landing site is clear and that weather
                        conditions are suitable for landing.
                        <br />
                        As the spacecraft approaches the landing site, our crew
                        monitors its speed, altitude, and trajectory to ensure
                        that it is on course for a safe landing. They are also
                        trained to respond to any emergency that may arise
                        during the landing phase.
                        <br />
                        Once the spacecraft touches down, our crew ensures that
                        all systems are functioning correctly and that all
                        passengers and crew are safe. They also conduct a
                        thorough inspection of the spacecraft to confirm that it
                        is in good condition for the return journey.
                        <br />
                        In the event of an emergency during landing, our crew is
                        trained to follow established emergency procedures and
                        protocols to ensure the safety of all onboard.
                        <br />
                        We take every measure to ensure that every landing is
                        safe and secure, and we are committed to the highest
                        levels of safety for all our passengers and crew.
                        <br />
                        Before stepping on the surface of the planet, passengers
                        are required to wear one of our specialized space suits.
                      </p>
                      <a className="btn btn-primary" type="button" href="/suits">
                        View Space Suits
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5 launch3">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-chat-quote text-success"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">
                        Emergency Procedures
                      </h5>
                      <p className="text-muted card-text mb-4">
                        While we take every precaution to ensure that our space
                        tourism flights are safe and secure, we understand that
                        emergencies can happen. That's why we have established
                        emergency procedures to ensure the safety of all
                        passengers and crew in the event of an emergency.
                        <br />
                        Our crew undergoes extensive emergency training to
                        ensure that they are prepared for any situation that may
                        arise. They are trained to respond to a range of
                        emergencies, including loss of cabin pressure, fire, and
                        malfunctioning equipment.
                        <br />
                        In the event of an emergency, our crew follows
                        established protocols and procedures to ensure the
                        safety of all onboard. This includes communicating with
                        mission control, assessing the situation, and taking
                        necessary action to address the emergency.
                        <br />
                        We also have emergency equipment onboard, including fire
                        extinguishers and oxygen masks, to ensure that our crew
                        is able to respond quickly to any emergency.
                        <br />
                        Our spacecraft are designed to withstand a range of
                        emergency situations, and our crew is trained to respond
                        to any situation that may arise. We take every measure
                        to ensure the safety of all passengers and crew, and we
                        are committed to the highest levels of safety and
                        preparedness.
                      </p>
                    </div>
                    <div className="card-body px-4 py-5 px-md-5 launch7">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-chat-quote text-success"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">
                        Crew Training and Qualifications
                      </h5>
                      <p className="text-muted card-text mb-4">
                        Our crew members are highly trained and qualified to
                        ensure the safety of all passengers and the success of
                        every space tourism flight.
                        <br />
                        All crew members undergo extensive training before they
                        are cleared for spaceflight. This training includes
                        theoretical coursework as well as practical exercises,
                        such as simulated flights and emergency scenarios.
                        <br />
                        Our crew members are also required to have extensive
                        experience in their fields. This includes experience in
                        aerospace engineering, piloting, and emergency response.
                        <br />
                        In addition, our crew members undergo rigorous medical
                        and psychological testing to ensure that they are
                        physically and mentally fit for spaceflight. This
                        includes testing for conditions that may be exacerbated
                        by spaceflight, such as motion sickness or
                        claustrophobia.
                        <br />
                        We are committed to ensuring that our crew members have
                        the highest levels of training and qualifications to
                        ensure the safety and success of every space tourism
                        flight.
                      </p>
                    </div>
                    <div className="card-body px-4 py-5 px-md-5 launch7">
                      <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon launch4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-chat-quote text-success"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">
                        Maintenance and Quality Assurance
                      </h5>
                      <p className="text-muted card-text mb-4">
                        Our spacecraft undergoes regular maintenance and quality
                        assurance checks to ensure that they are in peak
                        condition for every space tourism flight.
                        <br />
                        Our maintenance program includes routine inspections of
                        all systems and components, as well as preventative
                        maintenance to address potential issues before they
                        become a problem. We follow strict maintenance schedules
                        and procedures to ensure that our spacecraft are always
                        in optimal condition.
                        <br />
                        In addition, we have a rigorous quality assurance
                        program to ensure that every aspect of our spacecraft
                        and operations meets the highest standards of safety and
                        quality. This includes regular inspections and audits of
                        our equipment, processes, and personnel.
                        <br />
                        We work closely with leading experts in the aerospace
                        industry to ensure that our spacecraft are designed and
                        built to the highest standards. We also collaborate with
                        these experts to identify and implement new technologies
                        and best practices to improve the safety and efficiency
                        of our space tourism operations.
                        <br />
                        We are committed to maintaining the highest levels of
                        safety and quality for every space tourism flight, and
                        we take every measure to ensure that our spacecraft are
                        in peak condition for every journey.
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

export default Launch;
