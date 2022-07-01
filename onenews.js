import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


function Onenews(){

    const [onenew, setonenews ] = useState({});
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state);
        setonenews(location.state)
    },[])
    return (
       <Box>
        <Typography> {onenew.title} </Typography>
       </Box> 
    )
}
export default Onenews;