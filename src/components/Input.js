import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import startCase from 'lodash/startCase'

export default ({
  children,
  disabled,
  name,
  error,
  helper,
  label = startCase(name),
  placeholder = label,
  ...props
}) => (
  <FormControl
    fullWidth
    error={!!error}
    aria-describedby={helper ? `${name}-helper-text` : undefined}
    disabled={disabled}
  >
    <InputLabel htmlFor="name-simple">{label}</InputLabel>
    <Input {...props} placeholder={placeholder} id={name} />
    {(helper || error) && (
      <FormHelperText id={`${name}-helper-text`}>
        {helper || error}
      </FormHelperText>
    )}
  </FormControl>
)
