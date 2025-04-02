"use client";
import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, TextField, Button, Paper, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import { toast, Toaster } from "react-hot-toast";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { GlowingEffect } from "../../components/ui/glowing-effect";

// Styled components for cleaner code
const ContactCard = styled(Paper)(({ theme }) => ({
  borderRadius: 24,
  backdropFilter: "blur(10px)",
  background: theme.palette.mode === "dark" 
    ? "linear-gradient(145deg, rgba(30,41,59,0.35), rgba(30,41,59,0.15))"
    : "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3))",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)"}`,
  boxShadow: theme.palette.mode === "dark" 
    ? "0 10px 30px rgba(0,0,0,0.4)"
    : "0 10px 30px rgba(31,38,135,0.07)",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: theme.spacing(4)
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #00ADB5, #393E46)",
  color: "#fff",
  borderRadius: 12,
  padding: "12px 24px",
  fontWeight: 600,
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 20px rgba(0,173,181,0.3)",
  }
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 12,
  background: `linear-gradient(135deg, ${theme.palette.info.main}22, ${theme.palette.info.main}44)`,
  color: theme.palette.info.main
}));

const ContactPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [animationData, setAnimationData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  // Load animation data
  useEffect(() => {
    fetch('/animationMessage.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error(err));
  }, []);
  
  // Form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      
      if (result.success) {
        toast.success(t("contact.form.success"));
        reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error(t("contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <LocationOnIcon fontSize="large" />, text: "Rabat, Morocco", label: "Location" },
    { icon: <EmailIcon fontSize="large" />, text: "yelmouss.devt@gmail.com", label: "Email" },
    { icon: <PhoneIcon fontSize="large" />, text: "+212 612 865 681", label: "Phone" },
  ];
  
  const socialLinks = [
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/yelmouss", label: "LinkedIn" },
    { icon: <GitHubIcon />, url: "https://github.com/yelmouss", label: "GitHub" },
    { icon: <EmailIcon />, url: "mailto:yelmouss.devt@gmail.com", label: "Email" },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 30% 30%, rgba(0,173,181,0.1), transparent 70%), radial-gradient(circle at 80% 80%, rgba(57,62,70,0.1), transparent)'
          : 'radial-gradient(circle at 30% 30%, rgba(0,173,181,0.05), transparent 70%), radial-gradient(circle at 80% 80%, rgba(57,62,70,0.05), transparent)',
        py: 8
      }}
    >
      <Toaster position="top-right" />
      
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header avec le GlowingEffect comme avant */}
          <Box mb={6} textAlign="center" position="relative">
        
  
             <Typography
                      variant="h1"
                      className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
                      sx={{
                        fontSize: { xs: "3rem", md: "4.5rem" },
                        fontWeight: 800,
                        mb: 2,
                        textShadow: theme.palette.mode === "dark"
                          ? "0 0 40px rgba(0,173,181,0.3)"
                          : "none"
                      }}
                    >
                      {t('contact.title')}
                    </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}
            >
              {t('contact.subtitle')}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ height: '100%', position: 'relative' }}
              >
                {/* GlowingEffect pour le formulaire - effet plus subtil */}
                <Box sx={{ position: 'relative', height: '100%', borderRadius: 10 }}>
                  <GlowingEffect
                    blur={5}
                    borderWidth={4}
                    spread={30}
                    glow={false}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.2}
                    variant="default"
                    movementDuration={3}
                  />
                  
                  <ContactCard>
                    <Typography variant="h4" fontWeight={600} color="info.main" mb={1}>
                      {t("contact.form.title")}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" mb={4}>
                      {t("contact.form.description")}
                    </Typography>
                    
                    <Box
                      component="form"
                      onSubmit={handleSubmit(onSubmit)}
                      sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}
                    >
                      {/* Champs de formulaire inchangés */}
                      <TextField
                        label={t("contact.form.name")}
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name && t("contact.form.required")}
                        {...register("name", { required: true })}
                        InputProps={{ sx: { borderRadius: 2 } }}
                      />
                      
                      <TextField
                        label={t("contact.form.email")}
                        type="email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email && t("contact.form.validEmail")}
                        {...register("email", { 
                          required: true, 
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                        })}
                        InputProps={{ sx: { borderRadius: 2 } }}
                      />
                      
                      <TextField
                        label={t("contact.form.message")}
                        multiline
                        rows={4}
                        fullWidth
                        error={!!errors.message}
                        helperText={errors.message && t("contact.form.required")}
                        {...register("message", { required: true })}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        sx={{ mb: 2 }}
                      />
                      
                      {/* GlowingEffect spécifique pour le bouton */}
                      <Box sx={{ position: 'relative', alignSelf: 'flex-end', mt: 'auto' }}>
                        <GlowingEffect
                          blur={10}
                          borderWidth={2}
                          spread={15}
                          glow={isSubmitting}
                          disabled={false}
                          proximity={50}
                          inactiveZone={0.1}
                          variant="default"
                        />
                        <GradientButton
                          type="submit"
                          disabled={isSubmitting}
                          endIcon={isSubmitting ? null : <SendIcon />}
                        >
                          {isSubmitting ? (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 2 }}
                              style={{ 
                                height: 2, 
                                background: '#fff',
                                position: 'absolute',
                                bottom: 0,
                                left: 0
                              }}
                            />
                          ) : t("contact.form.send")}
                        </GradientButton>
                      </Box>
                    </Box>
                  </ContactCard>
                </Box>
              </motion.div>
            </Grid>
            
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ height: '100%', position: 'relative' }}
              >
                {/* GlowingEffect pour la carte d'information */}
                <Box sx={{ position: 'relative', height: '100%', borderRadius: 10 }}>
                  <GlowingEffect
                    blur={5}
                    borderWidth={4}
                    spread={30}
                    glow={false}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.2}
                    variant="default"
                    movementDuration={3}
                  />
                  
                  <ContactCard>
                    <Box display="flex" justifyContent="center" mb={3} position="relative">
                      {animationData && (
                        <>
                          {/* GlowingEffect pour l'animation */}
                          <Box sx={{ position: 'absolute', width: '200px', height: '200px' }}>
                            <GlowingEffect
                              blur={10}
                              borderWidth={0}
                              spread={60}
                              glow={true}
                              disabled={false}
                              proximity={0}
                              inactiveZone={0}
                              variant="default"
                              movementDuration={5}
                            />
                          </Box>
                          <Box width="200px" height="200px">
                            <Lottie animationData={animationData} loop={true} />
                          </Box>
                        </>
                      )}
                    </Box>
                    
                    <Typography variant="h4" fontWeight={600} color="info.main" mb={3}>
                      {t("contact.info.title")}
                    </Typography>
                    
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          {/* Item de contact avec effet hover */}
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 2,
                              borderRadius: 3,
                              bgcolor: 'background.paper',
                              border: '1px solid',
                              borderColor: theme.palette.mode === 'dark' 
                                ? 'rgba(255,255,255,0.1)' 
                                : 'rgba(0,0,0,0.05)',
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              '&:hover': {
                                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                                borderColor: theme.palette.info.main,
                              },
                            }}
                          >
                            <ContactIcon>{item.icon}</ContactIcon>
                            <Box>
                              <Typography variant="body2" color="text.secondary" fontSize="0.8rem">
                                {item.label}
                              </Typography>
                              <Typography variant="body1" fontWeight={500}>
                                {item.text}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                    
                    <Box mt="auto" position="relative">
                      <Typography variant="h6" fontWeight={600} color="info.main" mb={2}>
                        {t("contact.social.title")}
                      </Typography>
                      
                      <Box display="flex" gap={2}>
                        <AnimatePresence>
                          {socialLinks.map((link, index) => (
                            <motion.div
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.8 + index * 0.1 
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                              whileTap={{ scale: 0.9 }}
                              style={{ position: 'relative' }}
                            >
                              {/* GlowingEffect pour chaque bouton social */}
                              <Box sx={{ position: 'absolute', width: '50px', height: '50px' }}>
                                <GlowingEffect
                                  blur={8}
                                  borderWidth={0}
                                  spread={20}
                                  glow={false}
                                  disabled={false}
                                  proximity={30}
                                  inactiveZone={0.2}
                                  variant="default"
                                />
                              </Box>
                              <IconButton
                                href={link.url}
                                target="_blank"
                                aria-label={link.label}
                                sx={{
                                  width: 50,
                                  height: 50,
                                  color: theme.palette.info.main,
                                  bgcolor: 'background.paper',
                                  border: '2px solid transparent',
                                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                  "&:hover": {
                                    bgcolor: theme.palette.info.main,
                                    color: 'white',
                                    borderColor: theme.palette.info.light,
                                  }
                                }}
                              >
                                {link.icon}
                              </IconButton>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </Box>
                    </Box>
                  </ContactCard>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactPage;