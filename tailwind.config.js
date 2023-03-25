/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: "'Noto Sans', sans-serif",
      body: "'Raleway', sans-serif",
    },

    extend: {
      screens: {
        md: "790px",
      },
      colors: {
        primary: "#ff595a",
        secondary: "#fffafa",
        headingText: "#25283a",
        bodyText: "#c7c8cc",
        secondaryText: "#727587",
        footerBg: "#faeded",
        accent: "#ea4c88",
        cardHeading: "#19266b",
      },
    },
  },
  plugins: [],
};

/* Fonts */
/* 
 HEAding ==== "Noto Sans"
 Body ===== "RAleway" Fallback = Inter, Roboto 
*/

/* colors */
/* 
Primary #ff595a Rose like;
Secondary #fffafa Light Rose;

HEADING #25283a Dark Gray;

body text  #c7c8cc
secondary text #727587

Accent #ea4c88 Hover

Dark Purple CArd Hover Color #19266b 
Footer #faeded

Dark Primary
Dark Body Text
Dark Secondary

*/
