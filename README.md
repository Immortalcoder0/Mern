# MERN Practice Lab

```text
███╗   ███╗███████╗██████╗ ███╗   ██╗
████╗ ████║██╔════╝██╔══██╗████╗  ██║
██╔████╔██║█████╗  ██████╔╝██╔██╗ ██║
██║╚██╔╝██║██╔══╝  ██╔══██╗██║╚██╗██║
██║ ╚═╝ ██║███████╗██║  ██║██║ ╚████║
╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
```

<div align="center">

### From first HTML tags to full-stack thinking

React on the front end, Express on the back end, and a set of HTML/JavaScript exercises that show the journey from fundamentals to app development.

<sub>A practice repo with motion, curiosity, and real learning energy.</sub>

</div>

---

## Why this repo exists

This repository is a hands-on workspace for exploring the MERN-style development path step by step.

It is not just one app. It is a learning lab where fundamentals, experiments, and full-stack ideas live side by side:

- `HTML` files for markup practice
- `JavaScript` files for basic scripting and React hook experiments
- `Express` examples for routing, sessions, cookies, and CRUD-style APIs
- `React + Vite` for a small interactive UI

That mix is what makes the repo interesting. You can actually see the path from beginner web concepts to app development.

---

## What is inside

```text
mern/
|-- EXPRESS-APP/         # Express practice apps and backend experiments
|-- react/react-App/     # React + Vite to-do list app
|-- index.html           # Intro HTML practice page
|-- 1.html - 7.html      # Standalone HTML exercises
|-- script.js            # Basic external JavaScript alert example
|-- usestate.js          # React useState conditional rendering example
`-- audio.mp3            # Local media asset
```

---

## Quick snapshot

| Area | Purpose | Status |
| --- | --- | --- |
| React app | Small to-do list built with `useState` | Working starter |
| Express app | Routing, params, sessions, cookies, CRUD practice | Learning sandbox |
| HTML files | Core markup exercises | Foundations |
| JS files | Basic browser scripting and React hook examples | Practice snippets |

---

## Project tour

### React app

Inside `react/react-App`, there is a simple to-do list built with React and Vite.

Current behavior:

- add tasks with `useState`
- render tasks dynamically in a list
- start from a clean Vite setup

This is a strong base for growing into a better app with edit, delete, filter, and persistence features.

### Express app

Inside `EXPRESS-APP`, there are multiple backend practice files covering:

- basic routing
- route parameters
- query parameters
- JSON request handling
- session management
- cookie parsing
- simple login flow concepts

Files like `index1.js`, `index2.js`, and `index3.js` are best understood as separate exercises, not one combined production server.

### HTML and JavaScript basics

The root-level HTML and JS files work like a learning notebook focused on:

- headings, paragraphs, links, and images
- lists and nested lists
- page structure and browser behavior
- basic JavaScript integration
- early React hook practice

That gives the repo a real sense of progression instead of feeling like a sterile template.

---

## Tech stack

- React 19
- Vite 7
- Express 5
- `express-session`
- `cookie-parser`
- HTML5
- JavaScript

---

## Getting started

### Run the React app

```bash
cd react/react-App
npm install
npm run dev
```

The Vite development server will usually start on:

```text
http://localhost:5173
```

### Run an Express example

```bash
cd EXPRESS-APP
npm install
node index.js
```

The Express server runs on:

```text
http://localhost:3000
```

You can also try the other backend practice files:

```bash
node index1.js
node index2.js
node index3.js
```

### Open the HTML exercises

Open any root HTML file directly in the browser, for example:

```text
index.html
1.html
7.html
```

---

## What you can learn here

- how React state updates the UI
- how Express handles routes and params
- how sessions work in backend apps
- how query strings are read from requests
- how frontend and backend projects can live in the same workspace
- how basic web development skills connect together over time

---

## Good next upgrades

- connect the React to-do list to the Express backend
- store tasks in MongoDB or a JSON file
- add delete and edit actions in the UI
- improve styling in the React app
- combine the backend practice files into one organized server
- add environment variables and scripts for easier startup
- create screenshots or demos for the app

---

## Notes

- This repo is best understood as a practice and learning workspace.
- Some files are exploratory and educational rather than production-ready.
- The included `node_modules` folders make the repo heavier than necessary; usually they should be excluded from version control.

---

## Closing thought

Every strong full-stack developer has a repo like this somewhere in their story: messy in places, curious everywhere, and full of momentum.

This one already shows the part that matters most: you are building across the stack instead of waiting to feel ready.
