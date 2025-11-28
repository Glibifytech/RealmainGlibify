export function LanguagesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Built for
        </h2>
        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Developers &
        </h3>
        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          Learners
        </h3>
        <p className="text-xl text-white/80 mb-16">
          Interactive IDE with Multi-Language Support
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {/* HTML Card */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-orange-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <div className="text-white text-2xl font-bold flex items-center">
                H
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center ml-1">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                L
              </div>
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">HTML</h4>
            <p className="text-white/80">Web Development</p>
          </div>

          {/* Python Card */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <div className="text-yellow-400 text-4xl font-bold">
                🐍
              </div>
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">Python</h4>
            <p className="text-white/80">Programming & Data Science</p>
          </div>
        </div>
      </div>
    </section>
  )
}