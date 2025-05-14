import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        customSky: "#C3EBFA",
        mainText: "#9ca3af",
        secondText: "#6b7280",
        customSkyLight: "#EDF9FD",
        customPurple: "#CFCEFF",
        customPurpleLight: "#F1F0FF",
        customYellow: "#FAE27C",
        customYellowLight: "#FEFCE8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
