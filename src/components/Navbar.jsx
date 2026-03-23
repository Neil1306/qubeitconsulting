import { Link } from "react-router-dom"
import { useState } from "react"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const [theme, setTheme] = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-darkBg/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-wide">LIBERTY</span>
          <span className="text-xs tracking-widest text-secondary dark:text-gray-400">
            CONSULTANCY
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link className="hover:text-accent" to="/">Home</Link>
          <Link className="hover:text-accent" to="/about">About</Link>
          <Link className="hover:text-accent" to="/services">Services</Link>
          <Link className="hover:text-accent" to="/case-studies">Case Studies</Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 px-3 py-1 border rounded-md text-xs"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-darkBg border-t px-6 py-4 space-y-4">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/case-studies">Case Studies</Link>
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block text-accent font-semibold"
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border rounded-md px-3 py-1 text-sm"
          >
            {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
      )}
    </nav>
  )
}
