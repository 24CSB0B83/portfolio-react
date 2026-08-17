# Personal Portfolio Website

A responsive and interactive personal portfolio website developed using **React.js**. The website showcases my profile, technical skills, education, projects, and contact information.

The project was initially designed as a static HTML/CSS portfolio and was converted into a React application using reusable components, React Router, state management, form validation, and dynamic project pages.

## Live Demo

GitHub Pages:
https://24csb0b83.github.io/portfolio-react/

## About the Project
This portfolio website is designed to present my academic background,technical skills, projects,achievements,and professional interests in an organized and interactive manner.

The application uses React components to make the website modular and reusable instead of maintaining separate static HTML pages.
## Technologies Used
### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Router DOM
* Vite

### React Concepts Used

* Functional Components
* JSX
* Props
* State Management using `useState`
* Side Effects using `useEffect`
* Controlled Components
* Conditional Rendering
* Dynamic Routing
* Reusable Components
* Local Storage

## Features
### 1.Home Page

The Home page contains:
* Introduction
* Profile image
* Resume download
* Short introduction
* Social media links
* Link to the Projects page

### 2. About Page
The About page contains:
* Personal introduction
* Profile information
* Educational information
* Career objective
* Interests
* Hobbies

### 3. Skills Page
Displays the technical skills and technologies that I have learned and used.


### 4. Projects Page
The Projects page displays multiple projects using reusable React components.
Project information is maintained separately in:

```text
src/data/projects.js
```
Each project contains information such as:
* Project ID
* Title
* Description
* Technology stack
* Image
* Project/GitHub link

Projects are rendered dynamically using JavaScript's `.map()` method.

### 5. Dynamic Project Details
Each project has its own dynamic URL.

Example:
```text
/projects/codespace
/projects/pickmyflick
/projects/portfolio
```
React Router's dynamic parameter is used:

```jsx
<Route
    path="/projects/:projectId"
    element={<ProjectDetails />}
/>
```
The `ProjectDetails` component retrieves the project ID using `useParams()` and displays the corresponding project information.

### 6. Dark / Light Mode
The website contains a theme toggle that allows the user to switch between light and dark modes.
The theme is managed using React state:

```jsx
const [darkMode, setDarkMode] = useState(false);
```
The selected theme is stored in `localStorage`, allowing the preference to remain after refreshing the page.

### 7. Loading Effect
A loading state is implemented using React state and `useEffect`.
The loading screen is displayed temporarily when the application/page loads and is then removed after the specified time.

### 8. Contact Form
The Contact page contains a controlled form with:
* Full Name
* Email Address
* Subject
* Message

The form values are managed using `useState`.
Example:

```jsx
const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
});
```

### 9. Form Validation
Client-side validation is implemented for the contact form.
The validation checks:
* Name is not empty
* Email is not empty
* Email follows a valid format
* Message is not empty

An error state is used to display validation messages.
The Send Message button is disabled until the required fields contain valid information.
### 10. Responsive Design
CSS media queries are used to make the portfolio responsive across different screen sizes such as:
* Desktop
* Laptop
* Tablet
* Mobile

### 11. 404 Page
A `NotFound.jsx` page is included for invalid URLs.

The route is handled using:

```jsx
<Route path="*" element={<NotFound />} />
```

## Project Structure
## Routing
React Router DOM is used for navigation between pages.
The application contains the following routes:
```text
/                       → Home
/about                  → About
/skills                 → Skills
/projects               → Projects
/projects/:projectId   → Project Details
/education              → Education
/contact                → Contact
*                       → Not Found
```

The use of React Router allows navigation without creating separate static HTML files for every page.

## Reusable Components
### Navbar
The `Navbar` component contains the navigation links used throughout the application.

### Footer
The `Footer` component provides the common footer section.

### ProjectCard
`ProjectCard` is a reusable component that receives project information through props.
For example:

```jsx
<ProjectCard project={project} />
```
This avoids writing separate HTML structures for every project.
## Project Data
Project information is stored separately in:

```text
src/data/projects.js
```

Example structure:

```js
const projects = [
    {
        id: "codespace",
        title: "CodeSpace",
        description: "...",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "Socket.IO",
            "Monaco Editor"
        ],
        image: "",
        link: "#"
    }
];
export default projects;
```

This makes adding or modifying projects easier without changing the main project component.
## State Management
React's `useState` Hook is used wherever the interface contains changing data.
Examples include:
* Dark/light theme
* Contact form values
* Contact form validation errors
* Loading state
Example:

```jsx
const [formData,setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
});
```
## Side Effects
The `useEffect` Hook is used for operations that should happen after rendering.
Examples:
* Saving the selected theme to `localStorage`
* Loading behavior
* Running and cleaning up timers

## Form Handling
The contact form uses controlled components.
Each input gets its value from React state:

```jsx
value={formData.name}
```

and updates the state using:

```jsx
onChange={handleChange}
```
This allows React to keep track of every value entered by the user.
## Installation and Setup
### Step 1: Clone the repository
```bash
git clone https://github.com/24CSB0B83/portfolio-react.git
```

### Step 2: Navigate to the project
```bash
cd portfolio-react
```

### Step 3:Install dependencies
```bash
npm install
```
### Step 4:Start the development server
```bash
npm run dev
```
The application will be available on the local development server provided by Vite.

## Production Build
To create a production build:

```bash
npm run build
```
The generated production files are placed inside:

```text
dist/
```
The project successfully builds using Vite.

## Deployment
The project is deployed using **GitHub Pages**.
Live website:

https://24csb0b83.github.io/portfolio-react/

## Future Improvements

Possible future improvements include:
* Connect the contact form to a backend
* Store project information in a database
* Add authentication
* Add animations
* Add a blog section
* Add more project demonstrations
* Add downloadable certificates
* Integrate a backend API for dynamic content
* Add a real email service for contact form submissions

## Learning Outcomes

Through this project, I gained practical experience in:
* Converting a static website into React
* Creating reusable React components
* Passing data through props
* Managing component state
* Using React Hooks
* Implementing client-side form validation
* Implementing dynamic routing
* Working with JavaScript data structures
* Creating responsive interfaces
* Building and deploying a React application

---

##  Author
Varthyavath Lavanya
Computer Science Student
Portfolio:
https://24csb0b83.github.io/portfolio-react/
GitHub:
https://github.com/24CSB0B83/
