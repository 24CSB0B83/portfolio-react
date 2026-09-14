function Skills() {
  return (
    <>
      <main>
        {/* SKILLS SECTION */}
        <section className="skills-page">
          <h1>My Skills</h1>

          <p>
            Here are the programming languages, technologies,
            and tools that I have learned and worked with.
          </p>

          <div className="skills-container">

            {/* Programming Languages */}
            <div className="skill-card">
              <h2>Programming Languages</h2>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>R</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="skill-card">
              <h2>Frontend Development</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="skill-card">
              <h2>Backend Development</h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            {/* Database */}
            <div className="skill-card">
              <h2>Database</h2>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="skill-card">
              <h2>Tools & Platforms</h2>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>LeetCode</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="skill-card">
              <h2>Soft Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Time Management</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Lavanya | Personal Portfolio Website
        </p>
      </footer>
    </>
  );
}

export default Skills;