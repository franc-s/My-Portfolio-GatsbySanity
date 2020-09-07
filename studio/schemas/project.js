export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "platform",
      title: "Platform",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectIntro",
      title: "Project Intro",
      description: "This will be the first paragraph",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "projectSummary",
      title: "Project Summary",
      description: "This will be the second paragraph",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "previewIMG",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "projectIMG1",
      title: "Project Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "projectIMG2",
      title: "Project Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
