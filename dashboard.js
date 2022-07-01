import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import PermanentDrawerLeft from "./mainlayout";



function    Dashboard(){
      
    const [user , setuser] = useState(false);
    const nav = useNavigate()
    const location = useLocation();
    useEffect(()=>{
        if (location.state && location.state.user){
            nav("/")
        }else{
            nav("/login")
        }

    },[])
    return <>
    <PermanentDrawerLeft />
    </>
}
export default Dashboard;