import { graphql, useStaticQuery } from 'gatsby'

const useHeaderSettings = () => {
  const { headerSettings } = useStaticQuery(
    graphql`
      query HEADER_SETTINGS_QUERY {
        headerSettings {
          logo_image
        }
      }
    `
  )
  return headerSettings
}

export default useHeaderSettings
