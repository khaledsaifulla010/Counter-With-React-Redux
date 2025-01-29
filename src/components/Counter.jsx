const Counter = () => {
  return (
    <div>
      <div className="flex items-center justify-center border border-purple-700 py-10 w-[600px] mx-auto mt-24 gap-10 rounded-md">
        <button className="text-lg font-bold text-green-800 border border-green-300 bg-green-100 p-2 rounded-md">
          Increment
        </button>
        <h1 className="text-5xl font-bold">0</h1>
        <button className="text-lg font-bold text-red-800 border border-red-300 bg-red-100 p-2 rounded-md">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
