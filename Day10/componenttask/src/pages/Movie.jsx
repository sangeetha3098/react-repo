const Movie = ({ hero }) => {
    return (
        <>
            <div className="m-4 bg-amber-200">
                <ol >
                    {hero.map((mov, i) => (
                        <li key={i} className="p-3">{mov}</li>
                    ))}
                </ol>

            </div>
        </>
    )
}

export default Movie