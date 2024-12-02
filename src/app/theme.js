'use client';
import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from "@mui/material/styles";

const myCustomColors = {
    one: "#222831",
    two: "#393E46",
    three: "#00ADB5",
    four: "#1282a2",
    five: "#EEEEEE",
    gradient: 'linear-gradient(45deg, #0a1128 30%,#001f54 90%)'
};

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const commonThemeSettings = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        button: {
            fontFamily: poppins.style.fontFamily,
        },
        p: {
            fontFamily: poppins.style.fontFamily,
        },
        h1: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '4rem',
            fontWeight: 400,
        },
        h2: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '1.8rem',
        },
        h3: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '1.6rem',
        },
        h4: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '1.4rem',
        },
        h5: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '1.2rem',
        },
        h6: {
            fontFamily: poppins.style.fontFamily,
            fontSize: '1rem',
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