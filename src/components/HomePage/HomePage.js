import React from 'react';
import DrawerAppBar from "../UI/DrawerAppBar/DrawerAppBar";
import {Grid} from "@mui/material";
import './HomePage.css'
import CleaningButton from "../CleaningButton/CleaningButton";
import GalleryFoto from "../UI/GalleryFoto/GalleryFoto";
import BookSchedule from "../BookSchedule/BookSchedule";

function HomePage() {
    return (
        <Grid container className={'homePage'} id={'home'}>
            <div className={'background'}/>
            <Grid item xs={12}><DrawerAppBar/></Grid>
            <Grid item xs={12}><CleaningButton/></Grid>
            <Grid item xs={12}><BookSchedule/></Grid>

            <div className={'background__two'}/>

            <Grid container className={'text__container'}>

                <Grid item  xs={12} md={5} sm={7} className={'text'}>
                    <h1>Chicago <span>Sparkle</span><br/>
                        Elite Cleaning</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Our company offers you professional cleaning services in Chicago and outside the city. You will
                        be served by polite and professionally trained staff. Our team will clean your house to
                        sparkling! We take care of every detail to create cleanliness and comfort in your home. We offer
                        various types of cleaning.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        We use safe and environmentally friendly products to ensure an impeccable result. We offer
                        flexible hours to meet your needs.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Trust the professionals and enjoy cleanliness without too much trouble! Your home deserves the
                        best care!
                    </p>
                </Grid>
                <Grid item xs={12} md={7} sm={5} className={'Kitchen'}>
                    <GalleryFoto/>

                </Grid>
                <div className={'ellipse ellipse__one'}></div>
                <div className={'ellipse ellipse__two'}></div>
                {/*<div className={'stars__one'}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 201" fill="none">*/}
                {/*        <path*/}
                {/*            d="M11.0906 52.5169C11.3159 52.5169 11.2596 46.8634 12.7802 39.7184C13.6626 35.5084 14.2633 32.8621 16.0655 30.5526C18.6186 27.2567 22.0166 26.6794 23.5935 26.5591C22.3545 25.9576 20.4772 24.7788 18.8064 22.5174C16.4034 19.2697 15.7464 15.613 15.0142 11.6195C14.5449 9.04537 14.0756 5.22026 14.2821 0.480971C14.3196 -0.31292 13.9066 12.1247 8.34978 18.3315C5.72155 21.2665 2.58644 22.0844 0.671593 22.3731C2.53012 23.1189 5.64645 24.7788 7.65517 28.6521C8.51873 30.3361 9.1007 32.0201 9.57003 36.3263C10.5838 45.6606 10.809 52.5169 11.0906 52.5409V52.5169Z"*/}
                {/*            fill="#1195FF"/>*/}
                {/*        <path*/}
                {/*            d="M80.5385 200.665C80.8949 200.665 80.8157 191.993 83.1716 181.073C84.5575 174.651 85.4682 170.603 88.2993 167.029C92.2788 162.006 97.545 161.107 100 160.907C98.0796 159.982 95.1693 158.183 92.5361 154.709C88.7943 149.736 87.7648 144.139 86.6561 138.016C85.9434 134.068 85.2108 128.221 85.5078 120.974C85.5672 119.749 84.9139 138.791 76.2819 148.312C72.2035 152.81 67.3134 154.06 64.3437 154.509C67.2144 155.634 72.0847 158.208 75.2128 164.13C76.5591 166.704 77.4698 169.303 78.2023 175.875C79.7862 190.144 80.1227 200.665 80.5781 200.69L80.5385 200.665Z"*/}
                {/*            fill="#1195FF"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
                {/*<div className={'stars__two'}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 201" fill="none">*/}
                {/*        <path*/}
                {/*            d="M11.0906 52.5169C11.3159 52.5169 11.2596 46.8634 12.7802 39.7184C13.6626 35.5084 14.2633 32.8621 16.0655 30.5526C18.6186 27.2567 22.0166 26.6794 23.5935 26.5591C22.3545 25.9576 20.4772 24.7788 18.8064 22.5174C16.4034 19.2697 15.7464 15.613 15.0142 11.6195C14.5449 9.04537 14.0756 5.22026 14.2821 0.480971C14.3196 -0.31292 13.9066 12.1247 8.34978 18.3315C5.72155 21.2665 2.58644 22.0844 0.671593 22.3731C2.53012 23.1189 5.64645 24.7788 7.65517 28.6521C8.51873 30.3361 9.1007 32.0201 9.57003 36.3263C10.5838 45.6606 10.809 52.5169 11.0906 52.5409V52.5169Z"*/}
                {/*            fill="#1195FF"/>*/}
                {/*        <path*/}
                {/*            d="M80.5385 200.665C80.8949 200.665 80.8157 191.993 83.1716 181.073C84.5575 174.651 85.4682 170.603 88.2993 167.029C92.2788 162.006 97.545 161.107 100 160.907C98.0796 159.982 95.1693 158.183 92.5361 154.709C88.7943 149.736 87.7648 144.139 86.6561 138.016C85.9434 134.068 85.2108 128.221 85.5078 120.974C85.5672 119.749 84.9139 138.791 76.2819 148.312C72.2035 152.81 67.3134 154.06 64.3437 154.509C67.2144 155.634 72.0847 158.208 75.2128 164.13C76.5591 166.704 77.4698 169.303 78.2023 175.875C79.7862 190.144 80.1227 200.665 80.5781 200.69L80.5385 200.665Z"*/}
                {/*            fill="#1195FF"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </Grid>




        </Grid>
    );
}

export default HomePage;
