import React, { useState } from 'react'
import classNames from 'classnames'
import { Countdown } from 'seasoned-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'

export const Context = React.createContext()

const variantIcon = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
}

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing.unit,
    opacity: 0.9,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
  success: {
    backgroundColor: green[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
})

const Message = ({
  className,
  timeout,
  classes,
  text,
  close,
  type = 'info',
}) => {
  const Icon = variantIcon[type]
  const onFinish = () => (timeout > 0 ? close() : null)
  return (
    <SnackbarContent
      className={classNames(classes[type], className)}
      open={true}
      onClose={close}
      message={
        <Countdown time={timeout} onFinish={onFinish} active>
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {text}
          </span>
        </Countdown>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={close}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  )
}

const MessageWrapper = withStyles(styles)(Message)

const MessageController = ({ message = {}, close, open, willClose }) =>
  message && message.text ? (
    <Snackbar
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      open={open}
      onClose={close}
    >
      <MessageWrapper close={willClose} {...message} />
    </Snackbar>
  ) : null

export default ({ children }) => {
  const [message, setMessage] = useState(null)
  const [open, setOpen] = useState(false)
  const dispatch = (text, type = 'info', timeout = 4) => {
    setMessage({ text, timeout, type })
    setOpen(true)
  }
  const close = () => setMessage(null)
  const willClose = () => setOpen(false)
  return (
    <Context.Provider value={dispatch}>
      <MessageController
        message={message}
        open={open}
        willClose={willClose}
        close={close}
      />
      {children}
    </Context.Provider>
  )
}
