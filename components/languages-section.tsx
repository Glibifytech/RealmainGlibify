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
              <svg className="w-20 h-20" viewBox="0 0 384 512" fill="currentColor">
                <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6.7-75.8h47.7L138 320l53.5 14.5 53.6-14.5 5.8-64.6H156.9l-6.7-75.8h162.1l-4.1-49.4z"/>
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">HTML</h4>
            <p className="text-white/80">Web Development</p>
          </div>

          {/* Python Card */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-20 h-20" viewBox="0 0 256 255" fill="none">
                <defs>
                  <linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
                    <stop offset="0%" stopColor="#387EB8"/>
                    <stop offset="100%" stopColor="#366994"/>
                  </linearGradient>
                  <linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
                    <stop offset="0%" stopColor="#FFE052"/>
                    <stop offset="100%" stopColor="#FFC331"/>
                  </linearGradient>
                </defs>
                <path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z"/>
                <path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z"/>
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">Python</h4>
            <p className="text-white/80">Programming & Data Science</p>
          </div>
        </div>
      </div>
    </section>
  )
}