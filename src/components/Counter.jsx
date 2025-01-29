import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="border border-purple-700 py-10 w-[800px] mx-auto rounded-md mt-24">
        <div className="flex items-center justify-center  gap-10 ">
          <button
            onClick={() => dispatch(increment())}
            className="text-lg font-bold text-green-800 border border-green-300 bg-green-100 p-2 rounded-md"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="text-lg font-bold text-purple-800 border border-purple-300 bg-purple-100 p-2 rounded-md"
          >
            Increment By 5
          </button>
          <h1 className="text-5xl font-bold">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="text-lg font-bold text-red-800 border border-red-300 bg-red-100 p-2 rounded-md"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(decrementByAmount(5))}
            className="text-lg font-bold text-pink-800 border border-pink-300 bg-pink-100 p-2 rounded-md"
          >
            Decrement By 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
