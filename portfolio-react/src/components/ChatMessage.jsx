import { motion, useReducedMotion } from "motion/react";

function ChatMessage({ message }) {
  const isKali = message.role === "assistant";
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`message-row ${isKali ? "kali-row" : "user-row"}`}
      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {isKali && (
        <div className="message-avatar" aria-hidden="true">
          🐈‍⬛
        </div>
      )}

      <div
        className={`message-bubble ${isKali ? "kali-bubble" : "user-bubble"}`}
      >
        <p>{message.content}</p>
      </div>
    </motion.div>
  );
}

export default ChatMessage;
