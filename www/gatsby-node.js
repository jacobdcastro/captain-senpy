const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, reject } = actions;
  const blogRes = await graphql(`
    {
      allSanityBlogPost {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (blogRes.errors) {
    reject(blogRes.errors);
  }

  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  blogRes.data.allSanityBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug.current}`,
      component: blogPostTemplate,
      context: {
        id: node._id,
        slug: node.slug.current,
      },
    });
  });

  return;
};
