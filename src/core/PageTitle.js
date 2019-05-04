import PropTypes from 'prop-types'
import { usePageTitle } from 'core/hooks'

const PageTitle = ({ children }) => {
  usePageTitle(`${children}`)
  return null
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default PageTitle
