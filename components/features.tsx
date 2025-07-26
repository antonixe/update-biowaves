import { Zap, Infinity, Headphones, Shield, Clock, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      name: "Lightning Fast",
      description: "Experience speeds up to 100Mbps with our fiber optic network",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Unlimited Data",
      description: "No data caps or hidden charges - browse without limits",
      icon: Infinity,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "24/7 Support",
      description: "Round-the-clock technical assistance when you need it",
      icon: Headphones,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Secure Connection",
      description: "Advanced security features to protect your data",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "99.9% Uptime",
      description: "Reliable connection you can count on",
      icon: Clock,
      gradient: "from-red-400 to-rose-500",
    },
    {
      name: "Expert Team",
      description: "Professional installation and maintenance services",
      icon: Users,
      gradient: "from-indigo-500 to-blue-600",
    },
  ]

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <span className="text-sm font-medium text-blue-700">Why Choose BioWaves</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Built for the
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Modern World
            </span>
          </h2>
          <p className="text-lg leading-8 text-gray-600 font-light">
            Experience internet that adapts to your lifestyle with cutting-edge technology and unmatched reliability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
