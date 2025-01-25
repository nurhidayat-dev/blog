// Any combination of these
import { I18nPlugin, RenderPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";

export default function (eleventyConfig) {
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        // type contains the bundle name.
        let { type, page } = this;
        let result = await postcss([tailwind]).process(content, {
          from: page.inputPath,
          to: null,
        });
        return result.css;
      },
    ],
  });
  return {
    dir: {
      outuput: "_site",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
