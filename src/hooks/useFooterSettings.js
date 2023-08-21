import { graphql, useStaticQuery } from 'gatsby'

const useFooterSettings = () => {
  const { footerSettings } = useStaticQuery(
    graphql`
      query FOOTER_SETTINGS_QUERY {
        footerSettings {
          logoImage
          leftMenuItems {
            label
            url
            external
          }
          rightMenuItems {
            label
            url
            external
          }
          icons {
            id
            url
            external
          }
        }
      }
    `
  );
  return footerSettings
}

export default useFooterSettings
