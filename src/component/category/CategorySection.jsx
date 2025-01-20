import React from "react";
import movieService, { useEffect, useState } from "../../service/movieServie";
import Spinner from "../spinner/Spinner";

const CategorySection = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieService
      .fetchMovieGenreList()
      .then(({ genres }) => {
        setCategory(genres);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="app-container">
      <h3></h3>
      <p>
        На нашем сайте вы найдете подходящее вам фильмы и сериалов на любой вкус
      </p>
      <div></div>
    </div>
  );
};

export default CategorySection;
