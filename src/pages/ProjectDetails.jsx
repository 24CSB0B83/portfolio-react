import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectDetails() {
    const { projectId } = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
       fetch(`https://portfolio-react-1-cjim.onrender.com/api/projects/${projectId}`)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Project Not Found");
                    }

                    throw new Error("Failed to fetch project");
                }

                return response.json();
            })
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, [projectId]);

    if (loading) {
        return (
            <main>
                <section className="projects-page">
                    <p>Loading project...</p>
                </section>
            </main>
        );
    }

    if (error) {
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
