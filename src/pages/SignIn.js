import React from 'react'
import { navigate, Link } from '@reach/router'
import { useSignIn } from 'croods-light-auth'

import FormError from 'components/FormError'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import useFlash from 'hooks/useFlash'

export default () => {
  const { success } = useFlash()
  const [
    { signingIn, error, emailProps, passwordProps, formProps },
  ] = useSignIn({
    afterSuccess: () => {
      navigate('/')
      success('Successfully signed in')
    },
  })

  return (
    <form {...formProps}>
      <h2>Sign In</h2>
      <Input {...emailProps} label="Email address" />
      <Input {...passwordProps} />
      <p>
        <Link to="/sign-up">{`Don't have an account?`}</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot your password?</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={signingIn}>Sign In</SubmitButton>
    </form>
  )
}
