import React from 'react';
import {Button} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Box from "@mui/material/Box";


function BookScheduleButton( props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                className="svc-book-btn-wrap"
                sx={{
                    '& .MuiButtonBase-root': {
                        alignItems: 'center',
                    },
                }}
            ><a href={'#form'}>
                <Button

                    color={'primary'}
                    variant="contained">
                    <EditCalendarOutlinedIcon/>
                    &nbsp;
                    <span
                    style={{whiteSpace:'nowrap',
                    textAlign:'start'}}>Book Schedule</span>
                </Button>
            </a>
            </Box>
        </ThemeProvider>
    );
}

export default BookScheduleButton;
