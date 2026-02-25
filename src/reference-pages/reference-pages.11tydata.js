export default {
  tags: ["referencePage"],
  layout: "layouts/reference-page.njk",
  eleventyComputed: {
    permalink: (data) => {
      const stem = data.page.filePathStem.replace(/^\/reference-pages/, "");
      return `/manual/reference${stem}/index.html`;
    },
  },
};
