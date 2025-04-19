import { Container, Row, Col } from "react-bootstrap"
import { FaLinkedin,FaMapMarkerAlt , FaGithub, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-grid">
          {/* Profile Section */}
          <Col md={3} className="footer-section">
            <h3>Profile</h3>
            <h4>Fathima Aska</h4>
            <p className="profile-text">
            An enthusiastic Applied Science undergraduate with a passion for learning and creativity. Responsible, organized, and eager to gain real-world experience while contributing to meaningful projects.

</p>
          </Col>

          {/* Explore Section */}
          <Col md={3} className="footer-section">
            <h3>Explore</h3>
            <ul className="explore-links">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md={3} className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info1">
              <p><FaPhone /> +94 0764693189</p>
              <p> <FaEnvelope/>fathimaaska761@gmail.com</p>
              <p> <FaMapMarkerAlt/> No. 37/3, Muslim Road, Welipenna
              </p>
            </div>
          </Col>

          {/* Social Media Section */}
          <Col md={3} className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1BDamtXtgw/" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/fathima-aska-75039334a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
