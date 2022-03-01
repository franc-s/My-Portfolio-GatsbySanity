import React from 'react';
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import styled from 'styled-components';
import { Title } from './Title';

const SummaryStyle = styled.p`
  font-weight: 200;
  font-family: ${(props) => props.theme.font.highlight};
  margin-top: 2%;
  font-size: 1.3em;
`;

const HeadingStyle = styled.b`
  font-weight: 700;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.3em;
  margin-top: 2%;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  margin-top: 2%;

  padding: 10px 10px;
  font-weight: 700;
  font-family: ${(props) => props.theme.font.highlight};
  font-size: 1.2em;

  border-radius: 25px;
  border: 3px solid ${(props) => props.theme.color.main};

  &:hover {
    border: 0;
  }
`;

export interface AboutLayoutProps {
  introText: string;
  image1:  GatsbyImageProps["image"];
  image2:  GatsbyImageProps["image"];
  image3:  GatsbyImageProps["image"];
  image4:  GatsbyImageProps["image"];
  header1: string;
  summary1: string;
  header2: string;
  summary2: string;
  header3: string;
  summary3: string;
}
export const AboutLayout = ({
  introText,
  image1,
  image2,
  image3,
  image4,
  header1,
  summary1,
  header2,
  summary2,
  header3,
  summary3,
}: AboutLayoutProps) => (
  <>
    <SummaryStyle>{introText}</SummaryStyle>
    <ImageItem imageData={image1} alt="" />

    <HeadingStyle>{header1}</HeadingStyle>
    <SummaryStyle>{summary1}</SummaryStyle>

    <ImageItem imageData={image2} alt="" />
    <HeadingStyle>{header2}</HeadingStyle>
    <SummaryStyle>{summary2}</SummaryStyle>

    <ImageItem imageData={image3} alt="" />
    <HeadingStyle>{header3}</HeadingStyle>
    <SummaryStyle>{summary3}</SummaryStyle>

    <ImageItem imageData={image4} alt="" />

    <ContactMe />
  </>
);

const ImageItem = ({
  imageData,
  alt,
}: {
  imageData: GatsbyImageProps["image"];
  alt: string;
}) => (
  <GatsbyImage
    image={imageData}
    alt={alt}
    style={{
      marginTop: `2%`,
      marginBottom: `2%`,
    }}
    imgStyle={{ objectFit: `contain` }} />
);

const ContactMe = (): JSX.Element => (
  <ContactDiv>
    <Title> Contact</Title>

    <SummaryStyle>
      Feel free to reach out for any inquiries about my portfolio and work
      opportunities!
    </SummaryStyle>

    <HeadingStyle>
      Please click the button below for more information
    </HeadingStyle>

    <StyledLink href="mailto:francis.delima01@gmail.com?subject=Information Request&body=I would like to find out more about your services?">
      Get in Touch
    </StyledLink>
  </ContactDiv>
);
