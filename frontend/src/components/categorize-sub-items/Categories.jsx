/* eslint-disable react/prop-types */
const Categories = ({ category, index }) => {
  return (
    <div className="flex flex-col gap-5 w-48 max-sm:w-72">
      <span className={`${index === 0 ? "bg-red-400" : "bg-yellow-400"} px-4 text-center font-mono py-1 rounded-md text-xl`}>
        {category}
      </span>
      <div className={`${index === 0 ? "bg-red-400" : "bg-yellow-400"}  h-80 rounded-md`}></div>
    </div>
  );
};

export default Categories;
