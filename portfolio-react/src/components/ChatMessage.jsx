import { motion, useReducedMotion } from "motion/react";

function ChatMessage({ message }) {
  const isKali = message.role === "assistant";
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`chat-message ${isKali ? "assistant" : "user"}`}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <span className="message-sender">{isKali ? "Kali 🐈‍⬛" : "You"}</span>
      <p>{message.content}</p>
    </motion.div>
  );
}

export default ChatMessage;
