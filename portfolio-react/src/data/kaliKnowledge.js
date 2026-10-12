const kaliKnowledge = [
  {
    keywords: ["project", "projects", "portfolio", "built", "featured"],
    response:
      "Priscilla has built five portfolio projects: The Recipe Box, TaskMaster API, Zenith Product API, React Task Dashboard, and Movie Finder API. The Recipe Box is her featured full-stack application. Would you like to know more about a particular project?",
  },
  {
    keywords: ["backend", "api", "server", "express", "node"],
    response:
      "Priscilla has built backend applications using Node.js, Express, and MongoDB. Her TaskMaster API includes JWT authentication and ownership-based authorization, while Zenith Product API supports CRUD operations, filtering, sorting, and pagination.",
  },
  {
    keywords: ["frontend", "react", "typescript", "interface", "ui"],
    response:
      "Priscilla has experience with React, JavaScript, TypeScript, HTML, CSS, and frontend styling tools. Her React Task Dashboard demonstrates interactive UI development, drag-and-drop functionality, and local storage persistence.",
  },
  {
    keywords: ["skills", "technologies", "technical", "stack", "tools"],
    response:
      "Priscilla's technical toolkit includes JavaScript, TypeScript, React, Node.js, Express, MongoDB, Mongoose, REST APIs, Git, GitHub, Postman, and more. She's especially interested in backend development.",
  },
  {
    keywords: [
      "experience",
      "background",
      "career",
      "work",
      "candidate",
      "hire",
    ],
    response:
      "Priscilla is an aspiring software engineer with experience in technical support, case management, customer service, and operations. Her background in psychology and research contributes to her analytical thinking, communication, and user-centered approach to problem-solving.",
  },
  {
    keywords: ["education", "degree", "college", "training", "school"],
    response:
      "Priscilla has a bachelor's degree in Psychology and completed full-stack software engineering training through Per Scholas.",
  },
  {
    keywords: ["recipe", "meal", "kitchen", "shopping"],
    response:
      "The Recipe Box is Priscilla's full-stack MERN application for organizing recipes, planning meals, tracking kitchen inventory, and managing shopping lists. It uses React, Node.js, Express, MongoDB, and JWT authentication.",
  },
  {
    keywords: ["learn", "learning", "future", "goals", "cloud", "aws", "ai"],
    response:
      "Priscilla is continuing to develop her backend engineering skills while exploring AWS, cloud engineering, AI integration, and backend architecture.",
  },
];

export const fallbackResponse =
  "I'm Kali, Priscilla's portfolio assistant! I can tell you about her projects, technical skills, professional experience, education, or career goals. What would you like to explore?";

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

export default kaliKnowledge;
