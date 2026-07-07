import "./MovieCard.css";
import moviePoster from "../assets/nature.jpg";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img src={moviePoster} alt="Movie Poster" className="movie-image" />

      <div className="movie-content">
        <h2>Leo</h2>
        <h4>Hero: Vijay</h4>
        <p>Collection: ₹620 Crores</p>
      </div>
    </div>
  );
};

export default MovieCard;