import React, { useEffect, useState } from "react";
import App from "../App";
import { dataFilm } from "../DB/dataFilm";
import { sideBarFilms } from "../DB/sideBarFilms";
import { sideBarFilm } from "../DB/sideBarFilm";
function Sidebar(props) {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d3e3228a")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((dataFilm) => {
        setFilm(dataFilm);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }, []);

  return (
    <div className="sideBar">
      {
        <div>
          <div className="topMovies">
            {/* {Array.isArray(film)
              ? film.map((dataFilms) => { */}
            <div className="row">
              <div className="col-3">
                <img
                  className="topMoviesViews"
                  src={film.Poster}
                  alt={film.Title}
                ></img>
              </div>
              <div className="col-6">
                <label>{film.Title}</label>
              </div>
              <div className="col-3 ">
                <div className="topMoviesViewsBoxDes">
                  <p className="topMoviesViewsDes">IMDB:{film.imdbRating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Sidebar;
