import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { useFlash } from 'seasoned-flash'
import { Auth } from 'croods-light-auth'
import PageTitle from 'core/PageTitle'

const Route = ({ Component, title, protect, unauthorize, ...props }) => {
  const { error } = useFlash()
  return (
    <>
      {title && <PageTitle>{title}</PageTitle>}
      {protect ? (
        <Auth
          {...props}
          unauthorize={unauthorize}
          unauthorized={() => {
            navigate(`/sign-in?redirect_to=${props.location.pathname}`)
            error('You are not authorized to access that page')
          }}
          Component={Component}
        />
      ) : (
        <Component {...props} />
      )}
    </>
  )
}

Route.propTypes = {
  Component: PropTypes.func.isRequired,
  unauthorize: PropTypes.func,
  protect: PropTypes.bool,
  title: PropTypes.string,
}

export default Route
