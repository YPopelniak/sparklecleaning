import React from 'react';
import './CleaningButton.css'
import {Button} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import house from '../imgs/home.svg'
import lounge from '../imgs/lounge.svg'
//import office from '../imgs/office.svg'



function CleaningButton(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });
    return (
        <ThemeProvider theme={theme}>

            <Box className={'CleaningButton'}>
                <a href={'#regular-cleaning'}>
                    <Button variant="outlined">
                        <img src={house} alt={'house'} className={'regular-cleaning'}/>
                        <span className={'span__name'}><h6>
                        Regular<br/>cleaning
                    </h6></span>

                    </Button>
                </a>
{/*                <a href={'#cleaning-after'}>
                    <Button variant="outlined">
                        <img src={lounge} alt={'lounge'} className={'cleaning-after'}/>
                        <span className={'span__name'}><h6>
                        Apartment<br/>cleaning
                    </h6></span>

                    </Button>
                </a>*/}
                <a href={'#deep-cleaning'}>
                        <Button variant="outlined"
                                to={'#office-cleaning'}
                        >
                            <img src={lounge} alt={'lounge'} className={'cleaning-after'}/>
                            <span className={'span__name'}><h6>Deep<br/>cleaning</h6></span>

                        </Button>
                </a>
            </Box>
        </ThemeProvider>
    );
}

export default CleaningButton;
