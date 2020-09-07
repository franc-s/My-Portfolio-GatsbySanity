import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Grid = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 210px 1fr;
  grid-gap: 20px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LandingTitle = styled.h3`
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.5em;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.font.highlight};
  font-weight: 600;
  text-decoration: none;

  display: flex;
  justify-content: center;

  &:hover {
    text-decoration: none;
    border-bottom: 0px solid;
  }
`;

const LandingButton = styled.h3`
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.3em;
  font-weight: 500;
  padding: 14px 16px;
  margin-top: 5%;
  border-bottom: 3px solid;

  &:hover {
    text-decoration: none;
    border-bottom: 0px solid;
  }
`;

export const Landing = ({
  landingIntro,
  profileIMG,
}: {
  landingIntro: string;
  profileIMG: FluidObject;
}) => (
  <>
    <div style={{ marginTop: `5%`, marginBottom: `5%` }}>
      <Grid>
        <LandingTitle style={{ paddingTop: `10%` }}>
          {landingIntro}
        </LandingTitle>

        <Img
          alt="Francis De Lima"
          fluid={profileIMG}
          style={{
            maxHeight: `calc(35vh - 4em)`,
            borderRadius: `50%`,
          }}
          imgStyle={{ objectFit: `contain` }}
        />
      </Grid>
    </div>

    <StyledLink to="/projects">
      <LandingButton>Learn More</LandingButton>
    </StyledLink>
  </>
);
