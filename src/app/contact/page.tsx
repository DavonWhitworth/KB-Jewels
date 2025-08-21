"use client";

import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  return (
    <Box sx={{ minWidth: "400px", width: "auto", maxWidth: "90%", mx: "auto", px: { xs: 2, md: 4 }, py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="var(--color-text)" maxWidth="700px" mx="auto">
          Get in touch with us to discuss your custom jewellery needs
        </Typography>
      </Box>

      {/* Grid layout */}
      <Grid container justifyContent="center" spacing={6}>
        <Grid >
          <Typography variant="h5" fontWeight="600" mb={3}>
            Send us a Message
          </Typography>

          {/* ✅ Formik form */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form submitted:", values);
              resetForm();
            }}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <Box display="flex" flexDirection="column" gap={3}>
                  {/* Name */}
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />

                  {/* Email */}
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  {/* Message */}
                  <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Message"
                    multiline
                    rows={5}
                    variant="outlined"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />

                  {/* Submit Button */}
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}
