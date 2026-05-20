import { useState, useEffect } from 'react'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  fork: boolean
}

export default function App() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/PerfLite/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data.filter((repo: Repository) => !repo.fork))
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching repos:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#0a0e1a]' : 'bg-gray-50'}`}>
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-[#0a0e1a]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.27 0-1.38.465-2.535 1.23-3.435-.24-.3-.54-1.245.12-2.595 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.35.36 2.295.12 2.595.765.9 1.23 2.04 1.23 3.435 0 4.95-2.805 5.97-5.475 6.27.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>PerfLite</span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/PerfLite"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                GitHub
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-200 text-gray-700'} transition-colors`}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                PerfLite
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Welcome to my portfolio. Explore my open-source projects and contributions on GitHub.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/PerfLite?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                View All Repositories
              </a>
              <a
                href="https://github.com/PerfLite"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 border ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} font-medium rounded-lg transition-all`}
              >
                Follow on GitHub
              </a>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Repositories
            </h2>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'} animate-pulse`}>
                    <div className={`h-6 ${darkMode ? 'bg-white/10' : 'bg-gray-200'} rounded mb-4`}></div>
                    <div className={`h-4 ${darkMode ? 'bg-white/10' : 'bg-gray-200'} rounded mb-2`}></div>
                    <div className={`h-4 ${darkMode ? 'bg-white/10' : 'bg-gray-200'} rounded w-2/3`}></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10' : 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg'} transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5M3 16.5L7.5 21m0 0L12 16.5" />
                        </svg>
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'} transition-colors`}>
                          {repo.name}
                        </h3>
                      </div>
                      <svg className={`w-5 h-5 ${darkMode ? 'text-gray-500 group-hover:text-purple-400' : 'text-gray-400 group-hover:text-purple-600'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {repo.description || 'No description provided'}
                    </p>

                    <div className="flex items-center flex-wrap gap-4 text-xs">
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{repo.language}</span>
                        </div>
                      )}
                      <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 PerfLite. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/PerfLite"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.27 0-1.38.465-2.535 1.23-3.435-.24-.3-.54-1.245.12-2.595 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.35.36 2.295.12 2.595.765.9 1.23 2.04 1.23 3.435 0 4.95-2.805 5.97-5.475 6.27.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
