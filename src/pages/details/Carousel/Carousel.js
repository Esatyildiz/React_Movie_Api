import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '.././../../carousel.css'

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CircleRating from '../../home/circleRating/CircleRating';
import Genres from '../../../components/Genres/Genres';
import { Link, useNavigate } from 'react-router-dom';

const Carousel = ({ isLoading, data: smilar }) => {

    const path = "https://www.themoviedb.org/t/p/w440_and_h660_face";

    const navigate = useNavigate();

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
                {smilar?.map((smilarItem) => (
                    <SwiperSlide key={smilarItem?.id}>
                        <Link as={Link} to={`/movie/${smilarItem.id}`}
                            onClick={() => scrollTo()}
                        >
                            <div className='rounded-xl mb-4 cursor-pointer relative  overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:bg-opacity-40 '>
                                <img src={`${path}${smilarItem?.poster_path}`} className='w-full' alt={smilarItem?.title} width="216" height="324" />
                                <Genres data={smilarItem?.genre_ids.slice(0, 3)} />
                            </div>
                            <CircleRating rating={smilarItem?.vote_average.toFixed(1)} />
                            <span className='text-white font-medium text-xl line-clamp-1 mb-1' alt={smilarItem?.title || smilarItem?.name}>{smilarItem?.title || smilarItem?.name}</span>
                            <span className='text-sm text-white text-opacity-50 font-medium'>{smilarItem?.release_date || smilarItem?.first_air_date}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
