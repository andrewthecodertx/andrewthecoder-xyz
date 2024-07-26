/** @type {import('tailwindcss').Config} */
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
})
