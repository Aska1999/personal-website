import { Container, Row, Col, Card } from "react-bootstrap"
import { FaLaptop, FaPalette, FaUsers, FaProjectDiagram, FaBriefcase } from "react-icons/fa"
import "./Experience.css"
import "./shared/SectionTitle.css"

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Office Software",
      description: "Familiar with Microsoft Word, Excel, PowerPoint",
      icon: <FaLaptop />,
    },
    {
      id: 2,
      title: "Design",
      description: "Creative design using Canva and Photoshop",
      icon: <FaPalette />,
    },
    {
      id: 3,
      title: "Academic Projects",
      description: "Experienced in organizing university assignments and group presentations",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Actively involved in student projects and teamwork activities",
      icon: <FaProjectDiagram />,
    },
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section-title" data-aos="fade-up">
            <FaBriefcase className="section-icon" />
            Experience
          </h2>
        </Col>
      </Row>
      <Row className="g-4">
        {experiences.map((exp, index) => (
          <Col md={6} key={exp.id}>
            <Card className="experience-card h-100" data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card.Body>
                <div className="experience-icon">{exp.icon}</div>
                <Card.Title>{exp.title}</Card.Title>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Experience
