/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import _ from "lodash";
import { MdAssignment, MdCategory } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";
import TypeSingleCard from "./TypeSingleCard";

const icons = [MdCategory, MdAssignment, FaSquareCheck];
const TypeCard = ({ types }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-500 p-4">
        {types?.map((type, index) => (
          <Link key={index} to={`/${_.lowerCase(type)}`}>
            <TypeSingleCard key={index} type={type} icon={icons[index]} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TypeCard;
