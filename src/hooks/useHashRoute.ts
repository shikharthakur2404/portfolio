import { useEffect, useState } from 'react'

export type AppRoute = 'home' | 'fytly' | 'taskorbit'

function readRoute(): AppRoute {
  if (window.location.hash === '#/fytly') return 'fytly'
  if (window.location.hash === '#/taskorbit') return 'taskorbit'
  return 'home'
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
