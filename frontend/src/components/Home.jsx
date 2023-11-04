/* eslint-disable react/jsx-key */
import TypeCard from "./type-card/TypeCard";

const types = ["Categorize", "Cloze", "Comprehension"];
const Home = () => {
  return (
    <div>
      <TypeCard types={types} />
    </div>
  );
};

export default Home;
