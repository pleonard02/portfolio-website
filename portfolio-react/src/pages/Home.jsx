import LocalClock from "../components/LocalClock";
import KaliAssistant from "../components/KaliAssistant";

function Home() {
  return (
    <main className="hero-layout">
      <header className="hero">
        <h1>Priscilla Leonard</h1>
        <h2>Aspiring Software Engineer</h2>

        <p>
          I build thoughtful, practical solutions shaped by curiosity,
          compassion, and real-world experience.
        </p>

        <LocalClock />
      </header>

      <KaliAssistant />
    </main>
  );
}

export default Home;
