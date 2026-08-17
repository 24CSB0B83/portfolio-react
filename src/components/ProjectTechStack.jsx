function ProjectTechStack({ techStack }) {
    return (
        <ul>
            {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
            ))}
        </ul>
    );
}

export default ProjectTechStack;