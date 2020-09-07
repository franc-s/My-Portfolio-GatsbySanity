export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "introText",
      title: "intro Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "header1",
      title: "Header One",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary1",
      title: "Summary 1",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "header2",
      title: "Header 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary2",
      title: "Summary 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "header3",
      title: "Header 3",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary3",
      title: "Summary 3",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image1",
      title: "Image1",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image2",
      title: "Image2",
      type: "image",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image3",
      title: "Image3",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image4",
      title: "Image4",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
