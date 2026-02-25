export default {
  tags: ["artifact"],
  layout: "layouts/artifact.njk",
  eleventyComputed: {
    permalink: (data) => `/artifacts/${data.key}/index.html`,
  },
};
