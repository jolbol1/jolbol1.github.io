import React from 'react'
import NavBar from './NavBar'
import { withPrefix } from 'gatsby'

export default function Layout({ children, uri }) {
  const cdnScriptLoaded = () => {
    const startScript = document.createElement('script')
    startScript.id = 'stars-js'
    startScript.src = withPrefix('/stars.min.js')
    document.body.appendChild(startScript)
  }

  React.useEffect(() => {
    const script = document.createElement('script')
    script.addEventListener('load', cdnScriptLoaded)
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.39.0/tsparticles.slim.min.js'
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', width: '100%', zIndex: 50 }}>
        <NavBar uri={uri} />
      </div>
      {children}
      <footer className="relative z-50 -mt-12 flex h-12 items-center justify-center bg-slate-900">
        <a
          href="mailto:enquiries@jamesshopland.com"
          className="h-fit w-fit text-center font-bold text-gray-300"
        >
          enquiries@jamesshopland.com
        </a>
      </footer>
      <div id="tsparticles"></div>
    </>
  )
}
