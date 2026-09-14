import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {

    //usestate is for current theme
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    //this is for selected theme
    useEffect(() => {
        localStorage.setItem(//local storage is for whenever we refresh the page it shouldnt go for default page
            "theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : ""}>

            {/* Navigation Bar + Theme Toggle */}
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            {/* React Router */}
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/skills"
                    element={<Skills />}
                />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/projects/:projectId"
                    element={<ProjectDetails />}
                />

                <Route
                    path="/education"
                    element={<Education />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </div>
    );
}

export default App;
