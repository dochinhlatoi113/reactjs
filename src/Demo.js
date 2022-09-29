import React, { useCallback, useEffect, useState } from "react";
import Header from "./Componets/Header";
import Sidebar from "./Componets/Sidebar";
import Index from "./Componets/Index";
import Menu from "./Componets/Menu";
import Carousel from "react-bootstrap/Carousel";
import IndexMovieThreaten from "./Componets/IndexMovieThreaten";
import { sideBarFilms } from "./DB/sideBarFilms";
import { Button } from "bootstrap";

function Demo() {
  const [product,setProduct] = useState([])
  

  var addTocart = (movies) => {
    let checkMoviesId = product.findIndex(movie => movie.id === movies.id);
   if(checkMoviesId > -1 ){  
      let clone = [...product]
      clone[checkMoviesId].quantity += 1
      setProduct(clone)
   }else { 
      movies.quantity = 1
      setProduct([
        ...product,
        movies          
      ])
     
    }
  };

  console.log(product)
 




  ///////////////////////////////////////////
  let titleNewMovies = "Dự kiến khởi chiếu";
  let titleUpdatesNewMovies = "Phim mới cập nhật";
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let scrollToTop = () => {
      if (window.scrollY >= 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollToTop);

    // clean up
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  return (
    <div>
      {
        <div className="">
          <div className="home">
            <div className="page">
              <div>
                <Header></Header>
              </div>
              <div className="pageMenu">
                <Menu></Menu>
              </div>
            </div>
          </div>
          <div className="index">
            <div className="pageIndex">
              <div className="">
                <Index></Index>
              </div>

              <div className="row content">
                <div className="col-xs-3 col-lg-3">
                  <div>
                    <h2 className="sideBarRepairMovieTitle">
                      {titleNewMovies}
                    </h2>
                  </div>
                  <div className="sideBarRepairMovieTop">
                    <div className="sideBarRepairMovieBorder">
                      <div className="sideBarRepairMovieBorderbg">
                        <div>
                          <div className="sideBarRepairMovieBorderbgBox">
                            <p className="sideBarRepairMovieBorderbgDes">
                              {sideBarFilms[0].sub}
                            </p>
                          </div>
                          <label className="sideBarRepairMovieBorderbgTitle">
                            {sideBarFilms[0].name}
                          </label>
                        </div>
                      </div>
                      <Sidebar></Sidebar>
                    </div>
                  </div>
                </div>
                <div className="col-xs-3 col-lg-9 UpdateFilmBox">
                  <h2 className="sideBarRepairMovieTitle">
                    {titleUpdatesNewMovies}
                  </h2>

                  <div className="row UpdateFilm">
                    {sideBarFilms.map((data) => (
                      <IndexMovieThreaten
                       data = {data}
                       addTocart={addTocart}
                      ></IndexMovieThreaten>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              {scroll && <button className="btnGoTop">GoTop</button>}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Demo;
