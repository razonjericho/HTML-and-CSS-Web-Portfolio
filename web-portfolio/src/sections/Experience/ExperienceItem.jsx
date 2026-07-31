import React from "react";
import { Box, Typography, Chip, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

function ExperienceItem({ company, role, period, type, description }) {
    return (
        <Box>
            <Divider
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            />
            <Grid container spacing={4}>
                <Grid
                    sx={{
                        alignItems: "center",
                    }}
                    size={{
                        xs: 12,
                        lg: 3,
                    }}
                >
                    <Typography 
                        variant="h5"
                        sx={{
                            fontSize: {
                                md: "2rem",
                                lg: "1rem",
                            },
                            fontWeight: 700,
                            mb: {
                                xs: 2,
                                lg: 2,
                            },
                        }}
                    >
                        {company}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: "text.secondary",
                            fontSize: {
                                md: "1.2rem",
                                lg: "0.8rem",
                            },
                            lineHeight: 1.1,

                            mb: {
                                xs: 2,
                                sm: 2,
                                lg: 6,
                            },
                        }}
                    >
                        {period}
                    </Typography>
                </Grid>

                <Grid>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: {
                                    md: "2rem",
                                    lg: "1.5rem",
                                },

                                color: "primary.dark",

                                lineHeight: 1.1,
                                
                                fontWeight: 700,

                                mt:{
                                    lg: 1,
                                },

                                mb: {
                                    xs: 5,
                                    lg: 3,
                                },
                            }}
                        >
                            {role}
                        </Typography>


                        <Box>
                            {description.map((item) => (
                                <Typography
                                    key={item}
                                    sx={{
                                        color:"text.secondary",
                                        fontSize: {
                                            xs: "0.95rem",
                                            md: "1.2rem",
                                            lg: "0.85rem",
                                        },
                                        lineHeight: 1.5,
                                        mb: 1,
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ExperienceItem;