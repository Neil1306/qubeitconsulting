export default function ServiceCard({ title, desc }) {
  return (
   <div className="border bg-white dark:bg-darkCard p-6 md:p-8 rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary dark:text-gray-300">{desc}</p>
    </div>
  )
}
