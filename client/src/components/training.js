import React from "react";

class training extends React.Component {
  render() {
    return (
      <div>
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
        <section
          className="py-4 py-xl-5"
          style={{
            backgroundAttachment: "fixed",
            background:
              'url("assets/img/kenny-eliason-OjxsirfohHU-unsplash.jpg") center / cover no-repeat'
          }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                <div>
                  <h2 className="text-uppercase fw-bold mb-3">
                    training program
                  </h2>
                  <p className="mb-4">
                    This training program has been designed to prepare you for
                    your upcoming space travel tour. The program consists of
                    several modules covering various aspects of space travel.
                    Each module includes a set of training activities that you
                    will need to complete before moving on to the next one.
                    <br />
                    <br />
                    Module 1: Physical Training
                    <br />
                    In this module, you will focus on preparing your body for
                    the physical challenges of space travel. The training
                    activities will include cardiovascular and strength training
                    exercises, as well as activities to improve your
                    flexibility, balance, and coordination.
                    <br />
                    <br />
                    Module 2: Medical Training
                    <br />
                    In this module, you will learn about the medical risks
                    associated with space travel and how to manage them. The
                    training activities will include emergency medical
                    procedures, the use of medical equipment, and first aid.
                    <br />
                    <br />
                    Module 3: Psychological Training
                    <br />
                    In this module, you will learn about the psychological
                    challenges of space travel and how to manage them. The
                    training activities will include stress management,
                    relaxation techniques, and team building exercises.
                    <br />
                    Module 4: Mission Training
                    <br />
                    In this module, you will learn about the mission objectives,
                    tasks, and timelines of the space travel tour. The training
                    activities will include simulations of space missions,
                    communication protocols, and emergency procedures.
                    <br />
                    <br />
                    Module 5: Spacecraft Familiarization
                    <br />
                    In this module, you will learn about the spacecraft that you
                    will be traveling in, including the equipment and controls.
                    The training activities will include virtual simulations of
                    the spacecraft, familiarization with the navigation system,
                    and hands-on training with the equipment.
                    <br />
                    <br />
                    Module 6: Zero-Gravity Training
                    <br />
                    In this module, you will learn about the effects of
                    zero-gravity on the human body and how to adapt to this
                    environment. The training activities will include
                    simulations of zero-gravity, mobility exercises, and
                    learning how to use equipment in a zero-gravity environment.
                    <br />
                    <br />
                    Module 7: Final Assessment
                    <br />
                    In this module, you will be assessed on the knowledge and
                    skills you have acquired during the training program. The
                    assessment will include a physical fitness test, a medical
                    knowledge quiz, and a simulated space mission.
                    <br />
                    <br />
                    Upon completion of this training program, you will have the
                    necessary knowledge and skills to participate in the space
                    travel tour. We wish you the best of luck and an exciting
                    journey through the cosmos!
                  </p>
                </div>
              </div>
            </div>
            <div className="row h-100">
              <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                <div>
                  <h2 className="text-uppercase fw-bold mb-3">
                    Recovery program
                  </h2>
                  <p className="mb-4">
                    Medical examination: The first step in the recovery program
                    is a thorough medical examination by a team of doctors and
                    health professionals. This will ensure that any health
                    issues arising from the space travel are identified and
                    addressed promptly.
                    <br />
                    <br />
                    Rest and relaxation: After the medical examination, the
                    clients should be advised to take adequate rest and
                    relaxation for a few days. The body needs time to adjust to
                    the gravity and atmospheric conditions on Earth after being
                    in space for a long time.
                    <br />
                    <br />
                    Physical therapy: Clients may experience some muscle
                    weakness, joint stiffness, and other physical symptoms after
                    returning from space travel. To overcome these issues, a
                    personalized physical therapy program should be developed to
                    help clients regain their strength and mobility.
                    <br />
                    <br />
                    Nutritional counseling: A proper diet is crucial for the
                    body to recover from the stresses of space travel.
                    Nutritional counseling can help clients understand the
                    importance of a balanced diet and provide guidance on what
                    foods they should be eating to promote recovery.
                    <br />
                    <br />
                    Mental health counseling: Space travel can be a highly
                    stressful experience, and clients may need some counseling
                    to help them deal with any mental health issues that arise.
                    This may include counseling for anxiety, depression, or
                    other mental health issues.
                    <br />
                    <br />
                    Follow-up care: Once the initial recovery period is over,
                    clients should continue to receive follow-up care and
                    monitoring to ensure that they are fully recovered and to
                    address any ongoing health issues.
                    <br />
                    <br />
                    Post-tour debriefing: Finally, a post-tour debriefing
                    session should be conducted with the clients to get their
                    feedback on their space travel experience. This feedback can
                    be used to improve the space travel tour program and provide
                    a better experience for future clients.
                  </p>
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

export default training;
