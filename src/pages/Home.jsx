import Counter from "../components/Counter";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-purple-800 text-center mt-12 font-bold">
        Counter With React-Redux
      </h1>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
