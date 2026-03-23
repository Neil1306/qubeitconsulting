import MainLayout from "../layouts/MainLayout"

export default function Contact() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Page Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact <span className="text-emerald-400">Us</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-16">
            Get in touch with Qube IT consulting to discuss your business
            challenges, opportunities, or transformation goals. We’ll respond
            promptly and confidentially.
          </p>

          {/* 💎 Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* 📩 Contact Info */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                Let’s Start a Conversation
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Whether you’re exploring a new strategy, planning a digital
                transformation, or looking for expert guidance, our consultants
                are here to help.
              </p>

              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:contact@qubeitconsulting.com"
                    className="text-emerald-400 hover:underline"
                  >
                    contact@qubeitconsulting.com
                  </a>
                </p>

                <p>
                  <strong className="text-white">Location:</strong> UK / Europe / US
                </p>
              </div>
            </div>

            {/* 📝 Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send Us a Message
              </h3>

              <form
                action="https://formspree.io/f/mbddldvy"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg p-3 bg-[#020617] border border-white/10 text-white focus:border-emerald-400 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg p-3 bg-[#020617] border border-white/10 text-white focus:border-emerald-400 outline-none"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  className="w-full rounded-lg p-3 bg-[#020617] border border-white/10 text-white focus:border-emerald-400 outline-none"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  className="w-full rounded-lg p-3 bg-[#020617] border border-white/10 text-white focus:border-emerald-400 outline-none"
                />

                <button type="submit" className="btn w-full">
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                Your information will be kept confidential and used only to
                respond to your enquiry.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}
