import { useEffect } from 'react'
import PropTypes from 'prop-types'
import useGlobal from 'store'

const STATIC_TITLE = document.title

export const useSiteTitle = (title, separator) => {
  const [, { setTitle }] = useGlobal()
  useEffect(() => {
    setTitle(title, separator)
  }, [separator, setTitle, title])
}

export const usePageTitle = text => {
  const [{ siteTitle }] = useGlobal()
  const { title, separator } = siteTitle || {}
  useEffect(() => {
    document.title = title ? [text, title].join(` ${separator} `) : text
    return () => {
      document.title = title || STATIC_TITLE
    }
  }, [text, separator, title])
}

const PageTitle = ({ children }) => {
  usePageTitle(`${children}`)
  return null
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default PageTitle
