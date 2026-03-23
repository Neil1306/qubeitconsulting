export default function Services() {
  return (
    <div className="bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Page Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our Services
        </h2>

        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mb-16">
          Qube IT consulting Consultancy offers a comprehensive range of advisory services
          designed to help organizations navigate complexity, accelerate growth,
          and achieve sustainable results.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Service 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Business & Growth Strategy
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed mb-4">
              We help leadership teams define clear strategies that align vision,
              market opportunity, and execution. Our approach combines deep
              analysis with pragmatic recommendations.
            </p>
            <ul className="list-disc list-inside text-secondary dark:text-gray-400 space-y-2">
              <li>Corporate and competitive strategy</li>
              <li>Market entry and expansion</li>
              <li>Business model innovation</li>
              <li>Growth planning and prioritization</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Digital Transformation
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed mb-4">
              We support organizations in modernizing their technology,
              processes, and operating models to thrive in a digital-first
              world.
            </p>
            <ul className="list-disc list-inside text-secondary dark:text-gray-400 space-y-2">
              <li>Digital strategy and roadmap</li>
              <li>Legacy system modernization</li>
              <li>Cloud and platform transformation</li>
              <li>Change and adoption management</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Product & Technology Advisory
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed mb-4">
              Our advisors work closely with product and technology teams to
              improve delivery speed, quality, and alignment with business
              goals.
            </p>
            <ul className="list-disc list-inside text-secondary dark:text-gray-400 space-y-2">
              <li>Product strategy and roadmap design</li>
              <li>Technology architecture reviews</li>
              <li>Agile and delivery model optimization</li>
              <li>Engineering leadership coaching</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Operational Excellence
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed mb-4">
              We help organizations streamline operations, improve efficiency,
              and embed continuous improvement across the enterprise.
            </p>
            <ul className="list-disc list-inside text-secondary dark:text-gray-400 space-y-2">
              <li>Process optimization and redesign</li>
              <li>Cost reduction and productivity improvement</li>
              <li>Performance management frameworks</li>
              <li>Operating model design</li>
            </ul>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-4xl mb-20">
          <h3 className="text-2xl font-semibold mb-4">
            How We Work
          </h3>
          <p className="text-secondary dark:text-gray-300 leading-relaxed">
            Our engagements are collaborative, insight-driven, and outcome
            focused. We combine rigorous analysis with hands-on execution,
            working side by side with client teams to ensure sustainable impact
            beyond the engagement.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-accent text-white p-10 rounded-xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            Let’s Build the Right Strategy Together
          </h3>
          <p className="mb-6">
            Talk to our consultants about how we can support your business
            objectives.
          </p>
          <a
            href="#/contact"
            className="inline-block bg-white text-accent px-6 py-3 rounded-lg font-semibold"
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </div>
  )
}
