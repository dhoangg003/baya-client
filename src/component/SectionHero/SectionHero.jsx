import React from "react";
import { motion } from "framer-motion";

const SectionHero = () => {
  return (
    <motion.section
      className="dark:text-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.1XtJxAcfGkf7ry8Q5Scl3gHaFj&pid=Api&P=0&h=220"
            alt=""
            className="rounded-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <motion.h1
            className="text-5xl font-bold leadi sm:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Phần mềm</span>
            <br />
            <span>quản lý </span>
            <br />
            <span>bán hàng </span>
            <br />
            <span>phổ biến nhất</span>
          </motion.h1>
          <br />
          <motion.div
  className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <a
    rel="noopener noreferrer"
    className="px-8 py-3 text-xl font-semibold  text-yellow-700 rounded-full  border-2 border-yellow-700 hover:bg-yellow-700 hover:text-white transition duration-300"
  >
    Dùng thử miễn phí
  </a>
  <a
  rel="noopener noreferrer"
  className="px-8 py-3 text-xl font-semibold rounded-full border-2 hover:border-yellow-700 hover:text-white bg-yellow-700 text-white transition duration-300"
>
  Khám phá
</a>
</motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionHero;
