import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import { Layout } from '@/components/Layout';
import { Landing } from '@/components/Landing';

const Home: React.FC<PageProps> = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allSanityLanding {
        edges {
          node {
            landingIntro
            profileIMG {
              asset {
                  gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const landing = data.allSanityLanding.edges[0].node;
  const profileIMG = landing.profileIMG.asset.gatsbyImageData
  const { landingIntro } = landing;

  return (
    <Layout>
      <Landing profileIMG={profileIMG} landingIntro={landingIntro} />
    </Layout>
  );
};

export default Home;
