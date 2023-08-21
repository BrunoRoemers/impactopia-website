import { graphql, useStaticQuery } from 'gatsby'

const useHeaderSettings = () => {
  const { headerSettings } = useStaticQuery(
    graphql`
      query HEADER_SETTINGS_QUERY {
        headerSettings {
          logo_image
          menu_items {
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
