import React from "react";
import { Card, Stack, CardContent, Typography, Box, Link, IconButton, Divider } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

function ContactCard({ title, icon, description, value, href, type }) {
    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
    }

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
                    xs: "100%",
                    lg: "100%",
                },
            }}
        >
            <CardContent>
                <Stack
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: 84,
                            height: 84,
                            borderRadius: "50%",
                            bgcolor: "primary.light",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "black",
                            pt: 1,
                            my: 1,

                            "& svg": {
                                fontSize: 42,
                            },
                        }}
                    >
                       <Box
                            sx={{
                                color: "primary.main",
                            }}
                        >
                            {React.cloneElement(icon, {
                                sx: {
                                    fontSize: 50,
                                },
                            })}
                        </Box> 
                    </Box>
                    
                    <Typography 
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            fontSize: {
                                xs: "1.2rem",
                                sm: "1.4rem",
                                md: "1.6rem",
                                lg: "1.2rem",
                            },
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color:"text.secondary",
                            py: 1,
                            textAlign: "center",
                            fontSize: {
                                xs: "0.8rem",
                                sm: "1rem",
                                md: "1.2rem",
                                lg: "0.9rem",
                            },
                        }}
                    >
                        {description}
                    </Typography>
                </Stack>
                

                <Divider 
                    sx={{
                        my: 3,
                    }}
                />

                <Stack
                
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {type === "copy" ? (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,      
                                flexWrap: "wrap",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "primary.main",
                                    fontSize: {
                                        xs: "0.8rem",
                                        sm: "1rem",
                                        md: "1.2rem",
                                        lg: "0.9rem",
                                    },
                                }}
                            >
                                {value}
                            </Typography>

                            <IconButton
                                onClick={handleCopy}
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                <ContentCopyOutlinedIcon 
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            sm: "1rem",
                                            md: "1.2rem",
                                            lg: "0.8rem",
                                        },
                                    }}
                                />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,      
                            }}
                        >
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                variant="body2"
                                sx={{
                                    color: "primary.main",
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: "0.8rem",
                                        sm: "1rem",
                                        md: "1.2rem",
                                        lg: "0.9rem",
                                    },
                                }}
                            >
                                {value}
                                <IconButton
                                    size="small"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        
                                        "&:hover": {
                                            bgcolor: "action.hover",
                                        },
                                    }}
                                >
                                    <OpenInNewOutlinedIcon 
                                        sx={{
                                            fontSize: {
                                                xs: "1rem",
                                                sm: "1rem",
                                                md: "1.2rem",
                                                lg: "1rem",
                                            },
                                            mb: {
                                                lg: 0.2,
                                            }
                                        }}
                                    />
                                </IconButton>
                            </Link>
                        </Box>
                    )}
                </Stack>

            </CardContent>
        </Card>
    )
}

export default ContactCard;