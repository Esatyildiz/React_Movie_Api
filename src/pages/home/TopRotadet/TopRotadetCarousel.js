import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././../../carousel.css';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../../../components/Genres/Genres';
import { Link } from 'react-router-dom';
import Img from '../../../components/LazyLoadImage/Img';

const TopRotadetCarousel = ({ data, endPoint }) => {

    const path = "https://www.themoviedb.org/t/p/w440_and_h660_face";
    const scrollTo = () => {
        window.scrollTo(0, 0);
    }

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
                {data?.map((movieTitle) => (
                    <SwiperSlide key={movieTitle.id}>
                        <Link as={Link}
                            to={`/${endPoint}/${movieTitle.id}`}
                            onClick={() => scrollTo()}
                        >
                            <div className='rounded-xl mb-4 cursor-pointer relative  overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:bg-opacity-40 '>
                                <Img src={`${path}${movieTitle?.poster_path}`} className='w-full h-[325px]' alt={movieTitle?.title} width="216" height="324" />
                                <Genres data={movieTitle?.genre_ids.slice(0, 3)} />
                            </div>
                            <CircleRating rating={movieTitle?.vote_average.toFixed(1)} />
                            <span className='text-white font-medium text-xl line-clamp-1 mb-1' alt={movieTitle?.name || movieTitle?.title}>{movieTitle?.name || movieTitle?.title}</span>
                            <span className='text-sm text-white text-opacity-50 font-medium'>{movieTitle?.release_date}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopRotadetCarousel;