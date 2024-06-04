import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BackdropImage from './BackdropImage';
import DetailTopBanner from './DetailTopBanner';
import TopCast from './TopCast/TopCast';

const Detail = () => {
    const { mediaType, id } = useParams();
    const { data } = useFetch(`/${mediaType}/${id}`);
    const { data: detail, isLoading, error } = useFetch(`/${mediaType}/${id}/credits`);

    console.log(detail?.data);
    return (
        <div className='pt-32'>
            <BackdropImage dataImage={data?.data?.backdrop_path} />
            <div className='container z-40 relative'>
                <DetailTopBanner data={data?.data} detail={detail?.data} />
                <TopCast cast={detail?.data?.cast} />
            </div>
        </div>
    );
};

export default Detail;