import {useEffect, useState} from "react";

const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
]

const App = () => {

    const [genre, setGenre] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(initialMovies);

    useEffect(() => {
        const filteredArray = initialMovies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase())
        if(genre === ''){
            setFilteredMovies(initialMovies)
        } else {
            setFilteredMovies(filteredArray)
        }
    }, [genre]);

    return (
        <div>
            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                name="movies" id="movies">
                <option value="">Generi</option>
                <option value="fantascienza">Fantascienza</option>
                <option value="thriller">Thriller</option>
                <option value="romantico">Romantico</option>
                <option value="azione">Azione</option>
            </select>

            <ul>
                {filteredMovies.map(movie => <li>{movie.title}</li>)}
            </ul>
        </div>
    );
};

export default App;