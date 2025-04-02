"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Stack,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@emotion/react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import Image from "next/image";

const projects = [

  {
    id: 0,
    title: "Let'stalkJob",
    description:
      "Le 1er Podcast Emploi au Maroc avec Mehdi Griny",
    image: "/projects/letstalk.PNG",
    tags: ["Next.js", "React", "Material UI", "Framer Motion"],
    github: "https://github.com/yelmouss",
    demo: "https://letstalkjobs.vercel.app/",
    category: "web",
  }, 
  {
    id: 0,
    title: "HOPE Maroc website",
    description: "Aide aux chercheurs d'emploi, porteurs de projets, formation et mentorat.",
    image: "/projects/hope.PNG",
    tags: ["Next.js", "React", "Material UI", "Framer Motion"],
    demo: "https://hope-three-xi.vercel.app/",
  },
   {
    id: 1,
    title: "Portfolio v2",
    description:
      "Personal portfolio website built with Next.js and Material UI",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "React", "Material UI", "Framer Motion"],
    github: "https://github.com/yelmouss",
    demo: "https://yelmouss.vercel.app",
    category: "web",
  },
  {
    id: 2,
    title: "Paylik",
    description: "Facilitate payments between employers and employees",
    image: "/projects/paylik.png",
    tags: ["Next.js", "React", "Material UI", "Framer Motion", "SEO"],
    demo: "https://paylik.ma",
    category: "web",
  },
  {
    id: 3,
    title: "Petit Iguane",
    description: "Surf and Yoga retreat in Morocco",
    image: "/projects/petitiguane.png",
    tags: ["Next.js", "Google analytics", "Material UI", "Framer Motion", "SEO"],
    github: "https://github.com/yelmouss",
    demo: "https://petitiguane.com",
    category: "web",
  },
  {
    id: 4,
    title: "Edukalis",
    description: "Formation • Orientation • Développement professionnel",
    image: "/projects/edukalis.png",
    tags: ["Next.js", "Google analytics", "Material UI", "Framer Motion", "SEO"],
    github: "https://github.com/yelmouss",
    demo: "https://edukalis.com",
    category: "web",
  },
  {
    id: 5,
    title: "Touzar.ma",
    description: "The best traditional and modern Moroccan dishes",
    image: "/projects/touzar.png",
    tags: ["Next.js", "Google analytics", "Material UI", "Framer Motion", "SEO"],
    demo: "https://touzar.ma",
    category: "web",
  },
  {
    id: 6,
    title: "Kanap",
    description: "Studies Project Openclassrooms",
    image: "https://kanapro.vercel.app/images/banniere.png",
    tags: ["JS valilla"],
    demo: "https://kanapro.vercel.app/html/",
    category: "web",
  },
  {
    id: 7,
    title: "P7",
    description: "Studies Project Openclassrooms",
    image: "https://p7-yelmouss.vercel.app/static/media/logo-kasa.bb1c78bdbf97911cf6044e13e0c4f670.svg",
    tags: ["React JS"],
    demo: "https://p7-yelmouss.vercel.app/",
  },
  {
    id: 8,
    title: "Agence la panthère",
    description: "Studies Project Openclassrooms",
    image: "https://agencelapanthere.vercel.app/img/4.bmp",
    tags: ["HTML", "CSS", "SEO"],
    demo: "https://agencelapanthere.vercel.app/",
  },
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
    <CardContainer className="inter-var">
      <CardBody className="bg-white dark:bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <Image
            src={project.image}
            height={400}
            width={600}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
          />
        </CardItem>
        <CardItem translateZ="40" className="w-full mt-4">
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
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          {project.github && (
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Link href={project.github} target="_blank" passHref>
                <GitHubIcon sx={{ mr: 1 }} />
                Code
              </Link>
            </CardItem>
          )}
          {project.demo && (
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <Link href={project.demo} target="_blank" passHref>
                <LaunchIcon sx={{ mr: 1 }} />
                Demo
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
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
