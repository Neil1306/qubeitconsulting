import MainLayout from "../layouts/MainLayout"
export default function About() {
  return (
    <MainLayout>
    <div className="bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Qube IT consulting Consultancy
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mb-12">
          Qube IT consulting Consultancy is a trusted advisory firm helping organizations
          navigate complex business challenges with confidence, integrity,
          and expertise. We partner with leaders to unlock sustainable growth,
          drive transformation, and deliver measurable outcomes.
        </p>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who We Are
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed">
              Founded by experienced consultants, Qube IT consulting Consultancy combines
              strategic insight, technical expertise, and pragmatic execution.
              We work closely with executives, founders, and leadership teams
              across industries to solve complex problems and enable long-term
              success.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              What We Do
            </h3>
            <p className="text-secondary dark:text-gray-300 leading-relaxed">
              Our services span business strategy, digital transformation,
              product and technology advisory, and operational excellence.
              We focus on clarity, speed, and impact—helping organizations move
              from insight to action.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">
            Our Values
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Integrity</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We operate with honesty, transparency, and accountability in
                every engagement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Excellence</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We hold ourselves to the highest standards of quality and
                professionalism.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Partnership</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We work as true partners with our clients, not just advisors.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Impact</h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                We focus on delivering tangible, measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Why Qube IT consulting Consultancy
          </h3>
          <p className="text-secondary dark:text-gray-300 leading-relaxed">
            Clients choose Qube IT consulting Consultancy for our ability to balance
            strategic thinking with hands-on execution. We bring clarity to
            ambiguity, structure to complexity, and momentum to change—helping
            organizations move forward with confidence.
          </p>
        </div>

      </div>
    </div>
    </MainLayout>
  )
}
