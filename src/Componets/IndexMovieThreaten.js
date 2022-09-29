import React, { useState, useRef, useEffect, memo } from "react";
import App from "../App";
import { dataFilm } from "../DB/dataFilm";
import Trailer from "./Trailer/Trailer";
import useCheck from "../CustomHook/Event";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

function IndexMovieThreaten(props) {
  ////////////////////////////////////////////////////
  function onOverPlay() {
    document.getElementById("overlay").style.display = "block";

  }
  function offOverPlay() {
    document.getElementById("overlay").style.display = "none";
   
  }
  const [open, setOpen] = useState(false)
  let openTrailer = () => {
    if(open == false){
      setOpen(true)
      return onOverPlay();
    }else{
      setOpen(false)    
      return offOverPlay()
    }
  }
  const addTocart = () => {
    props.addTocart(props.data);
  }


  /////////////////////////////////////////////////
  useEffect(() => {}, []);
  ///////////////////////////////////////////////////
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }



  // const arrRef = useRef([totalPrice]);
  // console.log(totalPrice);
  //////////check description///////////////////
  //let dataCustom = useCheck(url).dataCustom;
  let {
    dataCustom: dataCustom,
    error: error,
    loading: loading,
  } = useCheck("http://www.omdbapi.com/?i=tt3896198&apikey=d3e3228a");

  ////////////////////////////////////////////
  return (
    <div className="col-6 col-md-3 col-sm-4 IndexMovieThreaten">
      {
        <div className="bgUpdateFilm">
          <div className="UpdateFilmBoxImg">
            <img
              className="UpdateFilmBoxImgSmal"
              src={props.data.img}
              alt={props.data.name}
            ></img>
            <div class="trailer">
              <div class="trailerFilm">
                <Button variant="danger" onClick={openTrailer}>Trailer</Button>{" "}                
                <Button variant="success" className="btnSuccess ">
                  <label className="successTitle">
                    {" "}
                    {props.price ? props.price : "liên hệ"}{" "}
                  </label>
                </Button>{" "}
              </div>
            </div>
          </div>
          <div>
            <label
              className="UpdateFilmBoxDescriptionTitle"
              style={{ color: "white" }}
            >
              {props.name}
            </label>
          </div>
          
          <div id="overlay">
            {" "}
            <div className="container">
              <div>
                <Trailer></Trailer>
              </div>{" "}
              <br></br>
              <div>
                <Button variant="danger" onClick={openTrailer}>
                  Cancel
                </Button>{" "}
              </div>
            </div>
          </div>



          <Row>
            <Col className="labelRatedBox">
              <div className="labelRated">
                <label className="labelRatedRed">
                  {dataCustom ? dataCustom.Rated : "Rated:0"}
                </label>
              </div>
            </Col>

            <Col className="UpdateFilmBoxDescriptions">
              <div className="UpdateFilmBoxDescriptionsViews">
                <span className="UpdateFilmBoxDescriptionsViewsNumber"></span>
              </div>
              <div className="col UpdateFilmBoxDescriptionsBtn">
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    class="btn btn-info updateFilmBoxBtnBuy"
                    value={props.data.id}
                    onClick={addTocart}
                  >
                    <label
                      class="updateFilmBoxBtnText"
                      style={{ color: "white" }}
                    >
                      Mua Ngay
                    </label>
                  </button>
                </form>
              </div>
            </Col>
            <div className="borderDescription"></div>
          </Row>
        </div>
      }
    </div>
  );
}

export default memo(IndexMovieThreaten);
