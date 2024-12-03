'use client';
import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from "@mui/material/styles";

import { Fira_Code, Space_Grotesk, Inter } from 'next/font/google';

// Modern monospace font for code-like elements
const firaCode = Fira_Code({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

// Clean, modern display font for headings
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Highly readable font for body text
const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const myCustomColors = {
    one: "#222831",
    two: "#393E46",
    three: "#00ADB5",
    four: "#1282a2",
    five: "#EEEEEE",
    gradient: 'linear-gradient(45deg, #0a1128 30%,#001f54 90%)'
};


const commonThemeSettings = {
    typography: {
        fontFamily: inter.style.fontFamily,
        button: {
          fontFamily: spaceGrotesk.style.fontFamily,
          textTransform: 'none',
          fontWeight: 500,
        },
        body1: {
          fontFamily: inter.style.fontFamily,
          lineHeight: 1.7,
        },
        body2: {
          fontFamily: inter.style.fontFamily,
          lineHeight: 1.7,
        },
        h1: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        },
        h2: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 600,
          letterSpacing: '-0.01em',
        },
        h3: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 500,
        },
        h4: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: 500,
        },
        h5: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        h6: {
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: '1rem',
          fontWeight: 500,
        },
        code: {
          fontFamily: firaCode.style.fontFamily,
          fontWeight: 400,
        },
    },
    one: {
        main: myCustomColors.one,
    },
    two: {
        main: myCustomColors.two,
    },
    three: {
        main: myCustomColors.three,
    },
    four: {
        main: myCustomColors.four,
    },
    five: {
        main: myCustomColors.five,
    },
};

const lightTheme = createTheme({
    ...commonThemeSettings,
    palette: {
        mode: 'light',
        primary: {
            main: myCustomColors.five,
        },
        secondary: {
            main: myCustomColors.one,
        },
        info: {
            main: myCustomColors.three,
        },
    },
});

const darkTheme = createTheme({
    ...commonThemeSettings,
    palette: {
        mode: 'dark',
        primary: {
            main: myCustomColors.one,
        },
        secondary: {
            main: myCustomColors.five,
        },
        info: {
            main: myCustomColors.three,
        },
    },
});

export { lightTheme, darkTheme };