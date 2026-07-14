import Movie from "../pages/Movie"

const MoviePage = () => {
    const heroes = ["Vijay", "Surya", "Ajith", "Dhanush"]
    return (
        <>
            <Movie hero={heroes} />
        </>
    )
}

export default MoviePage