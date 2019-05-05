import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'

export default ({ children }) =>
  children ? <FormHelperText error>{children}</FormHelperText> : null
