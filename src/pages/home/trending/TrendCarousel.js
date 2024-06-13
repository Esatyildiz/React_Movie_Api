import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././../../carousel.css'

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../../../components/Genres/Genres';
import { Link } from 'react-router-dom';

const TrendCarousel = ({ movies }) => {

    const path = "https://www.themoviedb.org/t/p/w440_and_h660_face";
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                navigation={true}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        loop: false,
                        spaceBetween: 8,
                    },
                    640: {
                        slidesPerView: 2,
                        loop: false,
                        spaceBetween: 8,
                    },
                    1024: {
                        spaceBetween: 10,
                        slidesPerView: 5,
                    },
                }}
                autoplay="true"
                mousewheel="false"

            >
                {movies && movies?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Link to={`/movie/${movie.id}`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <div className='rounded-xl mb-4 cursor-pointer relative  overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:bg-opacity-40 '>
                                <img src={`${path}${movie?.poster_path}`} className='w-full' alt={movie?.title} width="216" height="324" />
                                <Genres data={movie?.genre_ids.slice(0, 3)} />
                            </div>
                            <CircleRating rating={movie?.vote_average.toFixed(1)} />
                            <span className='text-white font-medium text-xl line-clamp-1 mb-1' alt={movie?.title}>{movie?.title}</span>
                            <span className='text-sm text-white text-opacity-50 font-medium'>{movie?.release_date}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendCarousel;