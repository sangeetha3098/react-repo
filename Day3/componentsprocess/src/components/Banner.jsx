const Banner = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "10px",
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "Black",
            fontSize: "36px",
          }}
        >
          Hero Banner
        </h2>
        <img
          src="./banner_image.jpg"
          alt="image"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <button
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "Red",
            color: "white",
          }}
        >
          Explore
        </button>
      </div>
    </>
  );
};
export default Banner;
