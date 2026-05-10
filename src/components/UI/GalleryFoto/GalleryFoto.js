import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './GalleryFoto.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import Foto_one from '../../imgs/one.webp'
import Foto_two from '../../imgs/two.webp'
import Foto_thee from '../../imgs/three.webp'
import Foto_four from '../../imgs/four.webp'
import Foto_five from '../../imgs/five.webp'
import Foto_six from '../../imgs/six.webp'
import Foto_seven from '../../imgs/seven.webp'
import Foto_eight from '../../imgs/eight.webp'
//import Foto_nine from '../../imgs/nine.webp'
import Foto_ten from '../../imgs/ten.webp'
import Kitchen from '../../imgs/Kitchen.webp'

export default function GalleryFoto() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="GalleryFoto"
            >
                <SwiperSlide><img src={Kitchen} alt={'Kitchen'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_one} alt={'Foto_one'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_two} alt={'Foto_two'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_thee} alt={'Foto_thee'} /></SwiperSlide>

                <SwiperSlide><img src={Foto_four} alt={'Foto_four'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_five} alt={'Foto_five'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_six} alt={'Foto_two'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_seven} alt={'Foto_thee'} /></SwiperSlide>

                <SwiperSlide><img src={Foto_eight} alt={'Kitchen'} /></SwiperSlide>
                <SwiperSlide><img src={Foto_ten} alt={'Foto_two'} /></SwiperSlide>



            </Swiper>
        </>
    );

}
