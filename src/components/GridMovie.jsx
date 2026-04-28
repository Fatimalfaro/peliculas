import React from "react";
import CardMovie from "./CardMovie";

const GridMovie = ({ movies }) => {
  return (
    <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie}></CardMovie>
      ))}
    </div>
  );
};

export default GridMovie;