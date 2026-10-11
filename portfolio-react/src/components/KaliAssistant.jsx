import kali_assistant from "../assets/kali_portfolio_assistant.png";
function KaliAssistant() {
  return (
    <section className="chatbot-wrapper">
      <img
        src={kali_assistant}
        className="kali-assistant"
        alt="Kali, Priscilla's portfolio assistant"
      />

      <section className="chatbot" aria-label="Portfolio assistant">
        <p className="chatbot-label">PORTFOLIO ASSISTANT</p>
        <h2>Ask me anything about Priscilla.</h2>

        <div className="suggested-questions">
          <button type="button">Featured Projects</button>
          <button type="button">Technical Skills</button>
          <button type="button">Work Experience</button>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask about my experience..."
            aria-label="Ask the porfolio assistance a question"
          />

          <button type="button" aria-label="Send question">
            →
          </button>
        </div>
      </section>
    </section>
  );
}

export default KaliAssistant;
