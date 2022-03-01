import React from 'react';

import { Link } from 'gatsby';

import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { Title } from '@/components/Title';

const TechDiv = styled.div`
  margin: 0.2em;
  &:hover {
    background-color: black;
    cursor: default;
  }
  background-color: rgba(92, 151, 191, 1);
  font-weight: 400;
  color: white;
  border: 1px solid ${(props) => props.theme.color.main};

  font-family: ${(props) => props.theme.font.highlight};
`;

const TechItem = styled.h6`
  font-weight: 400;
  color: white;
  padding: 0.3em;

  font-family: ${(props) => props.theme.font.highlight};
`;

const ProjectText = styled.p`
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.2em;
  font-weight: 200;
`;

const Subtitle = styled.h5`
  font-weight: 300;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.1em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
`;

export interface ProjectProps {
  title: string;
  projectIntro: string;
  projectSummary: string;
  url: string;
  previewIMG: FluidObject;
  projectIMG1: FluidObject;
  projectIMG2: FluidObject;
  technologies: Array<string>;
  platform: string;
}
const Project = ({
  title,
  projectIntro,
  projectSummary,
  url,
  previewIMG,
  projectIMG1,
  projectIMG2,
  technologies,
  platform,
}: ProjectProps) => (
  <>
    <Title>{title}</Title>
    <Subtitle> Platform: {platform} </Subtitle>
    <Subtitle> Technologies: </Subtitle>
    <div style={{ display: `flex`, flexWrap: `wrap` }}>
      {technologies.map((item) => (
        <TechDiv key={item}>
          <TechItem>{item}</TechItem>
        </TechDiv>
      ))}
    </div>
    <ProjectText>{projectIntro}</ProjectText>

    <ProjectImage imageData={projectIMG1 || previewIMG} alt={title} />

    <ProjectText>{projectSummary}</ProjectText>

    {projectIMG2 && <ProjectImage imageData={projectIMG2} alt={title} />}

    <p>
      <Link to="/projects">&larr; back to all projects</Link>
    </p>
  </>
);
export default Project;

const ProjectImage = ({ imageData, alt }) => (
  <GatsbyImage
    image={imageData}
    alt={alt}
    style={{
      marginTop: `2%`,
      marginBottom: `2%`,
      maxHeight: `calc(50vh - 3em)`,
    }}
    imgStyle={{ objectFit: `contain` }} />
);
