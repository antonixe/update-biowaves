import { CheckCircle, Users, Award, Clock } from "lucide-react"

export function About() {
  const stats = [
    { name: "Years of Experience", value: "5+", icon: Clock },
    { name: "Happy Customers", value: "1000+", icon: Users },
    { name: "Expert Technicians", value: "10+", icon: Award },
    { name: "Uptime Guarantee", value: "99.9%", icon: CheckCircle },
  ]

  const highlights = [
    "Over 5 years of experience in telecommunications",
    "Serving 1000+ happy customers across Kenya",
    "Expert technical team led by Paul C. Chirchir",
    "Committed to reliable and fast connectivity solutions",
  ]

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About BioWaves</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            BioWaves is a fast, affordable and reliable internet connectivity provider for small to medium sized
            businesses. BioWaves Last Mile Business Fibre is a high-speed, cost-effective internet service designed
            specifically for business customers, offering reliable and fast connectivity.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                  <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Why Choose Us</h3>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-600">
            Our technician, Paul C. Chirchir, ensures top-notch service and support to keep you connected.
          </p>
        </div>
      </div>
    </section>
  )
}
