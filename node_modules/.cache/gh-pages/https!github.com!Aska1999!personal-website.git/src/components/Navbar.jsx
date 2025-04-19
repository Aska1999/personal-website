"use client"

import { useState, useEffect } from "react"
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap"
import "./Navbar.css"
function Navbar() {
  const [activeLink, setActiveLink] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll(".section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId)
        }
      })
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <BootstrapNavbar.Brand href="#about" className="logo">
          Fathima Aska
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={activeLink === "education" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
