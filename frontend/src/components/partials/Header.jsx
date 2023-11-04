import { Link } from "react-router-dom";
import { LiaGithub, LiaHomeSolid, LiaLinkedin } from "react-icons/lia";

const Header = () => {
  return (
    <>
      <div className="flex bg-slate-800 justify-center gap-5 my-2 py-2">
        <Link to="/">
          <LiaHomeSolid className="text-5xl text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link to="/">
          <LiaLinkedin className="text-5xl text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <Link to="/">
          <LiaGithub className="text-5xl text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default Header;
