import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SingleCard from '../SingleCard';
import Navbar from '../Navbar';
import cities from "../data.json"
import { Typography } from '@mui/material';
const Home = () => {
    return (
        <div>
            <Container sx={{ marginY: 5 }}>

                {cities.map((city) => {
                    return (
                        <>
                            <Typography variant="h4" component="h2"
                                marginTop={5}
                                marginBottom={3}>
                                Top {city.name} tours
                            </Typography>
                            <Grid container spacing={5}>
                                {city.tours.map((tour, index) => {
                                    return (
                                        <SingleCard tour={tour} key={index} />
                                    )
                                })}
                            </Grid>
                        </>
                    )

                })}





            </Container>
        </div>
    )
}

export default Home