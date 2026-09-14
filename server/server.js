const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
    cors({
        origin: process.env.ALLOWED_ORIGIN
    })
);

app.use(express.json());

// File paths
const projectsFile = path.resolve(
    __dirname,
    process.env.PROJECTS_FILE
);

const contactsFile = path.resolve(
    __dirname,
    process.env.CONTACTS_FILE
);


// =========================
// B1 - Health Check
// =========================

app.get("/", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});


// =========================
// B2 - Get All Projects
// =========================

app.get("/api/projects", (req, res, next) => {
    try {
        const data = fs.readFileSync(projectsFile, "utf-8");

        const projects = JSON.parse(data);

        res.status(200).json(projects);

    } catch (error) {
        next(error);
    }
});


// =========================
// B3 - Get Single Project
// =========================

app.get("/api/projects/:id", (req, res, next) => {
    try {
        const data = fs.readFileSync(projectsFile, "utf-8");

        const projects = JSON.parse(data);

        const project = projects.find(
            (project) => project.id === req.params.id
        );

        if (!project) {
            return res.status(404).json({
                error: "Project not found"
            });
        }

        res.status(200).json(project);

    } catch (error) {
        next(error);
    }
});


// =========================
// B4 - Submit Contact Form
// =========================

app.post("/api/contact", (req, res, next) => {
    try {

        const { name, email, message } = req.body;

        // Validate name
        if (!name || name.trim() === "") {
            return res.status(400).json({
                error: "Name is required"
            });
        }

        // Validate email
        if (!email || email.trim() === "") {
            return res.status(400).json({
                error: "Email is required"
            });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                error: "Invalid email address"
            });
        }

        // Validate message
        if (!message || message.trim() === "") {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        // Read existing contacts
        const data = fs.readFileSync(
            contactsFile,
            "utf-8"
        );

        const contacts = JSON.parse(data);

        // Create new contact
        const newContact = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            createdAt: new Date().toISOString()
        };

        // Add contact
        contacts.push(newContact);

        // Save contact
        fs.writeFileSync(
            contactsFile,
            JSON.stringify(contacts, null, 2)
        );

        // Success response
        res.status(201).json({
            message: "Contact submission received successfully",
            contact: newContact
        });

    } catch (error) {
        next(error);
    }
});
// =========================
// B5 - Get All Contacts
// =========================

app.get("/api/contact", (req, res, next) => {
    try {

        const data = fs.readFileSync(
            contactsFile,
            "utf-8"
        );

        const contacts = JSON.parse(data);

        res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
});


// =========================
// B6 - 404 Catch-All
// =========================

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});
// =========================
// B6 - Global Error Handler
// =========================

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        error: "Internal server error"
    });
});
// =========================
// Start Server
// =========================

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});