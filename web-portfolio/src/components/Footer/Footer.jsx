import React from "react";
import { Container, Box, Typography } from "@mui/material";

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <Box 
            component="footer"
            sx={{
                py: 3,
                borderTop: 1,
                borderColor: "divider",
                bgcolor: "background.default"
            }}
        >
            <Container maxWidth="lg">
                {/* Desktop & Tablet */}
                <Typography
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                        color: "text.secondary",
                        fontSize: {
                            sm: "0.875rem",
                            md: "1.2rem",
                            lg: "0.9rem",
                        },
                        py: {
                            xs: 0,
                            sm: 0,
                            md: 1,
                            lg: 0,
                        },
                    }}
                >
                    Designed and developed by{" "}
                    <Typography
                        component="span"
                        sx={{
                            color: "primary.main",
                            fontSize: {
                                sm: "0.875rem",
                                md: "1.2rem",
                                lg: "0.9rem",
                            },
                            fontWeight: 600,
                        }}
                    >
                        Jericho Razon
                    </Typography>
                    {" "}· © {currentYear}
                </Typography>

                {/* Mobile */}
                <Typography
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none",
                        },
                        color: "text.secondary",
                        fontSize: "0.875rem",
                    }}
                >
                    Designed and developed
                    <br />
                    by{" "}
                    <Typography
                        component="span"
                        sx={{
                            color: "primary.main",
                            fontWeight: 600,
                        }}
                    >
                        Jericho Razon
                    </Typography>
                    {" "}· © {currentYear}
                </Typography>
            </Container>
        </Box>
        
    )
}

export default Footer;