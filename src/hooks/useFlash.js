import { useContext } from 'react'
import { Context } from 'components/FlashMessage'

export default () => {
  const dispatch = useContext(Context)
  const makeDispatcher = type => (text, timeout) =>
    dispatch(text, type, timeout)
  return {
    error: makeDispatcher('error'),
    flash: dispatch,
    info: makeDispatcher('info'),
    success: makeDispatcher('success'),
    warning: makeDispatcher('warning'),
  }
}
