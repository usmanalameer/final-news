import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Headlines from './dashscreen/headlines';
import Onenews from './dashscreen/onenews';
import News from './dashscreen/news';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
        const nav = useNavigate();
        const moveto =(route)=>{
        nav(route)
    }
    const [routelist, setroutelist ] = React.useState([
        {
            routename:"news",
            route:"news"
        },
        {
            routename:"headlines",
            route:"headlines"
        },
        {
            routename:"articles",
            route:""
        },
    ])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {routelist.map((text, index) => (
            <ListItem onClick={()=>moveto(text.route)}key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.routename} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
           <Routes>
            <Route path="headlines" element={<Headlines /> }  />
            <Route path="onenews" element={<Onenews  /> }  />
            <Route path="news" element={<News  /> }  />
           </Routes>
      </Box>
    </Box>
  );
}
