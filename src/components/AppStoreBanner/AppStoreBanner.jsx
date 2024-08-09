import React from 'react'
import pattern from '../../assets/website/pattern.jpeg'
import PlayStoreImg from '../../assets/website/play_store.png'
import AppStoreImg from '../../assets/website/app_store.png'



const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const AppStoreBanner = () => {
  return (
    // container
    <div className='container pb-14'>
        <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
        >
            <div>
                {/* text */}
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 data-aos="fade-up" className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Get Started With Our App</h1>
                    <p data-aos="fade-up" className='text-center sm:px-20'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut vel ex et veritatis!
                    </p>
                </div>
                {/* text end */}
                {/* app image */}
                <div data-aos="fade-up" className='flex justify-center flex-wrap items-center gap-4'>
                    <a href="#">
                        <img src={PlayStoreImg} alt=""
                        className='max-w-[150px] sm:max-w-[120px] mad:max-w-[200px]' />
                    </a>
                    <a href="#">
                        <img src={AppStoreImg} alt="" 
                        className='max-w-[150px] sm:max-w-[120px] mad:max-w-[200px]'/>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AppStoreBanner