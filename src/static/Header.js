import React from 'react';
import { Icon } from '../icons/icons';

const Header = () => {
    return (
        <header className='bg-header-backdrop backdrop-blur w-full h-16 translate-y-0 flex items-center duration-200 ease-in-out z-10 fixed'>
            <div className='container flex items-center justify-between px-5'>
                <div>
                    <img src='/img/movix-logo.svg' height="50" width="163" alt='logo' />
                </div>
                <ul className='flex items-center'>
                    <li className='h-16 flex items-center mx-4 relative font-medium cursor-pointer text-white'>Movies</li>
                    <li className='h-16 flex items-center mx-4 relative font-medium cursor-pointer text-white'>TV Shows</li>
                    <li className='h-16 flex items-center mx-4 relative font-medium cursor-pointer text-white'>
                        <Icon name="search" />
                    </li>
                    <li>
                        <a className='text-white' href='/login'>Giriş Yap</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;