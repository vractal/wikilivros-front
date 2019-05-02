import React from 'react'
import { useSignUp } from 'croods-light-auth'
import { Link, navigate } from '@reach/router'

import FormError from 'components/FormError'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import { useFlash } from 'seasoned-flash'

export default () => {
  const { success } = useFlash()
  const [{ signingUp, error, ...options }] = useSignUp({
    afterSuccess: () => {
      navigate('/')
      success('Successfully signed up')
    },
  })
  const {
    emailProps,
    passwordProps,
    passwordConfirmationProps,
    fields,
    formProps,
  } = options

  return (
    <form {...formProps}>
      <h2>Sign Up</h2>
      <Input {...fields.text('name')} label="Full name" />
      <Input
        {...emailProps}
        label="Enter email"
        helper="We'll never share your email with anyone else."
      />
      <Input {...passwordProps} />
      <Input {...passwordConfirmationProps} />
      <p>
        <Link to="/sign-in">Already have an account?</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={signingUp}>Sign Up</SubmitButton>
    </form>
  )
}
