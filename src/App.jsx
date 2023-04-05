import { createRoot } from "react-dom/client";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <Hero name="Prova" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
