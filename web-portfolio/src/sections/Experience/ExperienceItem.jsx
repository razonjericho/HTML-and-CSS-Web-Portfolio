import React from "react";
import { Box, Typography, Chip, Stack, List, ListItem, ListItemText, Divider } from "@mui/material";

function ExperienceItem({ company, role, period, type, description }) {
    return (
        <Box>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                   alignItems:"flex-start",
                }}
            >
                <Typography 
                    variant="h5"
                    sx={{
                        fontSize: {
                            md: "2rem",
                            lg: "1.5rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1.1,

                        mb: {
                            xs: 5,
                            lg: 6,
                        },
                    }}
                >
                    {company}
                </Typography>

                <Chip 
                    label={role}
                    sx={{
                        color: "primary.dark",
                        bgcolor: "#F6F8FC",
                        border: "1px solid",
                        borderColor: "primary.main",

                        fontSize: {
                            md: "1rem",
                        },
                        lineHeight: 1.1,

                        mb: {
                            xs: 5,
                            lg: 6,
                        },
                    }}
                />
            </Stack>

            <Typography
                sx={{
                    fontSize: {
                        md: "20px",
                    },
                    lineHeight: 1.1,

                    pt: {
                        xs: 2,
                        sm: 2,
                        md: 2,
                    },

                    mb: {
                        xs: 2,
                        sm: 2,
                        lg: 6,
                    },
                }}
            >
                {period}
            </Typography>

            <List disablePadding>
                {description.map((item) => (
                    <ListItem 
                        key={item} 
                        sx={{
                            color:"text.secondary",
                            py: {
                                xs: 1,
                                sm: 1,
                                md: 0.5,
                            },
                        }}
                    >
                        <ListItemText 
                            primary={item} />
                    </ListItem>
                ))}
            </List>
            <Divider
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            />
        </Box>
    )
}

export default ExperienceItem;