import React from "react";
import { Container, Divider, Box, Typography } from "@mui/material";

function Education() {
    return(
        <Box
            component="section"
            id="education"
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
                    Education
                </Typography>
                <Divider
                    sx={{
                        my: 2,
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: 4,
                            bgcolor: "primary.main",
                            borderRadius: 2,
                            flexShrink: 0,
                        }}
                    >
                        {/* Blue line */}
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ 
                                mb: 1.5,
                                fontWeight: 600,
                            }}
                        >
                            Bachelor of Science in Psychology
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                mb: 0.5,
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.25rem",
                                    lg: "0.9rem",
                                },
                            }}
                        >
                            University of San Carlos - Talamban Campus
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                fontSize: {
                                    xs: "0.85rem",
                                    md: "1.15rem",
                                    lg: "0.80rem",
                                },
                            }}
                        >
                            Cebu City, Philippines • 2020 – 2024
                        </Typography>
                    </Box>
                </Box>
                <Divider
                    sx={{
                        my: 2,
                    }}
                />
            </Container>
        </Box>
        
    )
}

export default Education;