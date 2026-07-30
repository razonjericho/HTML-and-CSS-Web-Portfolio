import React from 'react';
import techStackData from "./techStackData";
import TechStackCard from './TechStackCard';
import { Container, Box, Grid } from "@mui/material";

function TechStack(props) {
    return (
        <Box 
            component="section"
            sx={{
                py: {
                    xs: 8,
                    sm: 10,
                    md: 12,
                    lg: 8,
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                    sx={{
                       alignItems:"stretch" 
                    }}
                >
                        {techStackData.map((category) => (
                            <Grid
                                key={category.title}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                }}
                                sx={{
                                    display: "flex",
                                }}
                            >
                                <TechStackCard
                                    title={category.title}
                                    skills={category.skills}
                                />
                            </Grid>
                            
                        ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default TechStack;