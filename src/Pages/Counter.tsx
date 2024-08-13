import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { increment, decrement } from "../state/Counter/CounterSlice"; 
import { FaHeart } from "react-icons/fa6";

const Counter: React.FC = () => {
  // Accessing the state from the Redux store
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-slate-300 gap-2">
      <div className="flex items-center justify-between gap-2">
        {count > 0.00 ? (
          <FaHeart className="text-[150px] text-red-500" />
        ) : (
          <IoMdHeartEmpty className="text-[150px] text-gray-400" />
        )}
        <h1 className="text-[150px]">{count.toFixed(2)}</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <button onClick={() => dispatch(increment())}>
          <FaPlus />
        </button>
        <button onClick={() => dispatch(decrement())}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
