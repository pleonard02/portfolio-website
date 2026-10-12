import { motion, useReducedMotion } from "motion/react";
import { projects } from "../data/project.js";
import demoMovie from "../../public/the_recipe_box_demo.mp4";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      )}

      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Live Demo ↗
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index, reduceMotion }) {
  return (
    <motion.article
      className={`project-card ${
        project.featured ? "project-card-featured" : ""
      }`}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.24),
      }}
    >
      <div className="project-visual">
        {project.id === "recipe-box" ? (
          <video
            controls
            playsInline
            preload="metadata"
            aria-label="The Recipe Box application demo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          >
            <source src={demoMovie} type="video/mp4" />
            Your browser does not support this video.
          </video>
        ) : project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="project-placeholder">
            <span aria-hidden="true">✦</span>
            <p>{project.title}</p>
          </div>
        )}
      </div>

      <div className="project-content">
        <p className="project-category">
          {project.featured && "FEATURED · "}
          {project.category}
        </p>

        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span className="project-tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function Projects() {
  const reduceMotion = useReducedMotion();
  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="projects-page">
      <motion.header
        className="projects-hero"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="projects-eyebrow">SELECTED WORK</p>
        <h1>
          Projects I've <span>brought to life.</span>
        </h1>
        <p>
          From full-stack applications to backend APIs, here's a look at what
          I've been building.
        </p>
      </motion.header>

      <section className="projects-featured" aria-label="Featured projects">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </section>

      <section className="projects-other">
        <h2 className="projects-section-title">More of my work</h2>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
