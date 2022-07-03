import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
//import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bg from '../images/mainBG.jpg';
import FullScreenDialog from './subComponants/ModelOpen';

const Landing = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl" 
                sx={{ bgcolor: "#cfe8fc", width: "100", height: "100vh", 
                backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover"
                }}>
                <FullScreenDialog/>
                </Container>
            </React.Fragment>
        </>
    )
}

export default Landing;