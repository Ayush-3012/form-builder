import Categories from "../categorize-sub-items/Categories";
import CategorizeItem from "../categorize-sub-items/CategorizeItem";

const categoriesItems = ["Paris", "Japan", "Brazil", "USA", "Madrid"];
const categories = ["Country", "City"];
const Categorize = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-mono my-5 font-bold text-emerald-700">
        Categorize the following
      </h2>
      <div className="my-4 flex gap-5 justify-center items-center text-center flex-wrap py-2">
        {categoriesItems?.map((item, index) => (
          <CategorizeItem key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 max-sm:flex-col">
        {categories?.map((category, index) => (
          <Categories key={index} category={category} index={index} />
        ))}
      </div>
    </>
  );
};

export default Categorize;
