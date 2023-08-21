import { graphql, useStaticQuery } from "gatsby";

const useLandingPageHero = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query LANDING_PAGE_FRONTMATTER_QUERY {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            hero {
              backgroundImage {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              logo {
                publicURL
                childImageSharp {
                  # NOTE: null in case of SVG
                  gatsbyImageData(width: 240)
                }
              }
              subheading
              title
            }
          }
        }
      }
    `
  );
  return markdownRemark.frontmatter.hero;
};

export default useLandingPageHero;
