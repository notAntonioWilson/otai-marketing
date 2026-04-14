import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        purple:{400:"#a855f7",500:"#9333ea",600:"#7c3aed",700:"#6d28d9",900:"#3b0764",950:"#1a0533"},
        dark:{DEFAULT:"#050510",100:"#0a0a1f",200:"#0f0f2e"},
      },
      fontFamily:{display:["var(--font-display)"],body:["var(--font-body)"],mono:["var(--font-mono)"]},
    },
  },
  plugins:[],
};
export default config;
