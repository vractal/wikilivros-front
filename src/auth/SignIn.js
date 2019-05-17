import React from 'react'
import { Link } from '@reach/router'
import { useSignIn } from 'croods-auth'
import { useFlash } from 'seasoned-flash'

import FormError from 'forms/FormError'
import Input from 'forms/Input'
import SubmitButton from 'forms/SubmitButton'
import { useRedirectBack } from 'utils/hooks'
import { forwardParams } from 'utils/helpers'

export default () => {
  const { success } = useFlash()
  const redirectBack = useRedirectBack()
  const [
    { signingIn, error, emailProps, passwordProps, formProps },
  ] = useSignIn({
    afterSuccess: () => {
      redirectBack()
      success('Successfully signed in')
    },
  })

  return (
    <form {...formProps}>
      <h2>Sign In</h2>
      <Input {...emailProps} label="Email address" />
      <Input {...passwordProps} />
      <p>
        <Link to={forwardParams('/sign-up')}>{`Don't have an account?`}</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot your password?</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={signingIn}>Sign In</SubmitButton>
    </form>
  )
}
