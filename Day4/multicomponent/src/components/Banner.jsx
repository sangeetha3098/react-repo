import roomImage from "../assets/room.webp";

const Banner = () => {
  return (
     <div className="w-full">
      <img
        src={roomImage}
        alt="Room"
        className="w-full h-90"
      />
    </div>
  );
};

export default Banner;
