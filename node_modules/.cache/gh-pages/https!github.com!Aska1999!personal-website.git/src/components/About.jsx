import { Container, Row, Col } from "react-bootstrap"
import "./About.css"
import profileImage from "../assets/2.jpeg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
          <div className="profile-img-container">
            <img src={profileImage} alt="Profile" className="profile-img" />


          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="about-content">
            <h1 className="section-title">Fathima Aska</h1>
            <h3 className="section-subtitle">Undergraduate, Applied Science Student</h3>
            <div className="about-text">
              <p>Applied Science student at Rajarata University of Sri Lanka.</p>
              <p>I consider myself a responsible and orderly person.</p>
              <p>I am looking forward to my first work experience.</p>
            </div>
            {/* Social Icons */}
            <div className="social-icons1">
              <a href="https://www.facebook.com/share/1BDamtXtgw/" className="icon"><FaFacebook /></a>
              <a href="https://www.linkedin.com/in/fathima-aska-75039334a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icon"><FaLinkedin /></a>
              <a href="https://www.instagram.com/" className="icon"><FaInstagram /></a>
            </div>
            <div className="mt-4">
              <a href="cvaska.pdf" download>
                <button className="custom-btn">Download CV</button>
              </a>

            </div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
