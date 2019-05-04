import { useStore } from 'croods-light'

export default useStore({
  setTitle: (store, title, separator = '|') =>
    store.setState({ siteTitle: { title, separator } }, 'page@title'),
})
