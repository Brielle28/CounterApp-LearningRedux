import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { increment, decrement } from "../state/Counter/CounterSlice"; 
import { FaHeart } from "react-icons/fa6";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-slate-300 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10">
      <div className="flex items-center justify-between gap-2">
        {count > 0.00 ? (
          <FaHeart className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-red-500" />
        ) : (
          <IoMdHeartEmpty className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-gray-400" />
        )}
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px]">{count.toFixed(2)}</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:gap-8 lg:gap-2 xl:gap-12">
        <button
          onClick={() => dispatch(increment())}
          className="p-[2px] text-white rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          <FaPlus className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[20px] xl:text-[20px]" />
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="p-[2px] text-white rounded-full hover:bg-red-600 transition-all duration-300"
        >
          <FaMinus className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[20px] xl:text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
