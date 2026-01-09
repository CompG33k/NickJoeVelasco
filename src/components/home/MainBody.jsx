// import React from "react";
// import Container from "react-bootstrap/Container";
// import Typist from "react-typist-component";
// import { Jumbotron } from "./migration";

// const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
//   return (
//     // ✅ attach ref to a real DOM node (div/section), not Jumbotron
//     <div ref={ref} id="home">
//       <Jumbotron
//         fluid
//         style={{
//           background: `linear-gradient(136deg,${gradient})`,
//           backgroundSize: "1200% 1200%",
//         }}
//         className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
//       >
//         <div id="stars"></div>
//         <Container className="text-center">
//           <h1 className="display-1">{title}</h1>

//           <Typist>
//             <div className="lead typist">{message}</div>
//           </Typist>

//           <div className="p-5">
//             {icons.map((icon, index) => (
//               <a
//                 key={`social-icon-${index}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={icon.url}
//                 aria-label={`My ${icon.image.split("-")[1]}`}
//               >
//                 <i className={`fab ${icon.image} fa-3x socialicons`} />
//               </a>
//             ))}
//           </div>

//           <a
//             className="btn btn-outline-light btn-lg"
//             href="#aboutme"
//             role="button"
//             aria-label="Learn more about me"
//           >
//             More about me
//           </a>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// });

// export default MainBody;
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  return (
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

        {/* Quick proof line (optional, but helps recruiters) */}
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
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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
              document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
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
  );
});

export default MainBody;
