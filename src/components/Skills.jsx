import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import {
  FaComments,
  FaUsers,
  FaMicrophone,
  FaHandshake,
  FaPaintBrush,
  FaChalkboardTeacher,
  FaLightbulb,
  FaClock,
  FaDesktop,
  FaLanguage,
  FaTools
} from "react-icons/fa"
import "./Skills.css"
import "./shared/SectionTitle.css"

function Skills() {
  const skills = [
    { id: 1, name: "Communication", level: 85, icon: <FaComments /> },
    { id: 2, name: "Leadership", level: 80, icon: <FaUsers /> },
    { id: 3, name: "Public Speaking", level: 75, icon: <FaMicrophone /> },
    { id: 4, name: "Teamwork", level: 90, icon: <FaHandshake /> },
    { id: 5, name: "Graphic Design", level: 70, icon: <FaPaintBrush /> },
    { id: 6, name: "Teaching Skills", level: 80, icon: <FaChalkboardTeacher /> },
    { id: 7, name: "Creative Thinking", level: 85, icon: <FaLightbulb /> },
    { id: 8, name: "Time Management", level: 75, icon: <FaClock /> },
    { id: 9, name: "Office Software", level: 80, icon: <FaDesktop /> },
    { id: 10, name: "Languages", level: 85, icon: <FaLanguage /> },
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section-title" data-aos="fade-up">
            <FaTools className="section-icon" />
            Skills
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="mb-4" data-aos="fade-right">
          <div className="skills-list">
            {skills.slice(0, 5).map((skill, index) => (
              <div className="skill-item" key={skill.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="skill-info">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
                <ProgressBar now={skill.level} variant="custom" />
              </div>
            ))}
          </div>
        </Col>
        <Col lg={6} className="mb-4" data-aos="fade-left">
          <div className="skills-list">
            {skills.slice(5, 10).map((skill, index) => (
              <div className="skill-item" key={skill.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="skill-info">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
                <ProgressBar now={skill.level} variant="custom" />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col data-aos="fade-up">
          <div className="languages-container">
            <h3 className="mb-3">Languages</h3>
            <div className="languages">
              <span className="language-badge">English</span>
              <span className="language-badge">Sinhala</span>
              <span className="language-badge">Tamil</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
