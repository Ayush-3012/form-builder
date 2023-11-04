import { Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import Categorize from "./components/types/Categorize";
import Cloze from "./components/types/Cloze";
import Comprehension from "./components/types/Comprehension";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/cloze" element={<Cloze />} />
        <Route path="/comprehension" element={<Comprehension />} />
      </Routes>
    </>
  );
};

export default App;
