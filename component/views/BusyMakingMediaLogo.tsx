'use client';

import { Box, Typography, Container } from '@mui/material';

export default function BusymakingmediaLogo() {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#021373', // dark blue
                    color: '#F2CB05', // bright yellow
                    padding: 4,
                    textAlign: 'center',
                    position: 'relative',
                    fontFamily: 'Raleway, sans-serif',
                }}
            >
                {/* Top Line */}
                <Box
                    sx={{
                        height: '4px',
                        backgroundColor: '#F2CB05',
                        width: '100px',
                        margin: '0 auto 8px auto',
                    }}
                />

                {/* BUSY MAKING */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                    }}
                >
                    Busy Making
                </Typography>

                {/* Bottom Line */}
                <Box
                    sx={{
                        height: '4px',
                        backgroundColor: '#F2CB05',
                        width: '100px',
                        margin: '8px auto 16px auto',
                    }}
                />

                {/* MEDIA */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 4,
                        textTransform: 'uppercase',
                    }}
                >
                    Media
                </Typography>

                {/* Play Button Icon */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: 32,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: '#F2CB05',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            width: 0,
                            height: 0,
                            borderLeft: '16px solid #021373',
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}
