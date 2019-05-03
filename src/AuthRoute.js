import React from 'react'
import { navigate } from '@reach/router'
import { useFlash } from 'seasoned-flash'
import { Auth } from 'croods-light-auth'

export default ({ Component, ...props }) => {
  const { error } = useFlash()
  return (
    <Auth
      {...props}
      unauthorized={() => {
        navigate(`/sign-in?redirect_to=${props.location.pathname}`)
        error('You are not authorized to access that page')
      }}
      Component={Component}
    />
  )
}
