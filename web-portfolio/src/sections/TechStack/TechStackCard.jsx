import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

function TechStackCard ({ title, skills }) {
    return (
        <Card
            sx={{
                border: "1px solid",
                borderColor: "divider",

                "&:hover": {
                    borderColor: "primary.main",
                },

                width: "100%",
                height: {
                    xs: 250,
                    lg: "100%",
                },
            }}
        >
            <CardContent>
                <Typography 
                    variant="h6" 
                    fontWeight={600}
                    sx={{
                        color: "primary.main",
                        fontSize: {
                            lg: "1.1rem",
                        }
                    }}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 2,
                    }}
                >
                    {skills.map((skill) => (
                        <Box 
                            key={skill}
                            sx={{
                                px: 1.5,
                                py: 0.75,
                                color: "text.secondary",

                                borderRadius: 1,

                                bgcolor: "#F6F8FC",

                                border: "1px solid",
                                borderColor: "divider",

                                transition: "all 0.25s ease",

                                "&:hover": {
                                    borderColor: "primary.main",
                                }
                            }}
                        >
                            <Typography>
                                {skill}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}

export default TechStackCard;