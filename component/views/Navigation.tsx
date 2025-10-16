'use client'

import { FC, useState, useEffect, } from "react";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TheatersIcon from '@mui/icons-material/Theaters';
import Image from 'next/image';


const navigationSection = {
  Title: 'Busy Making Media',
  Description: 'Audio and video content for digital platforms.',
  CallToAction: 'Click to learn more!',
  Img: '/img/logo.png'
};

const navItems = [
  { label: "Services", href: "/#services", icon: <SlowMotionVideoIcon /> },
  { label: "Portfolio", href: "/#portfolio", icon: <TheatersIcon /> },
  { label: "About", href: "/#about", icon: <InfoIcon /> },
  { label: "Contact", href: "/#contact", icon: <ContactPageIcon /> },
];

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  /* Mobile device navigation drawer */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250, backgroundColor: '#fff' }} role="presentation" >      
      <List>
        <ListItem
          component="a"
          href={"/#header"}
          sx={{ textAlign: "center", }} disablePadding>
          <ListItemButton>           
            <ListItemText primary={navigationSection.Title}
              slotProps={{
                primary: {
                  sx: { fontWeight: 'bold' }
                }
              }}
            />
          </ListItemButton>
        </ListItem>
        {navItems.map((item, index) => (
          <ListItem key={item.label}
            component="a"
            href={item.href}
            sx={{ textAlign: "center" }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Image
              src={navigationSection.Img}
              alt="Image of the busy making media logo."
              width={"100"}
              height={"100"}
            />

            {isMobile ? (
              <>

                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>

              </> 
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    component="a"
                    href={item.href}
                    color="white"
                    sx={{                      
                      textDecoration: "none",                    
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>     
      <Box component="nav">
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}          
        >
          {drawer}
        </Drawer>
      </Box>     
      <Toolbar />
    </>
  );
};

export default Navigation;
