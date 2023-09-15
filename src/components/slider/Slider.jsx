import './Slider.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Polygon from '../../images/Polygon.png'
import {Container} from "../../utils/Utils";
import {Link} from "react-router-dom";
import {Autoplay } from 'swiper/modules';



const Slider = ({movies}) => {
  return (
    <div className="banner">
        <div className={'banner-carousel-wrapper'}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{delay: 2000}}
            loop={true}
            spaceBetween={10}
            draggable={true}
            className="banner-swiper">
            {movies?.map(movie => (
              <SwiperSlide key={movie.id}>
                <div>
                  <Link to={`/moviesdetails/${movie.id}`}>
                    <img className="banner-images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title} />
                  </Link>
                </div>
                <Container>
                  <div className="banner-group">
                    <h3 className="banner-title">{movie.title}</h3>
                    <div className="button-group">
                      <button className="play-btn">
                        <img src={Polygon} alt="Play Icon" />
                        Play
                      </button>
                      <button className="more-btn">More info </button>
                    </div>
                  </div>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}
export default Slider