import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Grid = styled.li`
  position: relative;
  display: grid;
  margin: 40px 0;

  grid-template-columns: 210px 1fr;
  grid-gap: 50px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.font.highlight};
  font-weight: 600;
  text-decoration: none;
  padding: 7px 0px;

  display: flex;
  justify-content: center;
  text-align: center;
  &:hover {
    text-decoration: none;
    border-bottom: 0px solid;
    opacity: 0.6;
  }
`;

const StyledImageLink = styled(Link)`
  &:hover {
    opacity: 0.6;
  }
`;
const ProjectTitle = styled.h3`
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.5em;
  font-weight: 600;
`;

const ProjectSubtitle = styled.h3`
  font-weight: 300;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.1em;
`;

export interface ProjectPreviewProps {
  slug: string;
  imageData: any;
  title: string;
  subtitle: string;
}

const ProjectPreview = ({
  slug,
  imageData,
  title,
  subtitle,
}: ProjectPreviewProps) => (
  <Grid>
    <StyledImageLink to={`/${slug}/`}>
      <Img
        fluid={imageData}
        alt={title}
        style={{
          maxHeight: `calc(40vh - 3em)`,
        }}
        imgStyle={{ objectFit: `contain` }}
      />
    </StyledImageLink>

    <div style={{ marginTop: `auto`, marginBottom: `auto` }}>
      <StyledLink to={`/${slug}/`}>
        <ProjectTitle>{title}</ProjectTitle>
      </StyledLink>

      <StyledLink to={`/${slug}/`}>
        <ProjectSubtitle>{subtitle}</ProjectSubtitle>
      </StyledLink>

      <StyledLink to={`/${slug}/`}>View this project &rarr;</StyledLink>
    </div>
  </Grid>
);

export default ProjectPreview;
