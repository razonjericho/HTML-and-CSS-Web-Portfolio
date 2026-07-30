import React from "react";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Experience from "./sections/Experience/Experience";
import { Button, Card, CardContent, Typography, Container, Toolbar } from "@mui/material";

function App() {

  return (
    <div className="App">
      <Header />
      <Toolbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
      </main>
    </div>
    
  )
}

export default App
