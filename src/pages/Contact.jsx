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
    <h3 className="text-white mb-6 text-xl font-semibold">Send Message</h3>

    <form
      action="https://formspree.io/f/xgongwvd"
      method="POST"
      className="space-y-4"
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-emerald-400 outline-none"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-emerald-400 outline-none"
      />

      {/* Message */}
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-emerald-400 outline-none"
      ></textarea>

      {/* Button */}
      <button type="submit" className="btn w-full">
        Send Message
      </button>
    </form>

    {/* Optional note */}
    <p className="text-sm text-gray-500 mt-4">
      We’ll get back to you within 24 hours.
    </p>
  </div>
</Reveal>

          </div>

        </div>
      </div>
    </MainLayout>
  )
}
