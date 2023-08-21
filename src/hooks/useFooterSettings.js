import { graphql, useStaticQuery } from 'gatsby'

const useFooterSettings = () => {
  const { footerSettings } = useStaticQuery(
    graphql`
      query FOOTER_SETTINGS_QUERY {
        footerSettings {
          logoImage
        }
      }
    `
  );
  return footerSettings
}

export default useFooterSettings
