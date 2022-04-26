import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Main/About/AboutPage/AboutPage";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
