import React from 'react'
import { navigate, Link } from '@reach/router'
import { useForgotPassword } from 'croods-auth'

import FormError from 'forms/FormError'
import Input from 'forms/Input'
import SubmitButton from 'forms/SubmitButton'

export default () => {
  const [{ sendingForgot, error, formProps, emailProps }] = useForgotPassword({
    afterSuccess: () => navigate('/forgot-sent'),
    redirectUrl: '/',
  })

  return (
    <form {...formProps}>
      <h2>Forgot your password?</h2>
      <Input {...emailProps} />
      <p>
        <Link to="/sign-in">Go Back</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={sendingForgot}>
        Send reset instructions
      </SubmitButton>
    </form>
  )
}
