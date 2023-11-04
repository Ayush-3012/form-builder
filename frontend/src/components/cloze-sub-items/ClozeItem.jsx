/* eslint-disable react/prop-types */
const ClozeItem = ({ item }) => {
  return (
    <span className="bg-purple-600 rounded-md py-1 px-4 text-xl font-mono text-white hover:scale-110 transition ease-in-out duration-300">
      {item}
    </span>
  );
};

export default ClozeItem;
