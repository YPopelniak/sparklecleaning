import React from 'react';
import {Grid} from "@mui/material";
import './Footer.css'
import InputSubscription from "../UI/InputSubscription/InputSubscription";
import logo from '../imgs/logo2.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer(props) {


    return (
            <Grid container className={'Footer'} id={'contact'}>

                <Grid container className={'newsLetter'}>
                    <Grid item xs={12} md={6} className={'Subscribe'}>
                        <h3>
                            Subscribe To Our News Letter
                        </h3>
                        <p>Subscribe our news letter to get <br/>
                            latest news and updates</p>
                    </Grid>
                    <Grid item xs={12} md={6} className={'InputSubscription'}>
                        <InputSubscription/>
                    </Grid>
                </Grid>
                <Grid container className={'Section'}>
                    <Grid item xs={12} md={5} className={'logo'}>
                        <img src={logo} alt={'logo'}/>
                    </Grid>
                    <Grid item container xs={12} md={7} className={'link'} >
                        <Grid item xs={12} sm={4} className={'links Services'}>
                            <h4>Services</h4>
                            <hr/>
                            <a href={'#regular-cleaning'}>Regular Cleaning</a>
                            <a href={'#deep-cleaning'}>Deep Cleaning</a>
                            <a href={'#move-in-cleaning'}>Move-in/ Move-out Cleaning</a>
                            <a href={'#cleaning-after'}>After Repair Cleaning</a>
                        </Grid>
                        <Grid item xs={12} sm={4} className={'links'}>
                            <h4>Contact</h4>
                            <hr/>
{/*
                            <a href={'tel:+17082227245'}><LocalPhoneOutlinedIcon/>&nbsp;+1 (708) 222-7245</a>
*/}
                            <a href={'tel:+18723624820'}><LocalPhoneOutlinedIcon/>&nbsp;+1 (872) 362-4820</a>
                            <a href={'mailto:chsparklee@gmail.com'}><EmailOutlinedIcon/>&nbsp;chsparklee@gmail.com</a>
                            <a href={'https://www.instagram.com/sparkle_elite.cleaning/'} target={"_blank"} rel={'noreferrer'}><InstagramIcon/>&nbsp;sparkle_elite_cleaning</a>
                        </Grid>
                    </Grid>


                </Grid>
{/*                <Grid item xs={12} md={3} className={'social__networks'}>
                    <FacebookOutlinedIcon className={'network'}/>
                    <TwitterIcon className={'network'}/>
                    <LinkedInIcon className={'network'}/>
                    <InstagramIcon className={'network'}/>
                </Grid>*/}
                <Grid item xs={12} className={'Copyright'}>
                    <hr/><p>Copyright by Cleanex @ 2023. All rights <br/>reserved</p><hr/>
                </Grid>


            </Grid>

    );
}

export default Footer;
