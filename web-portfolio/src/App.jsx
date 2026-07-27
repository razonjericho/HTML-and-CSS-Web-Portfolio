import React from "react";
import Header from "./components/Header/Header";
import { Button, Card, CardContent, Typography, Container } from "@mui/material";

function App() {

  return (
    <div>
      <Header />
      <Container sx={{ py: 8 }}>
        <Card sx={{ p: 4 }}>
            <CardContent>
                <Typography variant="h2" gutterBottom>
                    Theme Test
                </Typography>

                <Typography color="text.secondary">
                    Working!
                </Typography>

                <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                >
                    Get Started
                </Button>
            </CardContent>
        </Card>
    </Container>
    </div>
    
  )
}

export default App
