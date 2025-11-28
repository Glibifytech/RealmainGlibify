import Image from "next/image"

export function NewEraSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0000FF] font-medium text-sm uppercase tracking-wide">Welcome to Glibify</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
            The <span className="text-[#0000FF]">Learning Hub</span> for Code Enthusiasts
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
            {
              "We're building a social learning platform where coding enthusiasts, students, and developers come together to master programming. Whether you're learning Python, HTML, CSS, or JavaScript—Glibify is your learning IDE. Connect with fellow learners, share knowledge, participate in live coding events, and be part of a community that celebrates learning and growth."
            }
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
          <Image
            src="/images/glibify-landing.png"
            alt="Learning community workspace"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
