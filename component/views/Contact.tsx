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
import buildAdaptiveCard from '../lib/buildAdaptiveCard';
import getUserBrowser from '../lib/getUserBrowser';
import CrudClient from '../lib/CrudClient';
import getDeviceType from '../lib/getDeviceType';

type ContactProps = {
  url: string;
};

const Contact: FC<ContactProps> = ({ url }) => {
  const [submitted, setSubmitted] = useState(false);
  const [userBrowser] = useState(getUserBrowser());
  const [userDevice] = useState(getDeviceType());
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
      browser: userBrowser,
      device: userDevice
    };
    if (isValid) {
      let cardObject = buildAdaptiveCard(sanitizedForm);
      console.log('Form sanitized and submitted:', cardObject);      
      const userEvent = new CrudClient(url);
      userEvent.create(false, cardObject)
        .then(data => {
          setSubmitted(true);
          console.log('Contact us information submitted successfully.')

        })
        .catch(err => console.error(err));
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
      }, 10000);
    }
  }, [submitted]);


  return !submitted ? (
    <Fade in={!submitted} easing={{ enter: "ease-out", exit: "ease-in" }}>
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
