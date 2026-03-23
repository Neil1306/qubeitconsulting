import MainLayout from "../layouts/MainLayout"

export default function Services() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Page Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Our <span className="text-emerald-400">Services</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-16">
            Qube IT consulting offers a comprehensive range of advisory services
            designed to help organizations navigate complexity, accelerate growth,
            and achieve sustainable results.
          </p>

          {/* 💎 Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            
            {/* Service 1 */}
            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Business & Growth Strategy
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We help leadership teams define clear strategies that align vision,
                market opportunity, and execution.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Corporate and competitive strategy</li>
                <li>Market entry and expansion</li>
                <li>Business model innovation</li>
                <li>Growth planning and prioritization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Digital Transformation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We support organizations in modernizing their technology,
                processes, and operating models.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Digital strategy and roadmap</li>
                <li>Legacy system modernization</li>
                <li>Cloud and platform transformation</li>
                <li>Change and adoption management</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Product & Technology Advisory
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We help product and tech teams improve delivery speed, quality,
                and alignment with business goals.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Product strategy and roadmap design</li>
                <li>Technology architecture reviews</li>
                <li>Agile and delivery optimization</li>
                <li>Engineering leadership coaching</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Operational Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We streamline operations, improve efficiency, and drive
                continuous improvement.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Process optimization and redesign</li>
                <li>Cost reduction strategies</li>
                <li>Performance frameworks</li>
                <li>Operating model design</li>
              </ul>
            </div>
          </div>

          {/* 💎 How We Work */}
          <div className="max-w-4xl mb-20 card">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              How We Work
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our engagements are collaborative, insight-driven, and outcome
              focused. We combine rigorous analysis with hands-on execution,
              working side by side with client teams to ensure sustainable impact.
            </p>
          </div>

          {/* 🚀 CTA */}
          <div className="card text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Let’s Build the Right Strategy Together
            </h3>
            <p className="text-gray-400 mb-6">
              Talk to our consultants about how we can support your business objectives.
            </p>
            <a href="#/contact" className="btn inline-block">
              Book a Consultation
            </a>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}
