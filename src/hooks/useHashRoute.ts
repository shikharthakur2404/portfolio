import { useEffect, useState } from 'react'

export type AppRoute = 'home' | 'fytly'

function readRoute(): AppRoute {
  return window.location.hash === '#/fytly' ? 'fytly' : 'home'
}

export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(readRoute)

  useEffect(() => {
    const onHash = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (route !== 'home') window.scrollTo(0, 0)
  }, [route])

  return route
}
