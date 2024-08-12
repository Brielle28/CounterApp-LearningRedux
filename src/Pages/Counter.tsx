import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Counter: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full h-screen bg-purple-300 gap-2">
        <div className="flex items-center justify-between gap-2">
          <IoMdHeartEmpty  className="size-[150px] text-gray-400"/>
          <h1 className="text-[150px]">0.00</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <button>
            {" "}
            <FaPlus />{" "}
          </button>
          <button>
            {" "}
            <FaMinus />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
