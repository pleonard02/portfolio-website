import { motion, useReducedMotion } from "motion/react";
import { interests } from "../data/interests";

function Other() {
  const reduceMotion = useReducedMotion();

  const animation = {
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
    <main className="other-page">
      <motion.header
        className="other-hero"
        initial="hidden"
        animate="visible"
        variants={animation}
        transition={{ duration: 0.6 }}
      >
        <p className="other-eyebrow">BEYOND THE CODE</p>

        <h1>
          There's more to me than
          <span> semicolons.</span>
        </h1>

        <p className="other-intro">
          Software engineering is one of the ways I enjoy learning, creating,
          and solving problems. But outside of coding, I have plenty of other
          interests that keep me curious.
        </p>
      </motion.header>

      <section className="other-interests">
        <div className="other-section-heading">
          <p className="other-eyebrow">THINGS I LOVE</p>
          <h2>Curiosity doesn't stop at the keyboard.</h2>
        </div>

        <div className="other-grid">
          {interests.map((interest, index) => (
            <motion.article
              className="other-card"
              key={interest.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={animation}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
            >
              <span className="other-card-icon" aria-hidden="true">
                {interest.icon}
              </span>

              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="other-contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={animation}
        transition={{ duration: 0.6 }}
      >
        <p className="other-eyebrow">LET'S CONNECT</p>

        <h2>Have something in mind?</h2>

        <p>
          Whether you're interested in collaborating, discussing an opportunity,
          or simply saying hello, I'd love to connect.
        </p>

        <div className="other-contact-links">
          <a
            href="https://github.com/pleonard02/"
            target="_blank"
            rel="noopener noreferrer"
            className="other-contact-button primary"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/priscillaleonard"
            target="_blank"
            rel="noopener noreferrer"
            className="other-contact-button secondary"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>
    </main>
  );
}

export default Other;
