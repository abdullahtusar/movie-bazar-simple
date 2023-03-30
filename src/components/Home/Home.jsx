import React, { useEffect, useState } from 'react';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';
import './Home.css'
const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[]);
    console.log(movies);
    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => <SingleMovieCard
                        key={movie.movieName}
                        movie = {movie}
                    ></SingleMovieCard>)
                }
            </div>
        </div>
    );
};

export default Home;