import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
