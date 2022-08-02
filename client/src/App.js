import { Container, Box } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "./Keys";



function App() {

  useEffect(()=> {
    axios.get(API_BASE_URL)
    .then(res=> {
      // console.log(res.data)
    })
  },[])

  return (
    <Box>
      <MainRoutes />
    </Box>
  );
}

export default App;
