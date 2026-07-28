import React from "react";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import { Button, Card, CardContent, Typography, Container } from "@mui/material";

function App() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
    
  )
}

export default App
