export default function FilmsPresentation({ listOfFilms }) {
    console.log(listOfFilms);
    return (
        <div className="container">
            {
                listOfFilms.map((film) => (
                    <div className="column">
                        <div className="card">
                            <div className="poster">
                                <img src={film.Image} />
                            </div>
                            <div className="info">
                                <h2>{film.Title}</h2>
                                <p className="year">{film.Year}</p>
                                <p className="nation">{film.Nation}</p>
                                <p className="detail"><button>Detail</button></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}