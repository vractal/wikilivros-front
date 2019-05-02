import React, {
  useEffect,
  useLayoutEffect,
  useContext,
  createContext,
} from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

export const TitleProvider = ({ title, children, separator }) => {
  useLayoutEffect(() => {
    document.title = title
  }, [title])
  return (
    <Context.Provider value={{ separator, title }}>{children}</Context.Provider>
  )
}

TitleProvider.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  separator: PropTypes.string,
}

export const usePageTitle = text => {
  const { title, separator = '|' } = useContext(Context) || {}
  useEffect(() => {
    document.title = title ? [text, title].join(` ${separator} `) : text
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
