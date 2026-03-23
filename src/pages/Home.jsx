import ServiceCard from "../components/ServiceCard"
import CTA from "../components/CTA"
import Counter from "../components/Counter"

export default function Home() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">
      
      {/* 🔥 Hero Section */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Strategic Consulting for
            <span className="text-emerald-400"> Sustainable Growth</span>
          </h1>

          <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Qube IT consulting partners with organizations to deliver clarity,
            transformation, and measurable impact.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-emerald-500 hover:bg-emerald-400 px-6 py-3 rounded-lg font-medium transition shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Get Started
            </button>
            <button className="border border-white/20 hover:border-emerald-400 px-6 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 💎 Metrics Section */}
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Counter value={8} />
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Counter value={40} />
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Counter value={98} suffix="%" />
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Counter value={8} />
            <p className="text-gray-400 mt-2">Countries Served</p>
          </div>

        </div>
      </section>

      {/* 🚀 Services Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-emerald-400">Expertise</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Delivering impact through strategy, technology, and execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Business Strategy"
              desc="Data-driven strategies to scale and compete."
            />
            <ServiceCard
              title="Technology Consulting"
              desc="Modern solutions for digital transformation."
            />
            <ServiceCard
              title="Operational Excellence"
              desc="Optimizing performance and efficiency."
            />
          </div>

          <div className="mt-20">
            <CTA />
          </div>

        </div>
      </section>

    </div>
  )
}
