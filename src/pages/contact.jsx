import { useState } from "react";
function Contact() {
    //FORM STATE
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    //ERROR STATE
    const [errors, setErrors] = useState({});
    //SUCCESS STATE
    const [submitted, setSubmitted] = useState(false);
    //EMAIL VALIDATION
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email.trim());
    };
    //HANDLE INPUT
    const handleChange = (e) => {
        const { id, value } = e.target;
        // Update form data
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
        // Remove success message when user edits form
        setSubmitted(false);
        // ================= LIVE EMAIL VALIDATION =================
        if (id === "email") {
            if (value.trim() === "") {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Email is required"
                }));
            } else if (!isValidEmail(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Invalid email address"
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: ""
                }));
            }
            return;
        }
        // ================= NAME VALIDATION =================
        if (id === "name") {
            if (value.trim() === "") {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: "Name is required"
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: ""
                }));
            }
            return;
        }
        // ================= MESSAGE VALIDATION =================
        if (id === "message") {
            if (value.trim() === "") {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    message: "Message is required"
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    message: ""
                }));
            }
            return;
        }
    };
    //VALIDATE FORM
    const validateForm = () => {
        const newErrors = {};
        // Name
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        // Email
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        // Message
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // CHECK FORM VALIDITY
    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        isValidEmail(formData.email) &&
        formData.message.trim() !== "";
    //SUBMIT FORM
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form before submitting
        if (!validateForm()) {
            return;
        }
        // Show success message
        setSubmitted(true);
        // Clear form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        // Clear errors
        setErrors({});
    };
    return (
        <main>
            <section className="contact-page">
                {/* ================= PAGE TITLE ================= */}
                <h1>Contact</h1>
                <p>
                    Have a question or want to collaborate?
                    Feel free to reach out using the form below.
                </p>
                <div className="contact-container">
                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>
                            <strong>Name:</strong>{" "}
                            Varthyavath Lavanya
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            vl24csb0b83@student.nitw.ac.in
                        </p>
                        <p>
                            <strong>Phone:</strong>{" "}
                            +91 8247033486
                        </p>
                        <p>
                            <strong>Location:</strong>{" "}
                            Nalgonda-Telangana
                        </p>
                        <br />
                        <h3>Connect with Me</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    LeetCode
                                </a>
                            </li>
                            <li>
                                <a href="mailto:vl24csb0b83@student.nitw.ac.in">
                                    Email Me
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* =================================================
                        CONTACT FORM
                    ================================================= */}
                    <div className="contact-form">
                        <h2>Send a Message</h2>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {/* ================= NAME ================= */}
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="error">
                                    {errors.name}
                                </p>
                            )}
                            {/* ================= EMAIL ================= */}
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="error">
                                    {errors.email}
                                </p>
                            )}
                            {/* ================= SUBJECT ================= */}
                            <label htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            {/* ================= MESSAGE ================= */}
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p className="error">
                                    {errors.message}
                                </p>
                            )}
                            {/* ================= SUCCESS ================= */}
                            {submitted && (
                                <p className="success">
                                    Message sent successfully!
                                </p>
                            )}
                            {/* ================= SUBMIT BUTTON ================= */}
                            <button
                                type="submit"
                                disabled={!isFormValid}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Contact;