"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNotification } from "../../components/layout/NotificationContext";

// ✅ Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().nullable(),
  email: Yup.string().email("Invalid email").nullable(),
  phone: Yup.string()
    .matches(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number")
    .nullable(),
  message: Yup.string()
    .min(6, "Message must be at least 6 characters")
    .required("Message is required"),
});

export default function Contact() {
  const { showSuccess, showError } = useNotification();
  const [preferred, setPreferred] = useState<"email" | "phone" | null>(null);

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            fontWeight: "bold", 
            color: "var(--color-accent)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.02em",
            mb: 3,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "var(--color-text)",
            fontFamily: "var(--font-geist-sans)",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Get in touch with us to discuss your custom jewellery needs
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          background: "var(--glass-bg)",
          backdropFilter: "blur(var(--blur))",
          borderRadius: 3,
          border: "var(--glass-border)",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography 
          variant="h4" 
          component="h2"
          sx={{ 
            fontWeight: "600", 
            color: "var(--color-accent)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.02em",
            mb: 5,
            textAlign: "center",
          }}
        >
          Send us a Message - This is not KB Jewels...yet...To contact KB Jewels, go to <a href="https://www.kb-jewels.com/contact" target="_blank" rel="noopener noreferrer">
          https://www.kb-jewels.com/contact</a>
        </Typography>

        {/* ✅ Formik form */}
        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {

            showError("This form does not work.")

            try {
              // require at least one contact method
              if (!values.email && !values.phone) {
                showError("Either email or phone number is required");
                return;
              }
              if (values.email && values.phone && !preferred) {
                showError("Select a preferred contact method");
                return;
              }

              const submission = {
                name: values.name || undefined,
                email: values.email || undefined,
                phone: values.phone || undefined,
                preferredContact: preferred || undefined,
                message: values.message || undefined,
              };

              console.log("Form submitted:", submission);
              resetForm();
              setPreferred(null);
              showSuccess("Message sent successfully!");
            } catch (err) {
              showError("Something went wrong. Please try again.");
            }
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => {
            const contactValid =
              (values.email || values.phone) && values.message.length >= 6;

            return (
              <Form>
                {/* Responsive Layout */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                  }}
                >
                  {/* Left Column - Contact Fields */}
                  <Box
                    sx={{
                      flex: { md: "0 0 40%" },
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    {/* Name */}
                    <TextField
                      fullWidth
                      name="name"
                      label="Full Name (Optional)"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          background: "var(--glass-bg)",
                          backdropFilter: "blur(var(--blur))",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "var(--color-border)",
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--color-accent-muted)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--color-text-muted)",
                          "&.Mui-focused": {
                            color: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--color-text)",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "var(--color-text-muted)",
                        },
                      }}
                    />

                    {/* Email */}
                    <TextField
                      fullWidth
                      name="email"
                      label="Email Address"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          background: "var(--glass-bg)",
                          backdropFilter: "blur(var(--blur))",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "var(--color-border)",
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--color-accent-muted)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--color-text-muted)",
                          "&.Mui-focused": {
                            color: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--color-text)",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "var(--color-text-muted)",
                        },
                      }}
                    />

                    {/* Phone */}
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          background: "var(--glass-bg)",
                          backdropFilter: "blur(var(--blur))",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "var(--color-border)",
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--color-accent-muted)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--color-text-muted)",
                          "&.Mui-focused": {
                            color: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--color-text)",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "var(--color-text-muted)",
                        },
                      }}
                    />

                    {/* Preferred contact if both given */}
                    {values.email && values.phone && (
                      <FormControl>
                        <FormLabel 
                          sx={{ 
                            color: "var(--color-text)",
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Preferred Contact Method
                        </FormLabel>
                        <RadioGroup
                          row
                          value={preferred}
                          onChange={(e) =>
                            setPreferred(e.target.value as "email" | "phone")
                          }
                          sx={{
                            "& .MuiFormControlLabel-root": {
                              color: "var(--color-text)",
                            },
                            "& .MuiRadio-root": {
                              color: "var(--color-text-muted)",
                              "&.Mui-checked": {
                                color: "var(--color-accent)",
                              },
                            },
                            "& .MuiFormControlLabel-label": {
                              color: "var(--color-text)",
                              fontFamily: "var(--font-geist-sans)",
                            },
                          }}
                        >
                          <FormControlLabel
                            value="email"
                            control={<Radio />}
                            label="Email"
                          />
                          <FormControlLabel
                            value="phone"
                            control={<Radio />}
                            label="Phone"
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  </Box>

                  {/* Right Column - Message */}
                  <Box
                    sx={{
                      flex: { md: "1" },
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <TextField
                      fullWidth
                      name="message"
                      label="Message *"
                      multiline
                      rows={8}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                      variant="outlined"
                      sx={{
                        height: "100%",
                        "& .MuiOutlinedInput-root": {
                          background: "var(--glass-bg)",
                          backdropFilter: "blur(var(--blur))",
                          borderRadius: 2,
                          height: "100%",
                          "& fieldset": {
                            borderColor: "var(--color-border)",
                          },
                          "&:hover fieldset": {
                            borderColor: "var(--color-accent-muted)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--color-text-muted)",
                          "&.Mui-focused": {
                            color: "var(--color-accent)",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--color-text)",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "var(--color-text-muted)",
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* Submit Button - Full Width Below */}
                <Box sx={{ mt: 6, textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    disabled={!contactValid || true } // Delete true condition when domain transfered and form and working
                    sx={{
                      background: "var(--color-accent)",
                      color: "var(--color-bg)",
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": {
                        background: "var(--color-accent-muted)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(212, 175, 55, 0.3)",
                      },
                      "&:disabled": {
                        background: "var(--color-text-muted)",
                        color: "var(--color-bg)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message - This button is disabled
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}
