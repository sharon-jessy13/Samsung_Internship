import React from "react";
import Navbar from "./Components/Navbar";
import HRLetterHeader from "./Components/HRLetterHeader";
import { Container } from '@mui/material';

function App(){
  return(
    <div>
      <Container maxWidth="1446px">
      <Navbar/>
      <HRLetterHeader/>
      </Container>
    </div>
  );
}
export default App;