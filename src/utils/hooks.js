import { navigate } from '@reach/router'

export const useQueryParam = param => {
  const params = new URLSearchParams(window.location.search)
  return params.get(param)
}

export const useRedirectBack = (defaultPath = '/') => {
  const redirect = useQueryParam('redirect_to')
  return () => navigate(redirect || defaultPath)
}
