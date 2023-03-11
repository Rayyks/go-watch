import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import MovieContext from "../MovieContex";

import { motion } from "framer-motion";

const MovieList = () => {
  const { filtered, fetchPupular, header, setActiveGenre } =
    useContext(MovieContext);

  useEffect(() => {
    if (header === "Trending") {
      fetchPupular();
    }
  }, [header]);
  return (
    <>
      <motion.div layout className="popular-movies">
        {filtered.map(() => {
          return <Movie key={Movie.id} movie={Movie} />;
        })}
      </motion.div>
      {filtered.legth === 0 && <p className="info">No movies to display</p>}
    </>
  );
};

export default MovieList;
