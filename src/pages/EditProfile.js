import React from 'react'
import { useEditProfile } from 'croods-light-auth'
import { useFlash } from 'seasoned-flash'

import PageTitle from 'core/PageTitle'
import FormError from 'components/FormError'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import { useRedirectBack } from 'utils/hooks'

export default ({ currentUser }) => {
  const { success } = useFlash()
  const redirectBack = useRedirectBack()
  const [{ saving, formState, error, fields, formProps }] = useEditProfile({
    afterSuccess: () => {
      redirectBack()
      success('Successfully signed up')
    },
  })
  const title = `Edit ${formState.values.name || currentUser.name}`

  return (
    <form {...formProps}>
      <PageTitle>{title}</PageTitle>
      <h2>{title}</h2>
      <Input {...fields.text('name')} label="Full name" />
      <Input {...fields.email('email')} label="Email" />
      <FormError>{error}</FormError>
      <p>
        <SubmitButton loading={saving}>Save</SubmitButton>
      </p>
    </form>
  )
}
