// Any combination of these
import { I18nPlugin, RenderPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";
import plugins from "./src/_configs/plugins/index.js";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/**/*.css");

  ["src/assets/fonts/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );

  // plugins
  eleventyConfig.addPlugin(plugins.drafts);

  eleventyConfig.setLibrary("md", plugins.markdownLib);

  // bundle
  eleventyConfig.addBundle("css", { hoist: true });

  return {
    dir: {
      outuput: "_site",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
