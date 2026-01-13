import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {
  mainBody,
  about,
  repos,
  skills,
  experiences,
  getInTouch,
  resumeSection,
} from "../editable-stuff/config";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const nav = document.querySelector("nav.navbar");
  const navH = nav?.offsetHeight ?? 72;

  const y = el.getBoundingClientRect().top + window.pageYOffset - navH - 6;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Navigation = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brand = `${mainBody.firstName} ${
    mainBody.middleName ? mainBody.middleName[0] + "." : ""
  } ${mainBody.lastName}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`px-3 ${
        scrolled ? "navbar-white shadow-sm" : "navbar-transparent"
      }`}
    >
      <Container>
        {/* Brand */}
        <Button
          className="navbar-brand"
          variant="light"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
          }}
        >
          {brand}
        </Button>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side nav links */}
          <Nav className="me-auto gap-2">
            {about?.show && (
              <Button
                variant="light"
                href="#aboutme"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("aboutme");
                }}
              >
                About Me
              </Button>
            )}

            {experiences?.show && (
              <Button
                variant="light"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("experience");
                }}
              >
                Experience
              </Button>
            )}

            {skills?.show && (
              <Button
                variant="light"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("skills");
                }}
              >
                Skills
              </Button>
            )}

            {repos?.show && (
              <Button
                variant="light"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("projects");
                }}
              >
                Projects
              </Button>
            )}
          </Nav>

          {/* Right side buttons */}
          <div className="d-flex gap-2 mt-3 mt-lg-0 align-items-center">
            {resumeSection?.show && (
              <Button className="btn-resume" onClick={() => onOpenResume?.()}>
                View Resume
              </Button>
            )}

            <Button
              variant="outline-secondary"
              href={about.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              Download PDF
            </Button>

            <Button
              variant="dark"
              href={`mailto:${getInTouch.email}?subject=Senior%20Software%20Engineer%20Opportunity`}
            >
              Email Me
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
