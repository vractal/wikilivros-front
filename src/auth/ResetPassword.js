import React from 'react'
import { navigate, Link } from '@reach/router'
import { useResetPassword } from 'croods-light-auth'

import FormError from 'forms/FormError'
import Input from 'forms/Input'
import SubmitButton from 'forms/SubmitButton'

export default () => {
  const [{ reseting, error, ...props }] = useResetPassword({
    afterSuccess: () => navigate('/'),
  })
  const { formProps, passwordProps, passwordConfirmationProps } = props

  return (
    <form {...formProps}>
      <h2>Reset Password</h2>
      <Input {...passwordProps} />
      <Input {...passwordConfirmationProps} />
      <p>
        <Link to="/sign-in">Go to Sign In</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={reseting}>Reset!</SubmitButton>
    </form>
  )
}
