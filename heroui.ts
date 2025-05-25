import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        background: "rgb(244 251 250)",
        foreground: "rgb(22 29 28)",
        primary: {
          DEFAULT: "rgb(0 61 61)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(33 58 58)",
          foreground: "rgb(255 255 255)",
        },
        danger: {
          DEFAULT: "rgb(116 0 6)",
          foreground: "rgb(255 255 255)",
        },
      },
    },
    dark: {
      colors: {
        background: "rgb(14 21 20)",
        foreground: "rgb(221 228 227)",
        primary: {
          DEFAULT: "rgb(150 235 233)",
          foreground: "rgb(0 43 43)",
        },
        secondary: {
          DEFAULT: "rgb(198 226 224)",
          foreground: "rgb(16 42 41)",
        },
        danger: {
          DEFAULT: "rgb(255 210 204)",
          foreground: "rgb(84 0 3)",
        },
      },
    },
  },
});
