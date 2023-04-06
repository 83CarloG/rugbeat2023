import { createRoot } from "react-dom/client";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
