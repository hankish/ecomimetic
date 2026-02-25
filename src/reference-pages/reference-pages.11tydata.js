export default {
  tags: ["referencePage"],
  layout: "layouts/reference-page.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (data.parent) {
        return `/manual/reference/${data.parent}/${data.key}/index.html`;
      }
      return `/manual/reference/${data.key}/index.html`;
    },
  },
};
