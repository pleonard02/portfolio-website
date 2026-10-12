# Priscilla Leonard's Portfolio

My personal software engineering portfolio, featuring projects, technical skills, professional background, and interests. Kali, a cat-themed assistant, answers questions about my work through an Express API powered by Google Gemini.

## Features

- Home, About, Projects, Skills, and Other pages.
- Featured Recipe Box project with an embedded demo video.
- Kali chat assistant with suggested questions and animated messages.
- Eastern Time clock, cursor spotlight, responsive styles, and reduced-motion support.

## Tech stack

React, JavaScript, Vite, React Router, CSS, Motion, Node.js, Express, and the Google GenAI SDK.

## Local setup

Install Node.js and npm. From the repository root, install both sets of dependencies:

```bash
cd portfolio-react
npm install
cd server
npm install
```

Create `portfolio-react/.env`:

```dotenv
VITE_API_URL=http://localhost:3001
```

Create `portfolio-react/server/.env`:

```dotenv
GEMINI_API_KEY=your_api_key_here
CLIENT_URL=http://localhost:5173
PORT=3001
```

Keep your Gemini API key in the server environment file. Environment files are ignored by Git.

Start the backend in one terminal, from the repository root:

```bash
cd portfolio-react/server
npm run dev
```

Start the frontend in a second terminal:

```bash
cd portfolio-react
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`. If the port changes, update `CLIENT_URL` and restart the backend. Restart Vite after changing its environment file.

Portfolio pages run independently of the API. Kali's chat replies require the backend and a valid Gemini API key. Check the backend at `http://localhost:3001/api/health`.

## Commands

Run frontend commands inside `portfolio-react`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run lint` | Check JavaScript and JSX with ESLint |
| `npm run build` | Build the frontend into `dist/` |
| `npm run preview` | Preview the production frontend |

In `portfolio-react/server`, use `npm run dev` for development or `npm start` to run the API without nodemon. The API runs separately from the frontend build.

## Structure

```text
portfolio-react/
├── public/           # Public assets and project demo video
├── src/
│   ├── components/   # Navigation, chat, clock, and cursor effects
│   ├── data/         # Projects, skills, interests, and assistant content
│   ├── pages/        # Portfolio pages
│   ├── App.jsx       # Routes and shared layout
│   └── App.css       # Shared and page styles
└── server/
    ├── data/         # Kali's server-side knowledge
    └── server.js     # Health and chat API endpoints
```

## Author

Priscilla Leonard — [GitHub](https://github.com/pleonard02/)
