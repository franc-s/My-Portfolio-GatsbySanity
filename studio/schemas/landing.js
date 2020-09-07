export default {
  name: "landing",
  title: "Landing",
  type: "document",
  fields: [
    {
      name: "profileIMG",
      title: "Profile IMG",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "landingIntro",
      title: "Landing Intro",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
