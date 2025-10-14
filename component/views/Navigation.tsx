'use client'

import { FC, useState, useEffect, } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const navigationSection = {
  Title: 'Busy Making Media',
  Description: 'Audio and video content for digital platforms.',
  CallToAction: 'Click to learn more!'
};

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },  
  { label: "Contact", href: "/#contact" },
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
        <ListItem key={99}
          component="a"
          href={"/#header"}
          sx={{ textAlign: "center" }} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {99 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={navigationSection.Title} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item, index) => (
          <ListItem key={item.label}
            component="a"
            href={item.href}
            sx={{ textAlign: "center" }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
            <Typography             
              component="a"
              href="/#header"
              color="secondary"
              sx={{                
                textDecoration: "none",
                //fontWeight: "bold",                
              }}
            >
              {navigationSection.Title}
            </Typography>

            {isMobile ? (
              <>
                {/*
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                */}
              </> 
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    component="a"
                    href={item.href}
                    color="secondary"
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
