import axios from "axios";
import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import ReactDOM from "react-dom";
import Modal from "./Modal";
import useModal from "./useModal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Iframe from "react-iframe";
import "./Home.css";
const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  params: { list: "top_boxoffice_200", limit: 15 },
  headers: {
    "X-RapidAPI-Key": "18ed8068bemsh0e28e6d1af6ef66p1a98c4jsnc64d87faea08",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};
const optiontoplist = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  params: { list: "top_rated_english_250" },
  headers: {
    "X-RapidAPI-Key": "18ed8068bemsh0e28e6d1af6ef66p1a98c4jsnc64d87faea08",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export default function Home() {
  const [listmovie, setlistmovie] = useState();
  const [toplistmovie, settoplistmovie] = useState();
  const { isShowing, toggle } = useModal();
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        // console.log(response.data);
        // setlistmovie(response.data);
        const list = response.data.results;
        setlistmovie(list);
        console.log(listmovie);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(optiontoplist)
      .then((response) => {
        // console.log(response.data);
        // setlistmovie(response.data);
        const toplist = response.data.results;
        settoplistmovie(toplist);
        console.log(toplistmovie);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const stopMovie = (e) => {
    e.target.pause();
    // e.target.poster()
    console.log('off');
  }

  const playMovie = (e) => {
    e.target.play();
    console.log('on');
  }
  return (
    <div className="container">
      <button className="button-default" onClick={toggle}>
        Show Modalll
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
      <h2>Top Box Office</h2>
      <Swiper
        navigation={{
          clickable: true,
        }}
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="topbox">
          {listmovie?.map((item, index) => {
            if (item.primaryImage !== null) {
              return (
                <SwiperSlide>
                  <Link to="/DetailsMovie">
                    <div className="card" id="card" key={index}>
                      <video
                        onMouseOver={playMovie}
                        onMouseOut={stopMovie}
                        src='https://video-hover-1.superhi.com/1-island.mp4'
                        poster={item.primaryImage.url}
                        preload='none'
                        loop />
                      {/* <img src={item.primaryImage.url} alt="" /> */}
                      <p>{item.titleText.text}</p>
                      <p>{item.releaseYear.year}</p>
                      {/* <Iframe
                width="170px"
                height="200px"
                id="videoFrame"
                display="initial"
                position="relative"
                allow="fullscreen"
                frameBorder="0"
                src={`https://v2.vidsrc.me/embed/${item.id}`}
              /> */}
                    </div>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
      <h2 className="txt">Top Rated Movies</h2>
      <Swiper
        navigation={{
          clickable: true,
        }}
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <h2>Top Box Office</h2> */}
        <div className="toplist">
          {toplistmovie?.map((item, index) => {
            if (item.primaryImage !== null) {
              return (
                <SwiperSlide>
                  <Link to="/DetailsMovie">
                    <div className="card" key={index}>
                      <img src={item.primaryImage.url} alt="" />
                      <p>{item.titleText.text}</p>
                      <p>{item.releaseYear.year}</p>
                      {/* <Iframe
                width="170px"
                height="200px"
                id="videoFrame"
                display="initial"
                position="relative"
                allow="fullscreen"
                frameBorder="0"
                src={`https://v2.vidsrc.me/embed/${item.id}`}
              /> */}
                    </div>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
    </div>
  );
}
