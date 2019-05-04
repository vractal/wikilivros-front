import { useEffect, useRef, useState, useReducer } from 'react'
import { navigate } from '@reach/router'
import debounce from 'lodash/debounce'
import isEqual from 'lodash/isEqual'

// This is a way to know if the component was already mounted
// USAGE: const isMounted = useMounted()
export const useMounted = () => {
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  return mountedRef.current
}

// This is a safe method, it won't dispatch if component is unmounted
export const useSafeState = initial => {
  const mounted = useMounted()
  const [state, setState] = useState(initial)
  const safeSetState = value => mounted && setState(value)
  return [state, safeSetState]
}

// USAGE: const [isOpen, toggleOpen] = useToggle()
// <button onClick={toggleOpen} />
export const useToggle = (initial = false) => {
  const [value, setValue] = useSafeState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}

// This is a safe method, it won't dispatch if component is unmounted
// It simulates the old this.setState API
// USAGE: const [state, setState] = useSetState({ foo: true })
// setState({ bar: false })
// console.log(state) => { foo: true, bar: false }
export const useSetState = initialState => {
  const mounted = useMounted()
  const reducer = (oldState, newState) => ({ ...oldState, ...newState })
  const [state, setState] = useReducer(reducer, initialState)
  const safeSetState = (...args) => mounted && setState(...args)
  return [state, safeSetState]
}

// When you want to know a value of previous render, like prevProps
export const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// When you want to make a deep comparison on useEffect
// USAGE: same as useEffect but you can pass complex objects on second parameter
export const useDeepDiffEffect = (callback, values) => {
  const cleanup = useRef()
  const previousValues = usePrevious(values)

  useEffect(() => {
    if (!isEqual(previousValues, values)) {
      cleanup.current = callback()
    }
    return cleanup.current
  })
}

// Get the window dimensions with a safe throttle for performance
// USAGE: const { width } = useWindowDimensions()
export const useWindowDimensions = (throttle = 300) => {
  const [dimensions, setDimensions] = useSafeState({ height: 0, width: 0 })
  useEffect(() => {
    const update = () => {
      const { innerWidth, innerHeight } = window
      setDimensions({ height: innerHeight, width: innerWidth })
    }
    const handleResize = debounce(update, throttle)

    window.addEventListener('resize', handleResize)
    update()

    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line
  }, [throttle])
  return dimensions
}

// USAGE: const isDesktop = useMedia('(min-device-width: 992px)', false)
export const useMedia = (media, defaultState = false) => {
  const [state, setState] = useSafeState(defaultState)
  useEffect(() => {
    if (!window.matchMedia) return null
    const mql = window.matchMedia(media)
    const onChange = () => setState(!!mql.matches)
    mql.addListener(onChange)
    setState(mql.matches)

    return () => mql.removeListener(onChange)
    // eslint-disable-next-line
  }, [media])

  return state
}

// It will look for the param in the URL, like: 'http://google.com?redirect=foo'
// USAGE: const redirect = useQueryParam('redirect')
export const useQueryParam = param => {
  const params = new URLSearchParams(window.location.search)
  return params.get(param)
}

// It will grab the redirect_to param from the URL and return a function that
// navigates to such path
// USAGE: const redirectBack = useRedirectBack()
// <button onClick={redirectBack} />
export const useRedirectBack = (param = 'redirect_to', defaultPath = '/') => {
  const redirect = useQueryParam(param)
  return () => navigate(redirect || defaultPath)
}
