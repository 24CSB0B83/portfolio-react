import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://portfolio-react-1-cjim.onrender.com/api/projects")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }

                return response.json();
            })
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Unable to load projects. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <main>
            <section className="projects-page">

                <h1>My Projects</h1>

                <p>
                    Here are some of the projects I have developed using
                    various technologies.
                </p>

                {loading && <p>Loading projects...</p>}

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="projects-container">

                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                image={project.image}
                                link={project.link}
                            />
                        ))}

                    </div>
                )}

            </section>
        </main>
    );
}

export default Projects;
