import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import './MovieList.scss'
import {Container} from "../../utils/Utils";
import {Link} from "react-router-dom";
import {  Autoplay } from 'swiper/modules';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <div className="movie-list-title">Hollywood Movies </div>
      <Swiper className="swiper__slide"
              breakpoints={{
                360: {
                  width: 360,
                  slidesPerView: 1.1,
                },
                460: {
                  width: 460,
                  slidesPerView: 1.7,
                },
                560: {
                  width: 560,
                  slidesPerView: 1.9,
                },
                760: {
                  width: 760,
                  slidesPerView: 50,
                },
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 50
                }
              }}
              autoplay={{delay: 1000}}
              modules={[Autoplay]}
              loop={true}
              spaceBetween={50}
              slidesPerView={1}>
        { movies && movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <Link to={`/moviesdetails/${movie.id}`}>
              <img className="movie-list-images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                   alt={movie.title} />
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </Container>
  );
};

export default MovieList;
