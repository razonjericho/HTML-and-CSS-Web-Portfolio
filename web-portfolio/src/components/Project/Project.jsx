import React from "react";
import { Container, Box, Typography, Grid, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ProgressPage from "../../assets/Images/ProjectScreenshot/ProgressPage.png";
import CheckIcon from "@mui/icons-material/Check";
import featuresData from "./FeaturesData";

function Project() {
    return (
        <Box
            component="section"
            id="project"
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
                <Typography variant="h2">
                    Projects
                </Typography>

                <Grid 
                    container 
                    spacing={6}
                    sx={{
                        py: {
                            xs: 4,
                            sm: 4,
                            md: 4,
                            lg: 4,
                        },
                    }}
                >
                    <Grid 
                        size={{ 
                            xs: 12, 
                            lg: 7,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                borderRadius: 1,
                                overflow: "hidden",
                                boxShadow: 4,
                            }}
                        >
                            <Box
                                component="img"
                                src={ProgressPage}
                                alt="Habit Tracker Progress Dashboard"
                                sx={{
                                    width: "100%",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid 
                        size={{ 
                            xs: 12, 
                            lg: 5,
                        }}
                    >
                        
                            <Typography 
                                variant="h4"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: {
                                        xs: "1.5rem",
                                        md: "2rem",
                                        lg: "1.5rem",
                                    },
                                    pb: {
                                        xs: 2,
                                        sm: 2,
                                        md: 2,
                                        lg: 2,
                                    },
                                }}
                            >
                                Habit Tracker App
                            </Typography>

                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1.1rem",
                                        md: "1.6rem",
                                        lg: "1rem",
                                    },
                                    pb: {
                                        xs: 2,
                                        sm: 2,
                                        md: 2,
                                        lg: 2,
                                    },
                                }}
                            >
                                A full-stack habit tracking application that helps users build
                                daily routines, monitor progress, and visualize consistency
                                through an interactive calendar heatmap.
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1rem",
                                        md: "1.5rem",
                                        lg: "1rem",
                                    },

                                    color: "primary.dark",
                                    
                                    fontWeight: 600,
                                }}
                            >
                                KEY FEATURES
                            </Typography>

                            <List
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {featuresData.map((feature) => (
                                    <ListItem
                                        key={feature}
                                        disablePadding
                                        sx={{
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <ListItemIcon 
                                            sx={{ 
                                                minWidth: 28,
                                                py: {
                                                    xs: 0.75,
                                                    sm: 1,
                                                    md: 1.75,
                                                    lg: 0.75,
                                                },

                                                pr: {
                                                    xs: 0,
                                                    sm: 0,
                                                    md: 1,
                                                    lg: 0,
                                                }
                                            }}
                                        >
                                            <CheckIcon
                                                color="primary"
                                                sx={{
                                                    fontSize: {
                                                        xs: "1rem",
                                                        sm: "1.25rem",
                                                        md: "1.75rem",
                                                        lg: "1.25rem",
                                                    }
                                                }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={feature}
                                            slotProps={{
                                                primary: {
                                                    sx: {
                                                        fontSize: {
                                                            xs: "0.9rem",
                                                            sm: "1.1rem",
                                                            md: "1.6rem",
                                                            lg: "1rem",
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        
                        
                    </Grid>
                </Grid>
            </Container> 
        </Box>
           
    )
}

export default Project;