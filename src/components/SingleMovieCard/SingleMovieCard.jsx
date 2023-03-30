import React from 'react';

const SingleMovieCard = (props) => {
    const {poster, movieName, description, watchTime, imdbRating} = props.movie;
    console.log(props);
    return (
        <div className="movie-card card mt-3">
            <div className="movie-poster">
                <img className='w-25' src={poster} alt="" />
                <h2>{movieName}</h2>
                <p>{description}</p>
                <div className="timeAndRating d-flex justify-content-around">
                    <p>WatchTime: {watchTime}</p>
                    <p>Rating: {imdbRating}</p>
                </div>
                <button className='btn btn-danger w-75'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleMovieCard;