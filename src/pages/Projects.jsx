import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <main>
            <section className="projects-page">

                <h1>My Projects</h1>

                <p>
                    Here are some of the projects I have developed using
                    various technologies.
                </p>

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

            </section>
        </main>
    );
}

export default Projects;