import React from 'react';
import Banner from './heroBanner/Banner';
import Popular from './popular/Popular';
import TopRotadet from './TopRotadet/TopRotadet';
import Trending from './trending/Trending';

const Home = () => {
    return (
        <>
            <Banner />
            <Trending />
            <Popular />
            <TopRotadet />
        </>
    );
};

export default Home;