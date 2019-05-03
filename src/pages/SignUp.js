import React from 'react'
import { useSignUp } from 'croods-light-auth'
import { Link } from '@reach/router'

import FormError from 'components/FormError'
import PageTitle from 'components/PageTitle'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import { forwardParams } from 'utils/helpers'
import { useRedirectBack } from 'utils/hooks'
import { useFlash } from 'seasoned-flash'

export default () => {
  const { success } = useFlash()
  const redirectBack = useRedirectBack()
  const [{ signingUp, error, ...options }] = useSignUp({
    afterSuccess: () => {
      redirectBack()
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
      <PageTitle>Sign Up</PageTitle>
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
        <Link to={forwardParams('/sign-in')}>Already have an account?</Link>
      </p>
      <FormError>{error}</FormError>
      <SubmitButton loading={signingUp}>Sign Up</SubmitButton>
    </form>
  )
}
