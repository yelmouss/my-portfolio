"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@emotion/react";


const projects = [
  {
    id: 1,
    title: "Portfolio v2",
    description:
      "Personal portfolio website built with Next.js and Material UI",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "React", "Material UI", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yelmouss.vercel.app",
    category: "web",
  },
  {
    id: 2,
    title: "Paylik",
    description: "Facilitate payments between employers and employees",
    image: "/projects/paylik.png",
    tags: ["Next.js", "React", "Material UI", "Framer Motion", "SEO"],
    // github: "https://github.com/yelmouss/paylik",
    demo: "https://paylik.ma",
    category: "web",
  },
  {
    id: 3,
    title: "Petit Iguane",
    description: "Surf and Yoga retreat in Morocco",
    image: "/projects/petitiguane.png",
    tags: ["Next.js", "Google analytics", "Material UI", "Framer Motion", "SEO"],
    github: "https://github.com/yelmouss/paylik",
    demo: "https://petitiguane.com",
    category: "web",
  },

  {
    id: 3,
    title: "Touzar.ma",
    description: "The best traditional and modern Moroccan dishes",
    image: "/projects/touzar.png",
    tags: ["Next.js", "Google analytics", "Material UI", "Framer Motion", "SEO"],
    // github: "https://github.com/yelmouss/touzarma",
    demo: "https://touzar.ma",
    category: "web",
  },
  {
    id: 4,
    title: "Kanap",
    description: "Studies Project Openclassrooms",
    image: "https://kanapro.vercel.app/images/banniere.png",
    tags: ["JS valilla"],
    // github: "https://github.com/yelmouss/touzarma",
    demo: "https://kanapro.vercel.app/html/",
    category: "web",
  },
  {
    id: 5,
    title: "P7",
    description: "Studies Project Openclassrooms",
    image: "https://p7-yelmouss.vercel.app/static/media/logo-kasa.bb1c78bdbf97911cf6044e13e0c4f670.svg",
    tags: ["React JS"],
    demo: "https://p7-yelmouss.vercel.app/",
    // github: "
  },
  {
    id: 6,
    title: "Agence la panthère",
    description: "Studies Project Openclassrooms",
    image: "https://agencelapanthere.vercel.app/img/4.bmp",
    tags: ["HTML", "CSS", "SEO"],
    demo: "https://agencelapanthere.vercel.app/",
    // github: "
  },

  // Add more projects here
  // https://kanapro.vercel.app/html/
  // https://p7-yelmouss.vercel.app/
  // https://yelmouss.github.io/Agence-la-panth-re/
];

const categories = ["all", "web", "mobile", "desktop"];

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    style={{ height: "100%" }}
  >
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardMedia
        component="img"

        image={project.image}
        alt={project.title}
        sx={{ objectFit: "cover", height: 200 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ m: 0.5 }}
              color="info"
              variant="outlined"
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={2}>
          {project.github && (
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              size="small"
              component={Link}
              href={project.github}
              target="_blank"
            >
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              startIcon={<LaunchIcon />}
              variant="contained"
              size="small"
              component={Link}
              href={project.demo}
              target="_blank"
            >
              Demo
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  </motion.div>
);

const WorksSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const theme = useTheme()

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <Container maxWidth="xl" className="py-10">
      <Box sx={{ mb: 6, textAlign: "center" }}>
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
          {t("works.title")}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          {t("works.subtitle")}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "contained" : "outlined"}
              onClick={() => setActiveCategory(category)}
              sx={{ textTransform: "capitalize" }}
              color="info"
            >
              {t(`works.categories.${category}`)}
            </Button>
          ))}
        </Stack>
      </Box>

      <Grid container spacing={4}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
};

export default WorksSection;
