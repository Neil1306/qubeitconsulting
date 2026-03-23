import CaseStudyCard from "../components/CaseStudyCard"
import MainLayout from "../layouts/MainLayout"
export default function CaseStudies() {
  return (
    <MainLayout>
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-6">Case Studies</h2>
      <p className="text-secondary max-w-2xl mb-12">
        Real-world examples of how Qube IT consulting Consultancy delivers
        measurable business outcomes.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <CaseStudyCard
          title="Scaling a FinTech Platform"
          client="European FinTech Startup"
          problem="Rapid growth led to operational inefficiencies and tech debt."
          impact="40% faster delivery, improved platform stability."
        />

        <CaseStudyCard
          title="Digital Transformation Program"
          client="Global Enterprise"
          problem="Legacy systems blocking innovation."
          impact="Modernized architecture and improved time-to-market."
        />

        <CaseStudyCard
          title="Operational Excellence Initiative"
          client="Manufacturing Group"
          problem="High costs and low process visibility."
          impact="15% cost reduction within 6 months."
        />
      </div>
    </div>
     </MainLayout>
  )
}
