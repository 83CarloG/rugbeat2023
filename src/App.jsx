import { createRoot } from "react-dom/client";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="main_container">
      <Footer />
      <Hero name="Prova" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
