import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function News(){
    const nav = useNavigate();
    const [articles, setarticles] =useState([])
    const getnews = ()=>{
        let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-30&sortBy=publishedAt&apiKey=94185b3c737748af96aa8434c8b1ebe6"
        axios.get(api).then((success)=>{
            console.log(success);
            setarticles(success.data.articles)
        }).catch((err)=>{
            console.log(err);
        })
    }
     const clickmove = (item)=>{
        nav("/onenews" ,{state: item,})
        console.log(item)
     }
    useEffect(()=>{
        getnews();
    },[])
    return (
       <Box >
        <Typography>News</Typography>
        {articles.map((e, i)=>
        <Box onClick={()=>clickmove(e)}>
        <Typography>{e.title}</Typography>
        
        
        </Box>)}

       </Box> 
    )
}
export default News;