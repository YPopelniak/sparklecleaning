import React, {useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import 'swiper/css/thumbs';

import './Gallery.css';

// import required modules
import {FreeMode, HashNavigation, Keyboard, Mousewheel, Navigation, Thumbs} from 'swiper/modules';
import RegularCleaning from "../../TypeCleaning/RegularCleaning";
import DeepCleaning from "../../TypeCleaning/DeepCleaning";
import MoveInCleaning from "../../TypeCleaning/MoveInCleaning";
import CleaningAfter from "../../TypeCleaning/CleaningAfter";
//import OfficeCleaning from "../../TypeCleaning/OfficeCleaning";
//import OneTime from "../../TypeCleaning/OneTime";
import Box from "@mui/material/Box";
//import PetsCleaning from "../../TypeCleaning/PetsCleaning";
//import HolidayCleaning from "../../TypeCleaning/HolidayCleaning";

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box id={'our_services'}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#003156',
                    '--swiper-pagination-color': '#003156',
                }}
                loop={true}
                autoHeight={true}
                spaceBetween={10}
                navigation={true}
                grabCursor={true}

                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

                modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard, HashNavigation]}


                hashNavigation={{
                    watchState: true,
                }
                }
                className="mySwiper2"
            >


                <SwiperSlide
                    data-hash={'regular-cleaning'}
                    id={'regular-cleaning'}>
                    <RegularCleaning/>
                </SwiperSlide>
{/*                <SwiperSlide
                    data-hash={'one-time'}
                    id={'one-time'}>
                    <OneTime/>
                </SwiperSlide>*/}
                <SwiperSlide
                    data-hash={'move-in-cleaning'}
                    id={'move-in-cleaning'}>
                    <MoveInCleaning/>
                </SwiperSlide>
                <SwiperSlide
                    data-hash={'cleaning-after'}
                    id={'cleaning-after'}>
                    <CleaningAfter/>
                </SwiperSlide>
{/*                <SwiperSlide
                    data-hash={'office-cleaning'}
                    id={'office-cleaning'}
                >
                    <OfficeCleaning/>
                </SwiperSlide>*/}
                <SwiperSlide
                    data-hash={'deep-cleaning'}
                    id={'deep-cleaning'}>
                    <DeepCleaning/>
                </SwiperSlide>
{/*                <SwiperSlide
                    data-hash={'pets-cleaning'}
                    id={'pets-cleaning'}>
                    <PetsCleaning/>
                </SwiperSlide>*/}
{/*                <SwiperSlide
                    data-hash={'holiday-cleaning'}
                    id={'holiday-cleaning'}>
                    <HolidayCleaning/>
                </SwiperSlide>*/}


            </Swiper>
            <Swiper
                loop={true}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                grabCursor={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={'group Regular'}>
                        <h4>Regular Cleaning</h4>
                        {/*<p>/!*<span className={'Discounto'}>$40</span>*!/$40 /maid-hour</p>*/}
                    </div>
                </SwiperSlide>
{/*                <SwiperSlide>
                    <div className={'group OneTime'}>
                        <h4>One - Time Cleaning</h4>
                        <p><span className={'Discounto'}>$45</span>$41 /maid-hour</p>
                    </div>
                </SwiperSlide>*/}
                <SwiperSlide>
                    <div className={'group Move_in'}>
                        <h4>Move-in/ Move-out Cleaning</h4>
                        {/*<p>/!*<span className={'Discounto'}>$47</span>*!/$43 /maid-hour</p>*/}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group After_Repair'}>
                        <h4>After Repair Cleaning</h4>
                        {/*<p>/!*<span className={'Discounto'}>$48</span>*!/$45 /maid-hour</p>*/}
                    </div>
                </SwiperSlide>
{/*                <SwiperSlide>
                    <div className={'group After_Repair'}>
                        <h4>Office Cleaning</h4>
                        <p><span className={'Discounto'}>$45</span>$41 /maid-hour</p>
                    </div>
                </SwiperSlide>*/}
                <SwiperSlide>
                    <div className={'group Deep'}>
                        <h4>Deep Cleaning</h4>
                        {/*<p> /!*<span className={'Discounto'}>$47</span>*!/$43/maid-hour</p>*/}
                    </div>
                </SwiperSlide>{/*
                <SwiperSlide>
                    <div className={'group Holiday'}>
                        <h4>Pets and a Clean Home</h4>
                        <p><span className={'Discounto'}>$47</span>$43/maid-hour</p>

                    </div>
                </SwiperSlide>*/}
{/*                <SwiperSlide>
                    <div className={'group Pets'}>
                        <h4>Holiday Cleaning</h4>
                        <p><span className={'Discounto'}>$40</span>$36 /maid-hour</p>

                    </div>
                </SwiperSlide>*/}

            </Swiper>


        </Box>
    );
}
