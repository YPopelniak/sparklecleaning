import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import React from 'react';
import Box from "@mui/material/Box";
import Offering from "./components/OFFERING/Offering";
import Gallery from "./components/UI/Gallery/Gallery";
import Customers from "./components/Customers/Customers";
import {SnackbarProvider} from 'notistack';



function App() {


    return (
        <SnackbarProvider maxSnack={3}>

            <Box className="App">
                <HomePage/>
                <Offering/>
                <Gallery/>

                <Customers/>


                <Footer/>


            </Box>
        </SnackbarProvider>
    );
}

export default App;
