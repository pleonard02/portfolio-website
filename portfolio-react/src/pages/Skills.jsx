import { motion, useReducedMotion } from "motion/react";
import { skillCategories, learningInterests } from "../data/skills";

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="skills-page">
      <motion.header
        className="skills-hero"
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <p className="skills-eyebrow">MY TECHNICAL TOOLKIT</p>

        <h1>
          The tools behind <span>the work.</span>
        </h1>

        <p className="skills-intro">
          From building interactive interfaces to developing backend APIs, these
          are the technologies I've used to turn ideas into working
          applications.
        </p>
      </motion.header>

      <section className="skills-section" aria-label="Technical skills">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.article
              className="skill-card"
              key={category.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
            >
              <div className="skill-card-heading">
                <span className="skill-card-icon" aria-hidden="true">
                  {category.icon}
                </span>

                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>

              <ul className="skill-tags">
                {category.skills.map((skill) => (
                  <li className="skill-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="skills-learning"
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="skills-eyebrow">CURRENTLY EXPLORING</p>

        <h2>Always learning.</h2>

        <p>
          One of the things I enjoy most about software engineering is that
          there's always something new to understand. I'm continuing to
          strengthen my backend development skills while exploring cloud
          technologies and AI-powered applications.
        </p>

        <ul className="learning-tags">
          {learningInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}

export default Skills;
