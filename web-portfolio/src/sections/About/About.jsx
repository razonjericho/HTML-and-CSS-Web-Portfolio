import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ProfileImage from "../../assets/Images/Profile/Profile.jpg";

function About() {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: {
                    xs: 8,
                    md: 12,
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{
                        xs: 6,
                        md: 8,
                    }}
                    sx={{
                        alignItems:"center",
                    }}
                >
                    <Grid
                        size={{
                            xs: 12,
                            md: 7,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,

                                fontSize: {
                                    xs: "2.8rem",
                                    sm: "3.5rem",
                                    md: "4.5rem",
                                    lg: "2.5rem",
                                },

                                fontWeight: 700,

                                lineHeight: 1.1,
                                
                                py: {
                                    xs: 8,
                                    md: 12,
                                    lg: 2,
                                },
                            }}
                        >
                            About Me
                        </Typography>

                        <Box
                            sx={{
                                maxWidth: 720,
                                mb: 8,
                            }}
                        >

                            <Typography
                                variant="body1"
                                sx={{
                                    color:"text.secondary",
                                    maxWidth: 600,

                                    mb: 4,

                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.1rem",
                                        md: "1.6rem",
                                        lg: "1rem",
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                I'm a Psychology graduate transitioning into full-stack
                                software development. I enjoy building responsive,
                                user-focused web applications with clean UI and efficient
                                backend architecture.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color:"text.secondary",
                                    maxWidth: 600,

                                    mb: 4,

                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.1rem",
                                        md: "1.6rem",
                                        lg: "1rem",
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                My background in psychology strengthened my analytical
                                thinking, communication, and understanding of user
                                behavior—skills I now apply when designing intuitive and
                                accessible software.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color:"text.secondary",
                                    maxWidth: 600,

                                    mb: 4,

                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.1rem",
                                        md: "1.6rem",
                                        lg: "1rem",
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                I'm currently expanding my backend expertise through
                                React, Node.js, Express, PostgreSQL, REST APIs, JWT
                                authentication, and scalable application design while
                                continuously improving as a software developer.
                            </Typography>
                        </Box> 
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 5,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={ProfileImage}
                                alt="Jericho Pete Razon"
                                sx={{
                                    width: {
                                        xs: 250,
                                        sm: 320,
                                        md: 360,
                                        lg: 360,
                                    },

                                    aspectRatio: "1",

                                    objectFit: "cover",

                                    borderRadius: "50%",

                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,0.15)",
                                }}
                            />
                        </Box>
                    </Grid> 
                </Grid>
            </Container>
        </Box>
    );
}

export default About;