import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';

import { FaLinkedin } from 'react-icons/fa';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: left;
  grid-area: footer;
  margin: 25px 0;
  padding: 1rem;
`;

const SocialLinksList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  max-width: 300px;
`;

const SocialLinkListItem = styled.li`
  opacity: 0.5;
  transition: opacity 0.6s ease 0s;
  &:hover {
    opacity: 1;
  }
`;

const Email = styled.p`
  font-family: ${(props) => props.theme.font.highlight};
  margin-left: auto;
  padding-left: 1%;
  font-size: 1.2em;
`;

export const Footer = (): JSX.Element => (
  <StyledFooter>
    <SocialLinksList>
      <SocialLinkListItem>
        <SocialLink
          name="Email"
          iconId="email"
          url="mailto:francis.delima01@gmail.com?subject=Lets Work Togehter"
        />
      </SocialLinkListItem>

      <SocialLinkListItem>
        <SocialLink
          name="Linkedin"
          iconId="linkedin"
          url="https://www.linkedin.com/in/francis-de-lima/"
        />
      </SocialLinkListItem>
    </SocialLinksList>

    <Email>francis.delima01@gmail.com</Email>
  </StyledFooter>
);

const svgIconsById = {
  email: MdEmail,
  linkedin: FaLinkedin,
};

const resolveIcon = (iconId: string) => {
  const Icon = svgIconsById[iconId];
  if (!Icon) {
    console.error(`Icon for social link ${iconId} was not found.`);
  }
  return Icon;
};

const SocialLink = ({
  iconId,
  name,
  url,
}: {
  iconId: string;
  name: string;
  url: string;
}): JSX.Element => {
  const Icon = resolveIcon(iconId);
  return (
    <a
      style={{ marginLeft: 10 }}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={name}
    >
      <Icon size={25} />
    </a>
  );
};
