import { Container, Row, Col } from "react-bootstrap"
import { FaGraduationCap, FaBook, FaUniversity } from "react-icons/fa"
import "./Education.css"
import "./shared/SectionTitle.css"

function Education() {
  const educationList = [
    {
      id: 1,
      institution: "Rajarata University of Sri Lanka",
      degree: "Bachelor of Applied Science",
      period: "2020–2025",
      icon: <FaUniversity />,
    },
    {
      id: 2,
      institution: "Aquinas College",
      degree: "Diploma in English",
      period: "2019–2020",
      icon: <FaBook />,
    },
    {
      id: 3,
      institution: "Orian International Campus",
      degree: "Computer Systems and Hardware",
      period: "2024",
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      institution: "Ananda Sastralaya, Matugama",
      degree: "Advanced Level Passed – Maths Stream",
      period: "2019",
      icon: <FaGraduationCap />,
    },
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section-title" data-aos="fade-up">
            <FaGraduationCap className="section-icon" />
            Education
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="education-timeline">
            {educationList.map((item, index) => (
              <div
                className="education-item"
                key={item.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="education-icon">{item.icon}</div>
                <div className="education-content">
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                  <span className="period">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Education
