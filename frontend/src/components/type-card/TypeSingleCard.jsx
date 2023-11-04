/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypeSingleCard = ({ type, icon: Icon }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, type.length * 150);
    return () => clearInterval(interval);
  });

  return (
    <div className="rounded-xl bg-slate-800 p-4 flex flex-col gap-2 hover:shadow-[1px_1px_20px_rgb(52,211,153)] hover:-translate-y-2 transition ease-in-out duration-300">
      <div className="py-10 flex justify-center rounded-t-md bg-slate-600 items-center gap-3 max-md:flex-col">
        <motion.div
          animate={{
            x: [-20, -10, 0, 10, 20, 10, 0, -10, -20],
            y: [-10, -5, 0, -5, -10, 5, 0, -5, -10],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Icon className="text-8xl text-white cursor-pointer hover:text-black hover:scale-110 transition duration-200 ease-in-out max-md:text-5xl" />
        </motion.div>
        <motion.div>
          {type?.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={
                isAnimating ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-5xl font-mono text-white max-md:text-4xl"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="bg-slate-600 flex items-center justify-center rounded-b-md gap-4 py-5 max-md:flex-col">
        <Icon className="text-6xl text-fuchsia-400 hover:text-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer max-md:text-4xl" />
        <span className="text-5xl font-mono text-emerald-400 max-md:text-3xl">
          {type}
        </span>
      </div>
    </div>
  );
};

export default TypeSingleCard;
