import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, experiences } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

// Safely get offsetTop from a ref or a DOM element
const getOffsetTop = (refOrEl) => {
  const el = refOrEl?.current ?? refOrEl;
  return el?.offsetTop ?? 0;
};

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ currPos }) => {
      if (!navbarDimensions) return;

      // ✅ SAFE: use helper (ref may be undefined during initial mount)
      const homeTop = getOffsetTop(ref);

      // If we can’t calculate yet, don’t crash
      // homeTop will be 0 if ref is not ready
      currPos.y + homeTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);

      setScrollPosition(currPos.y);
    },
    [navBottom, navbarDimensions, ref]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;

    // ✅ SAFE: use helper
    const homeTop = getOffsetTop(ref);

    navBottom - scrollPosition >= homeTop ? setIsTop(false) : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`  ${mainBody.firstName} J. ${mainBody.lastName}  `}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {experiences.show && (
            <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/#experience"}>
              Experience
            </NavLink>
          )}

          {skills.show && (
            <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/#skills"}>
              Skills
            </NavLink>
          )}

          {repos.show && (
            <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/#projects"}>
              Projects
            </NavLink>
          )}

          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
