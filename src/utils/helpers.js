export const forwardParams = path => `${path}${window.location.search}`

export const isDev = process.env.NODE_ENV === 'development'
