import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././../../carousel.css';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CircleRating from '../circleRating/CircleRating';

const TopRotadetCarousel = ({ topMovies }) => {

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
                {topMovies.map((movieTitle) => (
                    <SwiperSlide key={movieTitle.id}>
                        <div className=''>
                            <div className='rounded-xl mb-4 cursor-pointer relative  overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:bg-opacity-40 '>
                                <img src={`${path}${movieTitle?.poster_path}`} className='w-full' alt={movieTitle?.title} width="216" height="324" />
                            </div>
                            <CircleRating rating={movieTitle?.vote_average.toFixed(1)} />
                            <a href="#!" className='text-white font-medium text-xl line-clamp-1 mb-1' alt={movieTitle?.title}>{movieTitle?.title}</a>
                            <span className='text-sm text-white text-opacity-50 font-medium'>{movieTitle?.release_date}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopRotadetCarousel;