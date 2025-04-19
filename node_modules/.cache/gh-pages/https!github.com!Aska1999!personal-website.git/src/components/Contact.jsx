"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaAddressBook } from "react-icons/fa"
import "./Contact.css"
import "./shared/SectionTitle.css"

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section-title" data-aos="fade-up">
            <FaAddressBook className="section-icon" />
            Contact Me
          </h2>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={5} data-aos="fade-right">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to contact me for any work or suggestions.</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>0764693189</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>fathimaaska761@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>No. 37/3, Muslim Road, Welipenna</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={7} data-aos="fade-left">
          <Form onSubmit={handleSubmit} className="contact-form">
            <Row>
              <Col sm={6} className="mb-3">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col sm={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="custom-btn">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
