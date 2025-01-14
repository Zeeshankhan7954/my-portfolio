import { useEffect, useRef, useState } from "react";
import ContactUs from "./components/ContactUs";
import Logo from "./assets/img/logo.png";

function App() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // nav-links to active as you scroll through sections
    window.addEventListener("scroll", () => {
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section.offsetTop <= window.pageYOffset &&
          section.offsetTop + section.offsetHeight > window.pageYOffset
        ) {
          link.style.color = "#FFE06F";
        } else {
          link.style.color = "";
        }
      });
    });

    // change nav-bar color on scroll
  });

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const words = ["Web Developer", "Front End Developer", "Content Writer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[i];
      if (isDeleting) {
        document.getElementById("typewriter").textContent =
          currentWord.substring(0, j - 1);
        j--;
        if (j == 0) {
          isDeleting = false;
          i++;
          if (i == words.length) {
            i = 0;
          }
        }
      } else {
        document.getElementById("typewriter").textContent =
          currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 150);
    }

    type();
  }, []);

  return (
    <>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <div
        id="navigation"
        className="fixed-top navbar-light bg-faded site-navigation"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="site-logo">
                <a href="index.html">
                  <img src={Logo} alt="Logo image" />
                </a>
              </div>
            </div>

            <div className="col-lg-7 col-md-9 col-sm-8">
              <div className="header_right">
                <nav id="main-menu" className="ms-auto">
                  <ul>
                    <li>
                      <a className="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#service">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#portfolio">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
                <div id="mobile_menu">
                  <div style={{backgroundColor:"#transparent"}} className="slicknav_menu bg-transparent">
                    <a
                      href="#"
                      aria-haspopup="true"
                      role="button"
                      tabIndex="0"
                      className="slicknav_btn slicknav_collapsed"
                      style={{ outline: "none" }}
                      onClick={toggleNav}
                    >
                      <span className="slicknav_menutxt"></span>
                      <span className="slicknav_icon slicknav_no-text">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    {openNav && (
                      <nav
                        className="slicknav_nav slicknav_hidden"
                        aria-hidden="true"
                        role="menu"
                      >
                        <ul>
                          <li>
                            <a
                              className="nav-link"
                              href="#home"
                              role="menuitem"
                            >
                              Home
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              href="#about"
                              role="menuitem"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              href="#service"
                              role="menuitem"
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              href="#portfolio"
                              role="menuitem"
                            >
                              Projects
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              href="#blog"
                              role="menuitem"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-link"
                              href="#contact"
                              role="menuitem"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-8">
              <div className="call_to_action">
                <a className="btn_all" href="#contact">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="home_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="about_me_content">
                <h4>- I Am ZEESHAN</h4>
                <h1 className="cd-headline clip">
                  <span className="cd-words-wrapper">
                    <b id="typewriter" className="is-visible"></b>
                  </span>
                </h1>
              </div>
              {/* <div className="about_btns">
			          <a className="video-play" href="https://www.youtube.com/watch?v=RXv_uIN6e-Y">
			           <i className="fa fa-play"></i> <span className="video-title">Video Tour</span>
			          </a>
		          </div> */}
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="hero_img">
                <img
                  src="./src/assets/img/preview.png"
                  height={"300px"}
                  width={"400px"}
                  className="img-fluid"
                  alt="profile-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pa_marquee">
        <div id="supermarquee"></div>
      </div>

      <section id="about" className="about_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="about_img">
                <img
                  src="./src/assets/img/4925142_c0ab.jpg"
                  className="img-fluid"
                  alt="profile-picture"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="about_info">
                <h4>About Me</h4>
                <h3>1+ Years of experience.</h3>
                <p>
                  I am a skilled web developer proficient in HTML, CSS, and
                  JavaScript, with expertise in React for building modern,
                  interactive user interfaces. Passionate about creating
                  responsive and user-friendly web applications.{" "}
                </p>
                <div className="basic-info">
                  <div className="single-basic-info">
                    <p>
                      Email: <br />
                      <span>khanzeeshan7954@gmail.com</span>
                    </p>
                  </div>
                  <div className="single-basic-info ml-7 text-center">
                    <p>
                      Phone: <br />
                      <span>03164630744</span>
                    </p>
                  </div>
                  <div className="single-basic-info">
                    <p>
                      Nationality: <br />
                      <span>Pakistan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="service_area sa_bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>What I Offer</h1>
            <p></p>
          </div>
          <div className="row">
            {/* Services list - repeat as necessary */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp service"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <div className="service_icon">
                  <i className="ti-desktop"></i>
                </div>
                <h4>Fully Responsive</h4>
                <p>
                  I create responsive designs that ensure websites adapt
                  seamlessly across various devices, delivering an optimal user
                  experience.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp service"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <div className="service_icon">
                  <i className="ti-bar-chart"></i>
                </div>
                <h4>Mordern Design</h4>
                <p>
                  I create modern designs that ensure websites adapt seamlessly
                  across various devices, delivering an optimal user experience.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp service"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <div className="service_icon">
                  <i className="ti-html5"></i>
                </div>
                <h4>Html5/Css3</h4>
                <p>
                  I work with HTML5 and CSS3 to build modern, structured, and
                  visually appealing web pages.
                </p>
              </div>
            </div>
            {/* Additional service items go here */}
          </div>
        </div>
      </section>

      <section className="counter_feature section-padding">
        <div className="container">
          <div className="row text-center">
            {/* Counter items */}
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="counter">
                <div className="single_counter">
                  <h2 className="timer">25</h2>
                </div>
                <p>Websites Done</p>
              </div>
            </div>
            {/* Additional counter items */}
          </div>
        </div>
      </section>

      <div className="partner-logo section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="partner_title">
                <h3>Trusted Company I work Around The World!</h3>
              </div>
              <div className="partner">
                <a href="#">
                  <img src="./src/assets/img/brands/1.svg" alt="NO image" />
                </a>
                {/* Additional partner logos */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="portfolio" className="portfolio_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>The projects</h1>
            <p></p>
          </div>
          <div className="row portfolio_item">
            {/* Portfolio items */}
            <div
              className="col-xs-12 col-sm-12 col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="single_portfolio_design">
                <div className="port_img">
                  <img
                    src="./src/assets/img/portfolio/1.jpg"
                    className="img-fluid"
                    alt="Work Image"
                  />
                </div>
                <div className="port_content">
                  <p>Agency work</p>
                  <h2>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#projectModal"
                    >
                      POS
                    </a>
                  </h2>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    className="plus_btn"
                  >
                    <span className="ti-plus"></span>
                  </a>
                </div>
              </div>
            </div>
            {/* Additional portfolio items */}
          </div>
          {/* Modals */}
          <div tabIndex="0" className="modal fade" id="projectModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Project Overview</h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src="./src/assets/img/portfolio/1.jpg"
                    className="img-fluid"
                    alt="NO image"
                  />
                  <p>
                    POS (Point of Sale) website streamlines sales transactions,
                    inventory management, and customer interactions,
                    user-friendly interface for managing operations online.
                  </p>
                  <ul className="list-unstyled project-list">
                    <li>
                      <label>Client: </label>Online Market
                    </li>
                    <li>
                      <label>Category:</label>Web Design
                    </li>
                    <li>
                      <label>Date:</label>19 October 2024
                    </li>
                    <li>
                      <label>Project Url:</label>{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Additional modals */}
        </div>
      </section>

      <section id="features" className="features section-padding">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h1>My Skills</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="./src/assets/img/skills.png"
                className="img-fluid"
                alt="Skills"
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                {[
                  { title: "Web Design", percent: "70%", delay: "200" },
                  { title: "SEO", percent: "75%", delay: "300" },
                  { title: "Web Development", percent: "70%", delay: "400" },
                  { title: "Content writer", percent: "80%", delay: "500" },
                  { title: "Video Editing", percent: "65%", delay: "600" },
                  { title: "Programming", percent: "75%", delay: "700" },
                ].map((skill, index) => (
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={skill.delay}
                    key={index}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>
                        {skill.title} <span>{skill.percent}</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact_us section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>Get In Touch</h1>
            <p>
              you can message me directly from here for any inquiries or
              communication.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset="0"
            >
              <div className="contact_img">
                <img
                  src="./src/assets/img/contact.png"
                  className="img-fluid"
                  alt="Contact"
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="contact">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
