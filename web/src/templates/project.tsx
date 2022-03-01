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
            gatsbyImageData
          
        }
      }
      projectIMG1 {
        asset {
            gatsbyImageData
          
        }
      }
      projectIMG2 {
        asset {
          gatsbyImageData         
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
  const previewIMG = project.previewIMG.asset.gatsbyImageData;
  const projectIMG1 = project.projectIMG1?.asset.gatsbyImageData;
  const projectIMG2 = project.projectIMG2?.asset.gatsbyImageData;

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
