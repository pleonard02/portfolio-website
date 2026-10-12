export const kaliKnowledge = [
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "portfolio",
      "built",
      "build",
      "created",
      "applications",
      "apps",
    ],
    response:
      "Priscilla has built several applications using React, Node.js, Express, and MongoDB. Her featured full-stack project is The Recipe Box, a recipe management application with meal planning, kitchen inventory, and shopping lists. You can explore her work on the Projects page.",
  },
  {
    id: "recipe-box",
    keywords: [
      "recipe",
      "recipe box",
      "capstone",
      "meal plan",
      "shopping list",
      "kitchen inventory",
    ],
    response:
      "The Recipe Box is Priscilla's full-stack MERN capstone project. It allows users to save and manage recipes, organize weekly meal plans, track kitchen inventory, share and collaborate on recipes, and manage shopping lists. It uses React, Node.js, Express, MongoDB, and JWT authentication.",
  },
  {
    id: "skills",
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "programming",
      "languages",
      "frameworks",
      "tools",
    ],
    response:
      "Priscilla works with JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, Git, and REST APIs. She also has experience with TypeScript, Tailwind CSS, Bootstrap, and Figma.",
  },
  {
    id: "backend",
    keywords: [
      "backend",
      "back-end",
      "server",
      "express",
      "node",
      "mongodb",
      "database",
      "api",
      "authentication",
      "jwt",
    ],
    response:
      "Yes! Priscilla has built REST APIs using Node.js and Express, worked with MongoDB and Mongoose, implemented JWT authentication, and developed CRUD operations with protected routes and ownership checks.",
  },
  {
    id: "frontend",
    keywords: [
      "frontend",
      "front-end",
      "react",
      "css",
      "javascript",
      "typescript",
      "responsive",
    ],
    response:
      "Priscilla builds interactive frontend applications using React, JavaScript, HTML, and CSS. She's worked with React Router, Context API, custom hooks, Tailwind CSS, and responsive layouts.",
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "career",
      "work history",
      "previous jobs",
      "background",
      "employment",
    ],
    response:
      "Before transitioning into software engineering, Priscilla worked in technical support, case management, and retail operations. Her experience includes troubleshooting, documentation, training, customer service, and solving complex problems.",
  },
  {
    id: "education",
    keywords: [
      "education",
      "degree",
      "college",
      "university",
      "per scholas",
      "training",
      "bootcamp",
    ],
    response:
      "Priscilla has a bachelor's degree in Psychology and has completed intensive full-stack software engineering training through Per Scholas, covering JavaScript, React, Node.js, databases, and modern development workflows.",
  },
  {
    id: "goals",
    keywords: [
      "goals",
      "interested",
      "career goals",
      "future",
      "cloud",
      "aws",
      "career path",
    ],
    response:
      "Priscilla is pursuing opportunities in software development and technical roles, with long-term interests in backend development, cloud engineering, and AI technologies.",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "hire",
      "hiring",
      "recruiter",
      "reach",
      "email",
      "github",
      "linkedin",
    ],
    response:
      "Interested in connecting with Priscilla? You can explore her projects on GitHub at https://github.com/pleonard02/ and find more information about her background throughout this portfolio.",
  },
];

export const fallbackResponse =
  "I'm still learning about all of Priscilla's accomplishments! I can tell you about her projects, technical skills, professional experience, education, or career goals. What would you like to explore?";

export function getKaliResponse(question) {
  const normalized = question
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim();

  let bestMatch = null;
  let highestScore = 0;

  for (const topic of kaliKnowledge) {
    let score = 0;

    for (const keyword of topic.keywords) {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const pattern = new RegExp(`(^|\\s)${escaped}(?=\\s|$)`, "i");

      if (pattern.test(normalized)) {
        score += keyword.includes(" ") ? 3 : 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  return bestMatch ? bestMatch.response : fallbackResponse;
}
