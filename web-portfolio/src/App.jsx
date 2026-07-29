import React from "react";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import { Button, Card, CardContent, Typography, Container } from "@mui/material";

function App() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
    
  )
}

export default App
