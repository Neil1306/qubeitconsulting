import { useEffect, useState } from "react"

export default function Counter({ value, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 1500
    const stepTime = Math.abs(Math.floor(duration / end))

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-accent">{count}+</div>
      <div className="text-sm text-secondary dark:text-gray-400 mt-1">
        {label}
      </div>
    </div>
  )
}
