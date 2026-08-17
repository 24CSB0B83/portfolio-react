# Personal Portfolio Website

A responsive personal portfolio built with React. It's got my profile, skills, education, projects, and a contact form — basically the usual portfolio stuff, but built the "proper" way instead of one giant HTML file.

Firstlt I built this as plain HTML5/CSS3 a while back,then rebuilt it in React for this assignment so I could actually practice component structure,routing, hooks,and state management instead of copy-pasting the same navbar into six files.

---
## Live Demo
I'm still finishing up the GitHub Pages deployment for this — for now the easiest way to see it is to run it locally(takes about a minute,instructions below).I'll drop the live link here once it's up.

---
## Tech Stack
-React.js
-JavaScript (ES6+)
-HTML5 / CSS3
-React Router DOM
-Vite
### React concepts I used

-Functional components
-JSX
-Props
-`useState` for state
-`useEffect` for side effects
-Controlled form inputs
-Conditional rendering
-Dynamic routing with URL params
-Reusable components
-localStorage for persisting the theme

---
## Pages / Features
**Home** —intro,profile photo,resume download,a couple of social links,and a link into the Projects page.
**About** —a bit more about me,my education,what I'm interested in,hobbies,that kind of thing.
**Skills** —technologies I've actually used,not a giant wishlist.
**Projects** —pulls project info from `src/data/projects.js` and renders a card for each one using `.map()`.I kept the data separate from the component on purpose, more on that below.
**Project Details** —each project gets its own URL,like `/projects/codespace` or `/projects/pickmyflick`.Handled with a dynamic route:

```jsx
<Route path="/projects/:projectId"element={<ProjectDetails />} />
```
`ProjectDetails.jsx` grabs the id from the URL with `useParams()`, looks it up in the projects array, and renders that project's info.
**Dark / light mode** —toggle in the navbar, backed by a bit of state:

```jsx
const[darkMode, setDarkMode]=useState(false);
```
The choice gets saved to `localStorage`,so it doesn't reset back to light mode every time you refresh the page(which annoyed me enough in testing that I made sure to fix it properly).
**Loading screen** —shows briefly when the page first loads,then disappears after a short delay.Nothing fancy,just state+a timer.
**Contact form** —controlled inputs for name,email,subject,and message,all tracked with `useState`.Basic validation runs before it'll let you submit:
-name can't be empty
-email can't be empty and has to look like an actual email
-message can't be empty
If something's wrong,an error shows up under the field and the Send button stays disabled until it's fixed.

**Responsive layout**—media queries so it doesn't fall apart on a phone screen.
**404 page** —catch-all route for anything that doesn't match,so people don't just hit a blank screen.

```jsx
<Route path="*" element={<NotFound />} />
```
---
## Project Structure
```
portfolio-react/
├── public/
├── src/
│   ├── assets/
│   │   └── resume/
│   │       └── Resume.pdf
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   └── projects.js
│   ├── images/
│   │   └── profile.jpeg
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---
## Routing

```
/                     → Home
/about                → About
/skills               → Skills
/projects             → Projects
/projects/:projectId  → Project Details
/education            → Education
/contact              → Contact
*                     → 404 Not Found
```

All handled through React Router,so it feels like a multi-page site without me having to actually make separate HTML files for each page.
---
## Component Tree & State-Lifting Decisions
```
App.jsx
├── Navbar            → theme toggle lives here
├── Routes
│   ├── Home
│   ├── About
│   ├── Skills
│   ├── Projects
│   │   └── ProjectCard   → gets a project via props
│   ├── ProjectDetails    → reads projectId from the URL
│   ├── Education
│   ├── Contact           → owns its own form state
│   └── NotFound
└── Footer
```
A few notes on why state ended up where it did:

**Theme state lives in `App.jsx`**,not in the Navbar itself. The toggle button is in the Navbar,but the actual dark/light value affects the whole page layout,so it made more sense to keep it up top and pass it down rather than have the Navbar own something the rest of the app depends on.

**Project data isn't state at all** —it just sits in `src/data/projects.js` as a plain array.It doesn't change while the app is running,so there's no reason to load it into `useState` anywhere.`Projects.jsx` imports it directly and maps over it,handing each project to `ProjectCard` as a prop.That keeps `ProjectCard`dumb on purpose —it just displays whatever it's given,it doesn't know or care where the data came from.
**Contact form state stays inside `Contact.jsx`.** Nothing outside that page needs to know what someone typed into the form,so lifting it up would've just added complexity for no reason.
**Loading state stays wherever the loading screen actually renders** —same logic, it's a local concern,not something other components need access to.
Basically my rule of thumb was:if only one component cares about a piece of state,keep it there.If more than one component needs it (like the theme),lift it up to the nearest shared parent—not all the way up to `App.jsx`by default just because that's the "safe" option.

---
## useEffect Hooks I Implemented
> Note: fill in / double check this table against your actual code before submitting — I've listed these based on what the app does, but confirm the exact file each one lives in.
| # | Where | What it does | Why it was needed |
|---|-------|---------------|--------------------|
| 1 | Theme logic | Writes the current `darkMode` value to `localStorage` whenever it changes | Without this,the site would forget your theme choice every time you refreshed.Since this only needs to run when `darkMode` changes,it's a small, focused effect rather than something checked on every render. |
| 2 | Loading screen |Starts a timer when the component mounts,hides the loading screen after a short delay,and clears the timer if the component unmounts early | This is a classic case for `useEffect` — it's a side effect that has to happen after the component is on the screen, not during render, and the cleanup function stops React from complaining about setting state on a component that's no longer there. |
| 3 | `ProjectDetails.jsx` | Re-runs whenever the `projectId` in the URL changes, to find the matching project and update what's displayed | React Router reuses the same component when you jump between `/projects/:id` URLs instead of unmounting and remounting it, so without this effect, clicking from one project straight to another wouldn't actually update the page. |

---

## State Management
`useState` shows up in a handful of places:
-theme (dark/light)
-contact form values
-contact form errors
-loading state
Example, from the contact form:

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});
```

---
## Form Handling & Validation

The contact form is fully controlled — every input's value comes from state, and every keystroke updates it:

```jsx
value={formData.name}
onChange={handleChange}
```
When you hit send, `validateForm()` runs through the required fields, checks the email format, and either sets error messages or lets the submission go through.

```
type stuff in
      ↓
state updates as you type
      ↓
hit Send Message
      ↓
validateForm() runs
      ↓
   valid? ──no──→ show errors, stop here
      │
     yes
      ↓
handle the submission
```

---
## Running It Locally
```bash
git clone https://github.com/24CSB0B83/portfolio-react.git
cd portfolio-react
npm install
npm run dev
```
Vite will spin up a local dev server and print the URL in your terminal (usually `http://localhost:5173`).
To build for production:

```bash
npm run build
```
Output goes into the `dist/` folder.
---

## Possible Future Additions
Stuff I'd add if I kept working on this:
-hook the contact form up to a real backend/email service
-move project data into an actual database instead of a JS file
-add some page transition animations
-maybe a blog section
-more projects as I build them

---
## What I Actually Learned Doing This
This was the first time I built something in React beyond a tutorial, so a lot of this was trial and error — figuring out where state should actually live, when `useEffect` is the right tool versus just overusing it everywhere, and how dynamic routing works with `useParams`. Getting the theme to persist through refreshes and getting the dynamic project routes working were probably the two things that took the longest to get right.

---
## Author
**Varthyavath Lavanya**
Computer Science Student
GitHub: https://github.com/24CSB0B83/