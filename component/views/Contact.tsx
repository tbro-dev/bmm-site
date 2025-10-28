'use client'
import { FC, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Fade,
} from '@mui/material';
import AnimatedThankYou from './AnimatedThankYou';
import { validateForm } from '../lib/validateForm';
import sanitizeInput from '../lib/sanitizeInput';

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateForm(form);
    setErrors(validationErrors);
    const sanitizedForm = {
      ...form,
      message: sanitizeInput(form.message),
    };
    if (isValid) {
      setSubmitted(true);
      console.log('Form sanitized and submitted:', sanitizedForm);
      //post to db use santizedForm
    }
  };


  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setErrors({ name: '', email: '', phone: '' });
      }, 2000);
    }
  }, [submitted]);


  return !submitted ? (
    <Fade in={!submitted}>
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
                  error={!!errors.name}
                  helperText={errors.name}
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
                  error={!!errors.email}
                  helperText={errors.email}
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
                  error={!!errors.phone}
                  helperText={errors.phone}
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
    </Fade>
  ) : (
    <>
      <AnimatedThankYou />
    </>
  );
};

export default Contact;
