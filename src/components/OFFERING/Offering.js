import React from 'react';
import './Offering.css'
import logo from '../imgs/logo2.png'
import {Grid} from "@mui/material";
import Regular from '../imgs/Regular.jpeg'

//import One_Time from '../imgs/One_Time.jpeg'
import Move_in from '../imgs/Move-in.jpeg'

//import Office from '../imgs/Office.jpeg'
import After_Repair from '../imgs/After_Repair .webp'
import Deep from '../imgs/Deep.png'


//import Holiday from '../imgs/Holiday.jpeg'
//import Pets from '../imgs/Pets.png'


function Offering(props) {
    return (
        <div className={'Offering'} id={'what_we_are_offering'}>
            <div className={'background'}/>
            <div className={'logo'}>
                <img src={logo} alt={'logo'}/>
                <h3>
                    WHAT WE ARE OFFERING
                </h3>

            </div>
            <Grid container className={'container'}>
                <Grid item xs={6} md={4} lg={3} className={'content Regular'}>
                    <a href={'#regular-cleaning'}>
                        <div className={'Offering__groups'}>
                            <img src={Regular} alt={'Regular Cleaning'} className={'Regular'}/>
                            <div className={'group '}>
                                <h4>Regular Cleaning</h4>
                                {/*<p>/!*<span>$40</span>*!/$40 /maid-hour</p>*/}
                            </div>
                        </div>
                    </a>
                </Grid>
{/*                <Grid item xs={6} md={4} lg={3} className={'content OneTime'}>
                    <a href={'#one-time'}>
                        <div className={'Offering__groups'}>
                            <img src={One_Time} alt={'Offering'} className={'One_Time'}/>
                            <div className={'group '}>
                                <h4>One - Time Cleaning</h4>
                                <p><span>$45</span>$41 /maid-hour</p>
                            </div>
                        </div>
                    </a>
                </Grid>*/}
                <Grid item xs={6} md={4} lg={3} className={'content Move_in'}>
                    <a href={'#move-in-cleaning'}>
                        <div className={'Offering__groups'}>
                            <img src={Move_in} alt={'Offering'} className={'Move_in'}/>
                            <div className={'group '}>
                                <h4>Move-in/ Move-out Cleaning</h4>
{/*
                                <p><span>$47</span>$43 /maid-hour</p>
*/}
                            </div>
                        </div>
                    </a>
                </Grid>
{/*                <Grid item xs={6} md={4} lg={3} className={'content Office'}>
                    <a href={'#office-cleaning'}>
                        <div className={'Offering__groups'}>
                            <img src={Office} alt={'Offering'} className={'Office'}/>
                            <div className={'group'}>
                                <h4>Office/ Commercial Cleaning</h4>
                                <p><span>$45</span>$41 /maid-hour</p>
                            </div>
                        </div>
                    </a>
                </Grid>*/}
                <Grid item xs={6} md={4} lg={3} className={'content After_Repair'}>
                    <a href={'#cleaning-after'}>
                        <div className={'Offering__groups'}>
                            <img src={After_Repair} alt={'Offering'} className={'After_Repair'}/>
                            <div className={'group'}>
                                <h4>After Repair Cleaning</h4>
{/*
                                <p> <span>$48</span>$45 /maid-hour</p>
*/}
                            </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={6} md={4} lg={3} className={'content Deep'}>
                    <a href={'#deep-cleaning'}>
                        <div className={'Offering__groups'}>
                            <img src={Deep} alt={'Offering'}/>
                            <div className={'group'}>
                                <h4>Deep Cleaning</h4>
{/*
                                <p><span>$47</span>$43 /maid-hour</p>
*/}
                            </div>
                        </div>
                    </a>
                </Grid>
{/*                <Grid item xs={6} md={4} lg={3} className={'content Pets'}>
                    <a href={'#pets-cleaning'}>
                        <div className={'Offering__groups'}>
                            <img src={Pets} alt={'Pets'}/>
                            <div className={'group'}>
                                <h4> Pets and a Clean Home</h4>
                                <p><span>$47</span>$43/maid-hour</p>
                            </div>
                        </div>
                    </a>
                </Grid>*/}
{/*                <Grid item xs={6} md={4} lg={3} className={'content Holiday'}>
                    <a href={'#holiday-cleaning'}>
                    <div className={'Offering__groups'}>
                        <img src={Holiday} alt={'Holiday'}/>
                        <div className={'group'}>
                            <h4>Holiday Cleaning</h4>
                            <p><span>$40</span>$36 /maid-hour</p>
                        </div>
                    </div>
                    </a>
                </Grid>*/}


                <div className={'ellipse ellipse__one'}></div>
                <div className={'ellipse ellipse__two'}></div>
                <div className={'ellipse ellipse__three'}></div>

            </Grid>

        </div>
    );
}

export default Offering;
