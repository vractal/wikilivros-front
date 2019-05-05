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
}) => {
  const helperText = error || helper
  return (
    <FormControl
      fullWidth
      error={!!error}
      aria-describedby={helperText ? `${name}-helper-text` : undefined}
      disabled={disabled}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input {...props} placeholder={placeholder} id={name} />
      {helperText && (
        <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}
