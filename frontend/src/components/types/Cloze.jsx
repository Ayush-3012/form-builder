import Blanks from "../cloze-sub-items/Blanks";
import ClozeItem from "../cloze-sub-items/ClozeItem";

const clozeItems = ["Axis", "1939", "Italy", "1945", "Germans", "1920"]

const Cloze = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-mono my-5 font-bold text-emerald-700">
        Fill in the blanks
      </h2>
      <div className="my-4 flex gap-5 justify-center items-center text-center flex-wrap py-2">
        {clozeItems?.map((item, index) => (
          <ClozeItem key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center text-xl items-center text-center gap-2 flex-wrap p-5">
        World War II was fought between the the Allies and the <Blanks /> powers. It started in <Blanks /> and ended in <Blanks />.
      </div>
    </>
  );
};

export default Cloze;
