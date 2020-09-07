const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allSanityProject{
        edges {
          node {
            slug{
              current
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic('There was a probelm loading your projects');
    return;
  }

  const projects = result.data.allSanityProject.edges;

  projects.forEach(({ node: project }) => {

    const slug = project.slug.current;
    
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/project.tsx'),
      context: { slug },
    });
  });
};
