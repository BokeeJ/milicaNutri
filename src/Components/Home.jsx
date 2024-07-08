import React from 'react';

function Home() {
    return (
        <div className='flex justify-center'>
            <div className='relative w-[600px] h-[600px]'>
                <img className='w-full h-full rounded-md' src="/profil.webp" alt="" />
                <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-md'></div>
            </div>
        </div>
    );
}

export default Home;
