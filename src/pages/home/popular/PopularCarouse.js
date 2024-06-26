import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././../../carousel.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../../../components/Genres/Genres';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../../components/LazyLoadImage/Img';

const PopularCarouse = ({ data: movies, isLoading, endPoint }) => {
    const path = "https://www.themoviedb.org/t/p/w440_and_h660_face";

    const scrollTo = () => {
        window.scrollTo(0, 0);
    }

    // loading skeleton method
    const skItem = () => {
        return (
            <Skeleton width={225} height={420} style={{ marginBottom: 15 }}>
                <div className="posterBlock">
                    <Skeleton height={324} width={216} />
                </div>
                <div className="textBlock">
                    <Skeleton height={24} width={`80%`} style={{ marginTop: 10 }} />
                    <Skeleton height={20} width={`60%`} />
                </div>
            </Skeleton>
        )
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
                autoplay={{ delay: 3000 }} // Autoplay object with delay
                mousewheel={false}
            >
                {movies?.map((movie) => (
                    <SwiperSlide key={movie?.id}>
                        <Link
                            to={`/${endPoint}/${movie.id}`}
                            onClick={() => scrollTo()}
                        >
                            <div className='rounded-xl mb-4 cursor-pointer relative overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:bg-opacity-40'>
                                <Img src={`${path}${movie?.poster_path}`} className='w-full h-[325px]' alt={movie?.title} width="216" height="324" />
                                <Genres data={movie?.genre_ids.slice(0, 3)} />
                            </div>
                            <CircleRating rating={movie?.vote_average.toFixed(1)} />
                            <span className='text-white font-medium text-xl line-clamp-1 mb-1' alt={movie?.title || movie?.name}>{movie?.title || movie?.name}</span>
                            <span className='text-sm text-white text-opacity-50 font-medium'>{movie?.release_date || movie?.first_air_date}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularCarouse;