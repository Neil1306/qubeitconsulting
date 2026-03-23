export default function Contact() {
  return (
    <div className="bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Page Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mb-16">
          Get in touch with Qube IT consulting Consultancy to discuss your business
          challenges, opportunities, or transformation goals. We’ll respond
          promptly and confidentially.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Let’s Start a Conversation
            </h3>

            <p className="text-secondary dark:text-gray-300 mb-6 leading-relaxed">
              Whether you’re exploring a new strategy, planning a digital
              transformation, or looking for expert guidance, our consultants
              are here to help.
            </p>

            <div className="space-y-4 text-secondary dark:text-gray-300">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@Qube IT consultingconsultancy.co.uk"
                  className="text-accent hover:underline"
                >
                  contact@qubeitconsulting.com
                </a>
              </p>

              <p>
                <strong>Location:</strong> UK / Europe / US
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted dark:bg-darkCard p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            {/* Static form (GitHub Pages safe) */}
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
                className="w-full border rounded-lg p-3 bg-white dark:bg-darkBg"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3 bg-white dark:bg-darkBg"
              />

              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                className="w-full border rounded-lg p-3 bg-white dark:bg-darkBg"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you?"
                required
                className="w-full border rounded-lg p-3 bg-white dark:bg-darkBg"
              />

              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-secondary dark:text-gray-400 mt-4">
              Your information will be kept confidential and used only to
              respond to your enquiry.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
