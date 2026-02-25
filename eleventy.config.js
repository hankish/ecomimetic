import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import EleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Collections
  eleventyConfig.addCollection("artifacts", (api) =>
    api.getFilteredByTag("artifact")
      .sort((a, b) => a.data.title.localeCompare(b.data.title)));

  eleventyConfig.addCollection("referencePages", (api) =>
    api.getFilteredByTag("referencePage")
      .sort((a, b) => (a.data.id || '').localeCompare(b.data.id || '')));

  eleventyConfig.addCollection("examples", (api) =>
    api.getFilteredByTag("example")
      .sort((a, b) => a.data.title.localeCompare(b.data.title)));

  eleventyConfig.addCollection("experiments", (api) =>
    api.getFilteredByTag("experiment")
      .sort((a, b) => a.data.title.localeCompare(b.data.title)));

  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByTag("project")
      .sort((a, b) => a.data.title.localeCompare(b.data.title)));

  // Filters
  eleventyConfig.addFilter("hasPage", (items, pageId) =>
    items.filter(item => item.data.pages && item.data.pages.includes(pageId)));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
