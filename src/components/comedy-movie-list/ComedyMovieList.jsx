import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './ComedyMoviesList.scss'
import {Container} from "../../utils/Utils";
import {Link} from "react-router-dom";
import {Autoplay } from 'swiper/modules';

const ComedyMovieList = ({ movies }) => {
  return (
    <div className="ComedyMovieList">
      <Container>
        <div className="comedy-movie-list">Comedy movies</div>
        <Swiper
          breakpoints={{
            360: {
              width: 360,
              slidesPerView: 1.1,
              spaceBetween: 50
            },
            460: {
              width: 460,
              slidesPerView: 1.7,
              spaceBetween: 50
            },
            560: {
              width: 560,
              slidesPerView: 1.9,
              spaceBetween: 50
            },
            760: {
              width: 760,
              slidesPerView: 4,
              spaceBetween: 50
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }}
          loop={true}
          autoplay={{delay: 1000}}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay]}
        >
          {movies && movies.map(movie => (
            <SwiperSlide>
              <Link to={`/moviesdetails/${movie.id}`}>
              <div key={movie.id}>
                  <img className="comedy-movie-list-images"
                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ComedyMovieList;
