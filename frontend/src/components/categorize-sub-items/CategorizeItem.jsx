/* eslint-disable react/prop-types */
const CategorizeItem = ({ item }) => {
  return (
    <span className="bg-red-600 rounded-md py-1 px-4 text-xl font-mono text-white hover:-translate-y-2 transition ease-in-out duration-300">
      {item}
    </span>
  );
};

export default CategorizeItem;
