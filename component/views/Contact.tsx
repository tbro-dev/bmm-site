'use client'
import { FC, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';

const Contact: FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <Box component="section" id="contact" py={10}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
            Contact Us
          </Typography>          
        </Box>

        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                required
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                required
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                required
                fullWidth
                label="Your Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                required
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: 'uppercase' }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
