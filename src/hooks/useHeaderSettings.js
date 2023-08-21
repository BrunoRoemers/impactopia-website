import { graphql, useStaticQuery } from 'gatsby'

const useHeaderSettings = () => {
  const { headerSettings } = useStaticQuery(
    graphql`
      query HEADER_SETTINGS_QUERY {
        headerSettings {
          logoImage
          menuItems {
            label
            url
            external
          }
          cta {
            label
            url
            external
          }
        }
      }
    `
  );
  return headerSettings
}

export default useHeaderSettings
