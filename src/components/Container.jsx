import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import Header from "./Header";
import MovieList from "./MovieList";

const Container = () => {
  return (
    <div className="container">
      <Search />
      <Filter />
      <Header />
      <MovieList />
    </div>
  );
};

export default Container;
