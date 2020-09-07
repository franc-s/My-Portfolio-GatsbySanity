import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@/components/Layout';
import Project from '@/components/project';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      projectIntro
      projectSummary
      url
      technologies
      platform
      previewIMG {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      projectIMG1 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      projectIMG2 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject;

  const {
    title,
    projectIntro,
    projectSummary,
    url,
    technologies,
    platform,
  } = project;
  const previewIMG = project.previewIMG.asset.fluid;
  const projectIMG1 = project.projectIMG1?.asset.fluid;
  const projectIMG2 = project.projectIMG2?.asset.fluid;

  return (
    <Layout>
      <Project
        title={title}
        projectIntro={projectIntro}
        projectSummary={projectSummary}
        url={url}
        previewIMG={previewIMG}
        projectIMG1={projectIMG1}
        projectIMG2={projectIMG2}
        technologies={technologies}
        platform={platform}
      />
    </Layout>
  );
};

export default ProjectTemplate;
