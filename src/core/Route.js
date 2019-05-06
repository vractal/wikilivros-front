import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { useFlash } from 'seasoned-flash'
import { Auth } from 'croods-light-auth'
import PageTitle from 'core/PageTitle'

const Route = ({
  Component,
  title,
  protect,
  unauthorize,
  unauthorizeMessage,
  redirect,
  ...props
}) => {
  const { error } = useFlash()
  const path = redirect || `/sign-in?redirect_to=${props.location.pathname}`
  const message =
    unauthorizeMessage || 'You are not authorized to access that page'

  return (
    <>
      {title && <PageTitle>{title}</PageTitle>}
      {protect ? (
        <Auth
          {...props}
          unauthorize={unauthorize}
          unauthorized={async () => {
            await navigate(path)
            error(message)
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
  redirect: PropTypes.string,
  unauthorizeMessage: PropTypes.string,
  protect: PropTypes.bool,
  title: PropTypes.string,
}

export default Route
