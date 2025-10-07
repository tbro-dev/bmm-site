import { FC } from "react";
import { Box, Typography, Fade } from "@mui/material";

const ComingSoonHero: FC = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bgcolor="background.default"
    >
      <Fade in={true} timeout={2000}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          BusyMakingMedia is Coming Soon
        </Typography>
      </Fade>
    </Box>
  );
};

export default ComingSoonHero;
