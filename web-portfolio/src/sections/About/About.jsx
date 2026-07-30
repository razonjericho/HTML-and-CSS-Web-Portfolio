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

                <Typography
                    variant="h2"
                    sx={{
                        fontSize: {
                            xs: "2.8rem",
                            sm: "3.5rem",
                            md: "4.5rem",
                            lg: "2.5rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1.1,

                        pt: {
                            xs: 8,
                            md: 12,
                            lg: 2,
                        },

                        mb: {
                            xs: 5,
                            lg: 6,
                        },
                    }}
                >
                    About Me
                </Typography>

                <Grid
                    container
                    spacing={{
                        xs: 6,
                        md: 8,
                    }}
                    sx={{
                        alignItems:"flex-start",
                    }}
                >
                    <Grid
                        size={{
                            xs: 12,
                            lg: 7,
                        }}
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                sm: 520,
                                md: 720,
                                lg: "100%",
                            },
                            mx: "auto",

                            order: {
                                xs: 2,
                                lg: 1,
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
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
                                color: "text.secondary",
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
                                color: "text.secondary",

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
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            lg: 5,
                        }}
                        sx={{
                            order: {
                                xs: 1,
                                lg: 2,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",

                                mt: {
                                    lg: -6,
                                }
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