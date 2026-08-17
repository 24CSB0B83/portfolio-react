function Education() {
  return (
    <>
      <main>
        {/* EDUCATION */}
        <section className="education-page">
          <h1>Education</h1>

          <p>
            My academic journey and educational background.
          </p>

          <div className="education-container">

            {/* B.Tech */}
            <div className="education-card">
              <h2>Bachelor of Technology</h2>

              <h3>Computer Science & Engineering</h3>

              <p>
                <strong>College:</strong> NIT Warangal
              </p>

              <p>
                <strong>University:</strong> NIT Warangal
              </p>

              <p>
                <strong>Duration:</strong> 2024-2028
              </p>

              <p>
                <strong>Current CGPA:</strong> 8.09
              </p>
            </div>

            {/* Intermediate */}
            <div className="education-card">
              <h2>Intermediate (12th)</h2>

              <p>
                <strong>College:</strong> TSWREIS COE
              </p>

              <p>
                <strong>Board:</strong> State Board
              </p>

              <p>
                <strong>Year:</strong> 2022-2024
              </p>

              <p>
                <strong>Percentage:</strong> 98.6%
              </p>
            </div>

            {/* SSC */}
            <div className="education-card">
              <h2>Secondary School (10th)</h2>

              <p>
                <strong>School:</strong> Ekalavya High School
              </p>

              <p>
                <strong>Board:</strong> State Board
              </p>

              <p>
                <strong>Year:</strong> 2022
              </p>

              <p>
                <strong>CGPA:</strong> 10/10
              </p>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="certifications">
          <h2>Certifications</h2>

          <ul>
            <li>Programming in C++</li>
            <li>Java Programming-Hackerrank</li>
            <li>NCC C certified-Army wing</li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="achievements">
          <h2>Achievements</h2>

          <ul>
            <li>Solved 150+ Coding Problems</li>
            <li>Active Competitive Programmer</li>
            <li>Participated in Coding Contests</li>
            <li>JUO- NCC</li>
          </ul>
        </section>
      </main>

      
    </>
  );
}

export default Education;