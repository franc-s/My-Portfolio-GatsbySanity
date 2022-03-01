import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';

import { Layout } from '@/components/Layout';
import ProjectPreview from '@/components/project-preview';

import { Title } from '@/components/Title';

import styled from 'styled-components';

const ProjectIntro = styled.p`
  font-weight: 400;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.2em;
  margin-top: 2%;
`;

const Projects: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            title
            subtitle
            slug {
              current
            }
            previewIMG {
              asset {
                  gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allSanityProject.edges;
  return (
    <Layout>
      <Title>Projects</Title>

      <ProjectIntro>
        Here is a collection of some the projects I have built.
      </ProjectIntro>

      {projects.map(({ node: project }) => {
        const { title, subtitle } = project;

        const slug = project.slug.current;

        const previewIMG = project.previewIMG.asset.gatsbyImageData
        return (
          <ProjectPreview
            title={title}
            subtitle={subtitle}
            slug={slug}
            imageData={previewIMG}
            key={slug}
          />
        );
      })}
    </Layout>
  );
};

export default Projects;
