import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  // for skeleton loading
  const dummyCount =
    Array.isArray(specfic) && specfic.length > 0 ? specfic.length : length;
  const dummyProjectsArr = new Array(dummyCount).fill(dummyProject);

  const fetchRepos = useCallback(async () => {
    try {
      const specificList = Array.isArray(specfic) ? specfic : [];

      // ✅ If specific repos are provided, show ONLY those (in exact order)
      if (specificList.length > 0) {
        // de-dupe while preserving order
        const unique = [...new Set(specificList)];

        const results = await Promise.all(
          unique.map((repoName) =>
            axios
              .get(`${API}/repos/${username}/${repoName}`)
              .then((r) => r.data)
              .catch((err) => {
                console.error(`Failed to load repo "${repoName}":`, err.message);
                return null;
              })
          )
        );

        setProjectsArray(results.filter(Boolean));
        return;
      }

      // ✅ Fallback: if no specific repos configured, show most recently updated
      const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc&per_page=${length}`;
      const response = await axios.get(allReposAPI);
      setProjectsArray(response.data.slice(0, length));
    } catch (error) {
      console.error(error.message);
    }
  }, [username, length, specfic]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${project?.name ?? index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
