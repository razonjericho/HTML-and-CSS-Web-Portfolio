import React, { useState } from 'react';
import { AppBar, Toolbar, Stack, Container, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Header() {
    const navItems = [
        {
            label: "About",
            id: "about",
        },
        {
            label: "Projects",
            id: "projects",
        },
        {
            label: "Contact",
            id: "contact",
        },
    ];

    const [ openDrawer, setOpenDrawer ] = useState(false);

    function toggleDrawer(isOpen) {
        setOpenDrawer(isOpen);
    }

    return (
        <Box>
            <AppBar
                position="sticky"
                elevation={1}
                sx={{
                    bgcolor: "background.paper",
                    color: "text.primary",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",

                            px: {
                                xs: 2,
                                sm: 3,
                                md: 5,
                                lg: 6,
                            },

                            py: {
                                xs: 2,
                                sm: 2.5,
                                md: 3.5,
                                lg: 2.5,
                            },

                            minHeight: "unset",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{
                                color: "primary.main",
                                fontWeight: 700,
                                cursor: "pointer",

                                fontSize: {
                                    xs: "1.5rem",
                                    sm: "1.85rem",
                                    md: "2.2rem",
                                    lg: "2rem",
                                },
                            }}
                        >
                            Pete
                        </Typography>
                        
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "block",
                                },
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={{
                                    md: 2,
                                    lg: 2.5,
                                }}
                            >
                                {navItems.map((item) => (
                                    <Button
                                        key={item.id}
                                        color="inherit"
                                        sx={{
                                            color: "text.secondary",

                                            fontWeight: 500,

                                            fontSize: {
                                                md: "1.5rem",
                                                lg: "1rem",
                                            },

                                            px: {
                                                md: 2.5,
                                                lg: 2,
                                            },

                                            "&:hover": {
                                                color: "primary.main",
                                                bgcolor: "transparent",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none",
                                    lg: "none",
                                },
                            }}
                        >
                            <IconButton
                                onClick={(e) => {
                                    e.currentTarget.blur();
                                    toggleDrawer(true)
                                }}
                                sx={{
                                    color: "text.primary",

                                    "& .MuiSvgIcon-root": {
                                        fontSize: {
                                            xs: 30,
                                            sm: 32,
                                            md: 34,
                                        },
                                    },
                                }}
                            >
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 280,
                    }}
                >
                    <Box
                        sx={{               
                            px: 2,
                            pt: 3,
                            pb: 2.9,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={700}
                            color="primary.main"
                            sx={{
                                fontSize: {
                                    sm: "1.65rem",
                                },
                            }}
                        >
                            Pete
                        </Typography>
                    </Box>

                    <Divider />

                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.id}
                                disablePadding
                            >
                                <ListItemButton
                                    onClick={() => toggleDrawer(false)}
                                    sx={{
                                        py: 2,
                                        px: 3,
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        slotProps={{
                                            primary: {
                                                fontSize: "1.05rem",
                                                fontWeight: 500,
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>


    )
}

export default Header;