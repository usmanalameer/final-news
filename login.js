import { Box, Typography } from "@mui/material"
import Smbutton from "../components/button"
import Sminput from "../components/input"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

function Login(){
    const nav = useNavigate();
    const loginuser = ()=>{
        console.log("user")
        nav("/" , {state:{user:true}})
    }


    return <>
    <Box>
        <Box sx={{padding:1}}>
            <Sminput    label="Email"  type="email"/>        
        </Box>
        <Box sx={{padding:1}}>
            <Sminput label="Password"  type="password" />        
        </Box>

        <Box sx={{padding:1}}>
            <Smbutton onClick={loginuser} label="Login" />        
        </Box>
    </Box>
    </>
}
export default Login