// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "The Gorbachev Project",
      sidebar: [
        {
          label: "Counters",
          autogenerate: { directory: "counters" },
        },
        {
          label: "Electrical",
          autogenerate: { directory: "electrical" },
        },
        {
          label: "Flooring",
          autogenerate: { directory: "flooring" },
        },
        {
          label: "Furniture",
          autogenerate: { directory: "furniture" },
        },
        {
          label: "HVAC",
          autogenerate: { directory: "hvac" },
        },
        {
          label: "Plumbing",
          autogenerate: { directory: "plumbing" },
        },
      ],
      plugins: [starlightThemeFlexoki()],
    }),
  ],
});
