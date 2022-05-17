import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const Appbar = () => {
    const pages = [
      {name: 'Banners', path: 'banners', headerColor: 'blue'}, 
      {name: 'Skin', path: 'skins', headerColor: 'red'}, 
      {name: 'Cosmatics', path: 'cosmatics', headerColor: 'blue'}
    ];
    const [headerColor, setHeaderColor] = useState('red');
    const navStyle = {
      color: 'white',
      textDecoration: 'none'
    }
    const location = useLocation();
    useEffect(()=> {
      const path = location.pathname;
      if (path === '/banners') {
        setHeaderColor('blue')
      } else if (path === '/skins') {
        setHeaderColor('red')
      } else if (path === '/cosmatics') {
        setHeaderColor('violet')
      } else {
        setHeaderColor('blue')
      }
    }, [location]);
    return(
        <AppBar position="static" sx={{backgroundColor: headerColor }}>
            <Container maxWidth="xl">
              <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex'} }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >Fortnite</IconButton>
                </Box>
                {pages.map((e, index)=> {
                  return <MenuItem key={index}>
                  <Link style={navStyle} to={e.path} onClick={()=> {setHeaderColor(e.headerColor)}}><Typography textAlign="center">{e.name}</Typography></Link>
                  </MenuItem>
                })}
              </Toolbar>
            </Container>
            </AppBar>
    )
};
export default Appbar;