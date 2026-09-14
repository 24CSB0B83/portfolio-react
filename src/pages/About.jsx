import profile from "../images/profile.jpeg";

function About() {
    return (
        <main>
            {/* ABOUT SECTION */}
            <section className="about-page">
                <h1>About</h1>
                <div className="about-container">
                    <div className="about-image">
                        <img
                            src={profile}
                            alt="Profile Picture"
                        />
                    </div>
                    <div className="about-content">
                        <h2>Hello! I'm Lavanya</h2>
                        <p>
                            I am a Computer Science student with a passion for
                            software development and problem solving.
                            I enjoy building web applications, learning new
                            technologies, and improving my programming skills.
                        </p>
                        <p>
                            My interests include Full Stack Development,
                            Data Structures & Algorithms, Competitive Programming,
                            and Software Engineering.
                        </p>
                    </div>
                </div>
            </section>
            {/* PERSONAL DETAILS */}
            <section className="personal-details">
                <h2>Personal Information</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td>Varthyavath Lavanya</td>
                        </tr>
                        <tr>
                            <td><strong>Degree</strong></td>
                            <td>B.Tech - Computer Science</td>
                        </tr>
                        <tr>
                            <td><strong>College</strong></td>
                            <td>NIT Warangal</td>
                        </tr>
                        <tr>
                            <td><strong>Email</strong></td>
                            <td>vl24csb0b83@student.nitw.ac.in</td>
                        </tr>
                        <tr>
                            <td><strong>Location</strong></td>
                            <td>Warangal, Telangana-India</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {/* CAREER OBJECTIVE */}
            <section className="career">
                <h2>Career Objective</h2>
                <p>
                    I aim to build a strong career in software development
                    by solving real-world problems and developing
                    scalable web applications. I enjoy learning new technologies
                    and continuously improving my programming as well as my
                    problem-solving skills.
                </p>
            </section>
            {/* INTERESTS */}
            <section className="interests">
                <h2>Interests</h2>
                <ul>
                    <li>Full Stack Web Development</li>
                    <li>Competitive Programming</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            {/* HOBBIES */}
            <section className="hobbies">
                <h2>Hobbies</h2>
                <ul>
                    <li>Learning New Technologies</li>
                    <li>Building Personal Projects</li>
                    <li>Playing outdoor Games</li>
                </ul>
            </section>
        </main>
    );
}
export default About;