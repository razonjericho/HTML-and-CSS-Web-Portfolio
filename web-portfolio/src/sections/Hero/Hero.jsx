import React from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import ProfileImage from "../../assets/Images/Profile/Profile.jpg";

function Hero() {
    return (
        <Box
            component="section"
            id="home"
            sx={{
                py: {
                    xs: 8,
                    sm: 10,
                    md: 12,
                    lg: 14,
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
                            sx={{
                                fontSize: {
                                    sm: "1.5rem",
                                    md: "2.2rem",
                                    lg: "1.5rem",
                                },
                                color:"primary.main",
                                fontWeight: 600,
                            }}
                            gutterBottom
                        >
                            Hi, I'm
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                mb: 2,

                                fontSize: {
                                    xs: "2.8rem",
                                    sm: "3.5rem",
                                    md: "4.5rem",
                                    lg: "5rem",
                                },

                                fontWeight: 700,

                                lineHeight: 1.1,
                            }}
                        >
                            Jericho Pete Razon
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "primary.main",
                                mb: 3,

                                fontWeight: 600,

                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.8rem",
                                    md: "2.2rem",
                                },
                            }}
                        >
                            Full-Stack Web Developer
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
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            I build responsive, user-focused
                            full-stack web applications using
                            React, Node.js, Express, and PostgreSQL.
                            I enjoy creating clean interfaces
                            and reliable backend systems that
                            solve real-world problems.
                        </Typography>

                        <Typography
                            sx={{
                                mb: 4,
                                fontSize: {
                                    xs: "0.9rem",
                                    sm: "1.1rem",
                                    md: "1.4rem",
                                },

                                fontWeight: 600,

                                color: "primary.main",
                            }}
                        >
                            Let's build something amazing together.
                        </Typography>

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    px: {
                                        xs: 3,
                                        sm: 4,
                                        md: 4.5,
                                        lg: 5,
                                    },

                                    py: {
                                        xs: 1.3,
                                        sm: 1.5,
                                        md: 1.6,
                                        lg: 1.7,
                                    },

                                    fontSize: {
                                        xs: "0.95rem",
                                        sm: "1rem",
                                        md: "1.05rem",
                                        lg: "1.05rem",
                                    },

                                    minWidth: {
                                        xs: 140,
                                        sm: 170,
                                        md: 190,
                                        lg: 200,
                                    },
                                }}
                            >
                                View Projects
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    px: {
                                        xs: 3,
                                        sm: 4,
                                        md: 4.5,
                                        lg: 5,
                                    },

                                    py: {
                                        xs: 1.3,
                                        sm: 1.5,
                                        md: 1.6,
                                        lg: 1.7,
                                    },

                                    fontSize: {
                                        xs: "0.95rem",
                                        sm: "1rem",
                                        md: "1.05rem",
                                        lg: "1.05rem",
                                    },

                                    minWidth: {
                                        xs: 140,
                                        sm: 170,
                                        md: 190,
                                        lg: 200,
                                    },
                                }}
                            >
                                Contact Me
                            </Button>
                        </Stack>
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
                                        lg: 420,
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

export default Hero;