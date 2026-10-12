import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import "./About.css";

const highlights = [
  {
    icon: "🎓",
    title: "Education",
    description:
      "A bachelor's degree in Psychology and full-stack software engineering training through Per Scholas.",
  },
  {
    icon: "💼",
    title: "Professional Experience",
    description:
      "A background in technical support, case management, customer service, and operations.",
  },
  {
    icon: "🧠",
    title: "What I Bring",
    description:
      "Research experience, analytical thinking, empathy, adaptability, and a problem-solving mindset.",
  },
  {
    icon: "🚀",
    title: "What's Next",
    description:
      "Continuing to grow as a developer while exploring backend engineering, cloud technologies, and AI.",
  },
];

function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main className="about-page">
      <motion.section
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="about-eyebrow">A LITTLE ABOUT ME</p>

        <h1>
          Curiosity has always been
          <span> my starting point.</span>
        </h1>

        <p className="about-hero-description">
          I'm Priscilla, an aspiring software engineer who loves understanding
          how things work, solving problems, and building technology that makes
          people's lives easier.
        </p>
      </motion.section>

      <motion.section
        className="about-story"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="about-section-heading">
          <p className="about-eyebrow">MY STORY</p>
          <h2>A different path into technology.</h2>
        </div>

        <div className="about-story-content">
          <p>
            My professional journey hasn't followed a traditional software
            engineering path. I began with a degree in Psychology, where I
            developed an appreciation for research, critical thinking, and
            understanding human behavior.
          </p>

          <p>
            Along the way, I've worked in technical support, case management,
            and operations. Each experience taught me something about
            troubleshooting, communicating complex ideas, and approaching
            challenges from different perspectives.
          </p>

          <p>
            Software engineering brings those interests together. I enjoy the
            process of taking an idea, breaking it into smaller problems, and
            turning it into something functional. I'm especially interested in
            backend development and the systems that make applications work.
          </p>
        </div>
      </motion.section>

      <section className="about-highlights">
        <div className="about-section-heading">
          <p className="about-eyebrow">BEYOND THE CODE</p>
          <h2>What shapes my approach.</h2>
        </div>

        <div className="about-card-grid">
          {highlights.map((item, index) => (
            <motion.article
              className="about-card"
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
            >
              <span className="about-card-icon" aria-hidden="true">
                {item.icon}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="about-connect"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="about-eyebrow">LET'S CONNECT</p>
        <h2>Let's build something meaningful.</h2>

        <p>
          I'm excited to continue learning, collaborating, and contributing to
          projects that make a difference.
        </p>

        <div className="about-actions">
          <Link to="/projects" className="about-button primary">
            Explore My Projects
          </Link>

          <a
            href="https://github.com/pleonard02/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button secondary"
          >
            Visit My GitHub ↗
          </a>
        </div>
      </motion.section>
    </main>
  );
}

export default About;
