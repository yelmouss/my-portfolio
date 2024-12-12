"use client";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { CircularProgress, Alert, Snackbar } from "@mui/material";

const ContactPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSnackbar({
          open: true,
          message: t("contact.form.success"),
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: t("contact.form.error"),
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const glassMorphism = {
    background: theme.palette.mode === "dark"
      ? "linear-gradient(145deg, rgba(30,41,59,0.4), rgba(30,41,59,0.1))"
      : "linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
    backdropFilter: "blur(10px)",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.1)"
      : "rgba(255,255,255,0.7)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0,0,0,0.3)"
      : "0 8px 32px rgba(31,38,135,0.15)",
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/yelmouss" },
    { icon: <GitHubIcon />, url: "https://github.com/yelmouss" },
    { icon: <EmailIcon />, url: "mailto:yelmouss.devt@gmail.com" },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>

<Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity} onClose={handleCloseSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                ...glassMorphism,
                p: 4,
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  background: "linear-gradient(45deg, #00ADB5, #393E46)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                }}
              >
                {t("contact.title")}
              </Typography>
              <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TextField
          name="name"
          label={t("contact.form.name")}
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
        <TextField
          name="email"
          label={t("contact.form.email")}
          variant="outlined"
          type="email"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
        <TextField
          name="message"
          label={t("contact.form.message")}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
          sx={{
            background: "linear-gradient(45deg, #00ADB5, #393E46)",
            color: "white",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            },
          }}
        >
          {loading ? t("contact.form.sending") : t("contact.form.send")}
        </Button>
      </Box>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                ...glassMorphism,
                p: 4,
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  color="info.main"
                  sx={{ mb: 4 }}
                >
                  {t("contact.info.title")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {[
                    {
                      icon: <LocationOnIcon />,
                      text: "Rabat, Morocco",
                    },
                    {
                      icon: <EmailIcon />,
                      text: "yelmouss.devt@gmail.com",
                    },
                    {
                      icon: <PhoneIcon />,
                      text: "+212 612 865 681",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "background.paper",
                          "&:hover": {
                            transform: "translateX(10px)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Box color="info.main">{item.icon}</Box>
                        <Typography>{item.text}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom color="info.main">
                  {t("contact.social.title")}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={link.url}
                        target="_blank"
                        sx={{
                          color: "info.main",
                          bgcolor: "background.paper",
                          "&:hover": {
                            bgcolor: "info.main",
                            color: "white",
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ContactPage;