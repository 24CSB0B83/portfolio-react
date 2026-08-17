import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
    const { projectId } = useParams();

    const project = projects.find(
        (item) => item.id === projectId
    );

    // If project doesn't exist
    if (!project) {
        return (
            <main>
                <section className="projects-page">
                    <h1>Project Not Found</h1>

                    <p>
                        Sorry, the project you are looking for does not exist.
                    </p>

                    <Link to="/projects" className="btn">
                        Back to Projects
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="projects-page">

                <h1>{project.title}</h1>

                {project.image && (
                    <img
                        src={project.image}
                        alt={`${project.title} project`}
                        className="project-image"
                    />
                )}

                <p>{project.description}</p>

                <h2>Technologies Used</h2>

                <ul>
                    {project.techStack.map((tech, index) => (
                        <li key={index}>
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="project-buttons">

                    <a
                        href={project.link}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <Link
                        to="/projects"
                        className="btn"
                    >
                        Back to Projects
                    </Link>

                </div>

            </section>
        </main>
    );
}

export default ProjectDetails;