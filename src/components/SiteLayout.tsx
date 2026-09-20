import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function SiteLayout() {
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    main.current?.focus({ preventScroll: true })
  }, [pathname])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" ref={main} tabIndex={-1}>
      <Outlet />
    </main>
    <Footer />
  </>
}
