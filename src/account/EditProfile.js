import React from 'react'
import { useEditProfile } from 'croods-auth'
import { useFlash } from 'seasoned-flash'
import PageTitle from 'core/PageTitle'

import FormError from 'forms/FormError'
import Input from 'forms/Input'
import SubmitButton from 'forms/SubmitButton'
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
  const title = `Edit: ${formState.values.name || currentUser.name}`

  return (
    <form {...formProps}>
      <PageTitle>{title}</PageTitle>
      <h2>{title}</h2>
      <Input {...fields.text('name')} label="Full name" />
      <Input {...fields.email('email')} label="Email" />
      <FormError>{error}</FormError>
      <div style={{ marginTop: '1rem' }}>
        <SubmitButton loading={saving}>Save</SubmitButton>
      </div>
    </form>
  )
}
