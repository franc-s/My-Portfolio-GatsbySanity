import React from 'react';

import { PageProps, graphql, useStaticQuery } from 'gatsby';
import { Layout } from '@/components/Layout';
import { Title } from '../components/Title';
import { AboutLayout } from '../components/About';

const About: React.FC<PageProps> = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allSanityAbout {
        edges {
          node {
            introText
            header1
            summary1
            header2
            summary2
            header3
            summary3

            image1 {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }

            image2 {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }

            image3 {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }

            image4 {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const about = data.allSanityAbout.edges[0].node;
  const {
    introText,
    header1,
    header2,
    header3,
    summary1,
    summary2,
    summary3,
  } = about;

  const image1 = about.image1.asset.fluid;
  const image2 = about.image2.asset.fluid;
  const image3 = about.image3.asset.fluid;
  const image4 = about.image4.asset.fluid;

  return (
    <Layout>
      <Title>About Me</Title>

      <AboutLayout
        introText={introText}
        header1={header1}
        header2={header2}
        header3={header3}
        summary1={summary1}
        summary2={summary2}
        summary3={summary3}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
      />
    </Layout>
  );
};

export default About;
