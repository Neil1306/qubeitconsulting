import MainLayout from "../layouts/MainLayout"
import Reveal from "../components/Reveal"

export default function Contact() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Contact <span className="text-emerald-400">Us</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-16">
              Let’s discuss your business goals.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">

            <Reveal>
              <div className="card">
                <h3 className="text-emerald-400 mb-4">Get in Touch</h3>
                <p className="text-gray-400">
                  contact@qubeitconsulting.com
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card">
                <h3 className="text-white mb-4">Send Message</h3>
                <form className="space-y-4">
                  <input className="w-full p-3 bg-[#020617] border border-white/10 rounded" placeholder="Name" />
                  <input className="w-full p-3 bg-[#020617] border border-white/10 rounded" placeholder="Email" />
                  <textarea className="w-full p-3 bg-[#020617] border border-white/10 rounded" />
                  <button className="btn w-full">Send</button>
                </form>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </MainLayout>
  )
}
