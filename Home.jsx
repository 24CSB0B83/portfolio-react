import "../style.css";
import profile from "../images/profile.jpeg";
import resume from "../assets/resume/Resume.pdf";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

    // Loading state
    const [loading, setLoading] = useState(true);

    // Simulate loading when Home component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Cleanup timer
        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Loading screen
    if (loading) {
        return (
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h2>Loading...</h2>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>

            {/* HERO SECTION */}
            <section className="hero">

                <div className="hero-content">

                    <h3>Hello, I'm</h3>

                    <h1>Lavanya</h1>

                    <h2>Computer Science Student</h2>

                    <p>
                        who enjoys solving coding problems and building
                        full-stack web applications. I like learning new
                        technologies and applying them through real-world
                        projects.
                    </p>

                    <div className="buttons">

                        <a
                            href={resume}
                            className="btn"
                            download
                        >
                            Download Resume
                        </a>

                        <Link
                            to="/projects"
                            className="btn"
                        >
                            View Projects
                        </Link>

                    </div>

                </div>

                <div className="hero-image">

                    <img
                        src={profile}
                        alt="Profile Picture"
                    />

                </div>

            </section>

            {/* INTRO */}
            <section className="intro">

                <h2>Welcome to My Portfolio</h2>

                <p>
                    This website showcases my academic journey, technical
                    skills, projects, achievements and experiences as a
                    Computer Science student. Feel free to explore each
                    page to know more about me and my work.
                </p>

            </section>

            {/* SOCIAL LINKS */}
            <section className="social">

                <h2>Connect With Me</h2>

                <div className="social-links">

                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">LeetCode</a>
                    <a href="#">Email</a>

                </div>

            </section>

        </main>
    );
}

export default Home;