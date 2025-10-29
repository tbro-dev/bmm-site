import { FC } from 'react';
import { Box, Avatar, Container, Typography, Grid, useTheme } from '@mui/material';


const aboutSection = {
  Title: 'About',
  Description:
    "Busymakingmedia delivers professional video, audio, and crew services for brands, creatives, and digital platforms.",
  CallToAction: 'Join us in shaping the future of media.',
};

const timelineData = [
  {
    date: '2009–2025',
    title: 'Building Expertise in AV Production',
    description:
      'Tyler Broussard spent over 15 years leading audiovisual and software development projects for the Social Security Administration. His work included producing hundreds of training products, managing studio operations, and pioneering cost-saving innovations in media delivery.',
    image: '/img/profile.jpeg',
  },
  {
    date: 'July 2025',
    title: 'Busymakingmedia LLC Founded',
    description:
      'Tyler officially launched Busymakingmedia LLC to bring his creative and technical expertise to a broader audience. The company was founded to produce high-quality video and audio content all platforms.',
    image: '/img/bmblogo.svg',
    inverted: true,
  },
  {
    date: '2026 and Beyond',
    title: 'Expanding Creative Impact',
    description:
      'Busymakingmedia is growing into a full-service media production company, offering branded content, voiceover, sound design, and crew support. The vision is to build a collaborative creative ecosystem that empowers storytelling and drives value across platforms.',
    image: '/img/up.svg',
  },
];

const About: FC = () => {

  return (
    <Box component="section" id="about" py={10}>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" textTransform="uppercase">
            {aboutSection.Title}
          </Typography>      
        </Box>

        {timelineData.map((item, index) => (
          <Grid
            container
            spacing={4}
            direction={item.inverted ? 'row-reverse' : 'row'}
            alignItems="center"
            key={index}
            mb={6}
          >
            <Grid size={{ xs: 12, md: 2 }}>
              <Avatar
                alt={item.title}
                src={item.image}
                sx={{
                  width: 160,
                  height: 160,
                  margin: '0 auto',
                  border: `4px solid`,
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 10 }}>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  {item.date}
                </Typography>
                <Typography gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}

        {/* Final call to action */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h4" fontWeight="bold" whiteSpace="pre-line">
            {aboutSection.CallToAction}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
