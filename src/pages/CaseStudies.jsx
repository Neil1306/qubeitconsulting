import CaseStudyCard from "../components/CaseStudyCard"
import MainLayout from "../layouts/MainLayout"

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Case <span className="text-emerald-400">Studies</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-12">
            Real-world examples of how Qube IT consulting delivers measurable
            business outcomes.
          </p>

          {/* 💎 Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="card">
              <CaseStudyCard
                title="Scaling a FinTech Platform"
                client="European FinTech Startup"
                problem="Rapid growth led to operational inefficiencies and tech debt."
                impact="40% faster delivery, improved platform stability."
              />
            </div>

            <div className="card">
              <CaseStudyCard
                title="Digital Transformation Program"
                client="Global Enterprise"
                problem="Legacy systems blocking innovation."
                impact="Modernized architecture and improved time-to-market."
              />
            </div>

            <div className="card">
              <CaseStudyCard
                title="Operational Excellence Initiative"
                client="Manufacturing Group"
                problem="High costs and low process visibility."
                impact="15% cost reduction within 6 months."
              />
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  )
}
