'use client'
import { FC, } from 'react';
import {
    Fade,
    Container,
    Typography,
    Box,
} from '@mui/material';

const AnimatedThankYou: FC = () => {


    return (
        <Fade in={true} easing={{ enter: "ease-out", exit: "ease-in" }}>
            <Box component="section" id="contact" py={10}>
                <Container maxWidth="md">
                    <Box textAlign="center" mb={6}>
                        <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
                            {`Thank you! We will reach out to your soon!`}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Fade>
    );
};

export default AnimatedThankYou;
