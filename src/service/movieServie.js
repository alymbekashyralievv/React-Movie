import axios from "../axios";

class MovieServie {
  async fetchAllMovies() {
    const { data } = await axios.get("discover/movie?language=ru");
    return data;
  }

  async fetchMovieGenreList() {
    try {
      const { data, status } = await axios.get("genre/movie/list");
      if (status !== 200) {
        throw new Error("Failed fetching movie genre list");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const movieService = new MovieServie();
export default movieService;
