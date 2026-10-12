import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ChatMessage from "./ChatMessage";
import { getKaliResponse } from "../data/kaliKnowledge";
import kali_assistant from "../assets/kali_portfolio_assistant.png";

const suggestedQuestions = [
  "Featured Projects",
  "Technical Skills",
  "Work Experience",
];

function KaliAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const reduceMotion = useReducedMotion();
  const messagesEndRef = useRef(null);

  const [isTyping, setIsTyping] = useState(false);
  const replyTimers = useRef([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "nearest",
    });
  }, [messages, isTyping, reduceMotion]);

  useEffect(() => {
    const timers = replyTimers.current;
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  function handleSend(question = input) {
    const trimmed = question.trim();

    if (!trimmed || isTyping) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsTyping(true);

    const response = getKaliResponse(trimmed);

    const timer = setTimeout(() => {
      const kaliMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
      };

      setMessages((previous) => [...previous, kaliMessage]);
      setIsTyping(false);
    }, 1000);

    replyTimers.current.push(timer);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSend();
  }

  return (
    <section className="chatbot-wrapper">
      <div className="kali-image-container">
        <motion.img
          src={kali_assistant}
          className="kali-assistant"
          alt="Kali, Priscilla's portfolio assistant"
          animate={reduceMotion ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <section className="chatbot" aria-label="Portfolio assistant">
        <p className="chatbot-label">PORTFOLIO ASSISTANT</p>
        <h2>Ask me anything about Priscilla.</h2>
        <div className="suggested-questions">
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => handleSend(question)}
            >
              {question}
            </button>
          ))}
        </div>
        <div
          className="chat-messages"
          role="log"
          aria-label="Conversation with Kali"
          aria-live="polite"
        >
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isTyping && (
            <div
              className="message-row kali-row"
              role="status"
              aria-label="Kali is typing"
            >
              <div className="message-avatar" aria-hidden="true">
                🐈‍⬛
              </div>

              <div className="typing-indicator" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />

          <div ref={messagesEndRef} />
        </div>
        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my experience..."
            aria-label="Ask the portfolio assistant a question"
          />
          <button
            type="submit"
            aria-label="Send question"
            disabled={!input.trim()}
          >
            →
          </button>
        </form>
      </section>
    </section>
  );
}

export default KaliAssistant;
