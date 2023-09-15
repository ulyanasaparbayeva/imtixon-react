import React from 'react';
import {Container} from "../../utils/Utils";
import {Swiper, SwiperSlide} from "swiper/react";
import './AdventureMoviesList.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import { Autoplay } from 'swiper/modules';

const AdventureMoviesList = ({ movies }) => {
  return (
    <div className="AdventureMoviesList">
      <Container>
        <h2 className="adventure-movies-list-title">Adventure Movies</h2>
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
          slidesPerView={1}
          autoplay={{delay: 1000}}
          modules={[Autoplay]}
        >
          {movies && movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <Link to={`/moviesdetails/${movie.id}`}>
                <img className="Animated-Movies-List-images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                     alt={movie.title} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default AdventureMoviesList;
