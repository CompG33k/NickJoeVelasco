import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { Helmet } from "react-helmet-async";

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  return (
    <>
      {/* ===============================
          SEO / Metadata (SPA-safe)
      ================================ */}
      <Helmet>
        <title>Nick Velasco | Senior Software Engineer (.NET, APIs, SQL)</title>
        <meta
          name="description"
          content="Nick Velasco is a Senior Software Engineer with 10+ years of experience building scalable backend systems, REST APIs, and enterprise platforms using C#/.NET and SQL. Open to senior, lead, contract, and consulting roles."
        />
        <meta
          name="keywords"
          content="Senior Software Engineer, C# .NET Developer, Backend Engineer, REST APIs, SQL, Microservices, Enterprise Systems, Contract Software Engineer, Lead Engineer"
        />
        <link rel="canonical" href="https://nickjvelasco.com/" />

        {/* Optional but recommended: structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nick Joe Velasco",
            jobTitle: "Senior Software Engineer",
            url: "https://nickjvelasco.com",
            sameAs: [
              "https://github.com/CompG33k",
              "https://www.linkedin.com/in/nickvelasco/",
            ],
            knowsAbout: [
              "C#",
              ".NET",
              "Backend Engineering",
              "REST APIs",
              "SQL",
              "Microservices",
              "Enterprise Systems",
            ],
          })}
        </script>
      </Helmet>

      {/* ===============================
          HERO SECTION
      ================================ */}
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>

        <Container className="text-center py-5">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>

          <Typist>
            <div className="lead typist">{message}</div>
          </Typist>

          {/* Recruiter-friendly proof line */}
          <p className="lead mt-3 opacity-90">
            10+ years • Backend Systems • APIs • SQL • Microservices • Enterprise Scale
          </p>

          {/* CTAs */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Button
              variant="light"
              size="lg"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outline-light"
              size="lg"
              href="#aboutme"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("aboutme")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </Button>
          </div>

          {/* Social icons */}
          <div className="p-4">
            {icons?.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                className="mx-2"
              >
                <i className={`fab ${icon.image} fa-3x socialicons`} />
              </a>
            ))}
          </div>
        </Container>
      </Jumbotron>
    </>
  );
});

export default MainBody;
