import forest from "../assets/forest.jpg";
const Card = () => {
  return (
    <>
      <div className="flex gap-5 justify-center bg-purple-300 p-4">
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
        <div>
          <div className="bg-white w-40 h-50 rounded p-1">
            <img src={forest} alt="Image" />
            <h2>Name</h2>
            <h2>About the Place</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
