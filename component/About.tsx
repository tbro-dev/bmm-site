import { FC } from 'react';
import { Box, Avatar, Container, Typography, Grid, useTheme } from '@mui/material';

const aboutSection = {
  Title: 'About',
  Description: 'This is a description of this section',
  CallToAction: 'Be apart of our story!'
};

const timelineData = [
  {
    date: '2009-2011',
    title: 'Our Humble Beginnings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: '/media/about/1.jpg?width=160&height=160&rmode=stretch&token=abc',
  },
  {
    date: 'March 2011',
    title: 'An Agency is Born',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: '/media/about/2.jpg?width=160&height=160&rmode=stretch&token=abc',
    inverted: true,
  },
  {
    date: 'December 2015',
    title: 'Transition to Full Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: '/media/about/3.jpg?width=160&height=160&rmode=stretch&token=abc',
  },
  {
    date: 'July 2020',
    title: 'Phase Two Expansion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
    image: '/media/about/4.jpg?width=160&height=160&rmode=stretch&token=abc',
    inverted: true,
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
          <Typography variant="subtitle1" color="text.secondary">
            {aboutSection.Description}
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
                <Typography variant="h6" fontWeight="bold">
                  {item.date}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}

        {/* Final call to action */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h5" fontWeight="bold" whiteSpace="pre-line">
            {aboutSection.CallToAction}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
