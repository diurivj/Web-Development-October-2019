import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../../styles/components";

function ProjectCards({ projects }) {
  return (
    <Carousel>
      {projects.map(({ title, description, owner, _id }) => (
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            <small>Owner: {owner}</small>
            <Link to={`/project/${_id}`}>
              project details{" "}
              <span role="img" aria-label="manito">
                👉
              </span>
            </Link>
          </div>
        </article>
      ))}
    </Carousel>
  );
}

export default ProjectCards;
