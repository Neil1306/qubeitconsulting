import Navbar from "../components/Navbar"

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#020617] text-white min-h-screen">
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  )
}
