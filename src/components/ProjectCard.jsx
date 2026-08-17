import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({
    id,
    title,
    description,
    techStack,
    image,
    link
}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <article className="project-card">

            {/* Project Image */}
            {image && (
                <img
                    src={image}
                    alt={`${title} project`}
                    className="project-image"
                />
            )}

            {/* Project Title */}
            <h2>{title}</h2>

            {/* Project Description */}
            <p>{description}</p>

            {/* Technologies */}
            <h3>Technologies Used</h3>

            <ul>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            {/* View Details */}
            <button
                className="btn"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "View Details"}
            </button>

            {/* Extra Details */}
            {showDetails && (
                <div className="project-details">
                    <p>
                        This project uses{" "}
                        {techStack.join(", ")}.
                    </p>
                </div>
            )}

            {/* Buttons */}
            <div className="project-buttons">

                <Link
                    to={`/projects/${id}`}
                    className="btn"
                >
                    Project Details
                </Link>

                <a
                    href={link}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

            </div>

        </article>
    );
}

export default ProjectCard;