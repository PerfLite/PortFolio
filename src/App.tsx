import { useState } from 'react'

type Category = 'resourcepacks' | 'translations' | 'mods' | 'about'

interface Project {
  id: number
  name: string
  description: string
  category: Category
  version: string
  downloads: number
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  icon: string
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Faithful 32x',
    description: 'Classic faithful texture pack with 32x resolution',
    category: 'resourcepacks',
    version: '1.21.4',
    downloads: 15420,
    rarity: 'rare',
    icon: '🎨',
    url: '#'
  },
  {
    id: 2,
    name: 'PVP Optimized',
    description: 'Low fire, clear textures for competitive play',
    category: 'resourcepacks',
    version: '1.21.4',
    downloads: 8930,
    rarity: 'uncommon',
    icon: '⚔️',
    url: '#'
  },
  {
    id: 3,
    name: 'Vanilla Tweaks',
    description: 'Collection of vanilla-friendly improvements',
    category: 'resourcepacks',
    version: '1.21.4',
    downloads: 23100,
    rarity: 'epic',
    icon: '✨',
    url: '#'
  },
  {
    id: 4,
    name: 'Russian Language Pack',
    description: 'Full Russian translation for Minecraft',
    category: 'translations',
    version: '1.21.4',
    downloads: 45200,
    rarity: 'legendary',
    icon: '🇷🇺',
    url: '#'
  },
  {
    id: 5,
    name: 'Ukrainian Translation',
    description: 'Community Ukrainian language pack',
    category: 'translations',
    version: '1.21.4',
    downloads: 12800,
    rarity: 'rare',
    icon: '🇺🇦',
    url: '#'
  },
  {
    id: 6,
    name: 'Mod Localization RU',
    description: 'Translations for popular mods',
    category: 'translations',
    version: '1.21.4',
    downloads: 7650,
    rarity: 'uncommon',
    icon: '',
    url: '#'
  },
  {
    id: 7,
    name: 'Inventory Tweaks',
    description: 'Sort, search and manage your inventory',
    category: 'mods',
    version: '1.21.4',
    downloads: 31200,
    rarity: 'epic',
    icon: '📦',
    url: '#'
  },
  {
    id: 8,
    name: 'MiniHUD',
    description: 'Lightweight HUD information display',
    category: 'mods',
    version: '1.21.4',
    downloads: 18900,
    rarity: 'rare',
    icon: '📊',
    url: '#'
  },
  {
    id: 9,
    name: 'Sodium',
    description: 'Modern rendering engine for FPS boost',
    category: 'mods',
    version: '1.21.4',
    downloads: 89400,
    rarity: 'legendary',
    icon: '⚡',
    url: '#'
  }
]

const hotbarItems = [
  { key: 'resourcepacks', label: 'RP', icon: '🎨', color: 'mc-text-green' },
  { key: 'translations', label: 'TR', icon: '📖', color: 'mc-text-gold' },
  { key: 'mods', label: 'MOD', icon: '⚡', color: 'mc-text-yellow' },
  { key: 'about', label: 'INFO', icon: '❓', color: 'mc-text-red' }
]

const rarityColors: Record<string, string> = {
  common: 'tooltip-rarity-common',
  uncommon: 'tooltip-rarity-uncommon',
  rare: 'tooltip-rarity-rare',
  epic: 'tooltip-rarity-epic',
  legendary: 'tooltip-rarity-legendary'
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('resourcepacks')
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const filteredProjects = projects.filter(p => p.category === activeCategory)

  const handleMouseEnter = (project: Project, e: React.MouseEvent) => {
    setHoveredProject(project)
    setTooltipPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredProject) {
      setTooltipPos({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseLeave = () => {
    setHoveredProject(null)
  }

  return (
    <div className="min-h-screen flex flex-col" onMouseMove={handleMouseMove}>
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(0,0,0,0.3) 32px, rgba(0,0,0,0.3) 33px),
            repeating-linear-gradient(90deg, transparent, transparent 32px, rgba(0,0,0,0.3) 32px, rgba(0,0,0,0.3) 33px)
          `
        }} />
      </div>

      {/* Title Screen */}
      <header className="relative z-10 text-center py-12">
        <h1 className="text-4xl md:text-6xl mc-text mc-text-green mb-4 animate-float">
          PerfLite
        </h1>
        <p className="text-sm md:text-base mc-text-gray-400 mc-text">
          Minecraft Creator • Resource Packs • Translations • Mods
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <span className="text-xs mc-text mc-text-yellow">v1.21.4</span>
          <span className="text-xs mc-text mc-text-green">Fabric</span>
          <span className="text-xs mc-text mc-text-gold">Forge</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-4 pb-32">
        {/* Section Title */}
        <div className="mb-6 text-center">
          <h2 className="text-lg md:text-xl mc-text mc-text-gold">
            {activeCategory === 'resourcepacks' && '📦 Resource Packs'}
            {activeCategory === 'translations' && ' Translations'}
            {activeCategory === 'mods' && '⚡ Mods'}
            {activeCategory === 'about' && ' About'}
          </h2>
        </div>

        {activeCategory === 'about' ? (
          /* About Section */
          <div className="mc-inventory max-w-2xl mx-auto animate-block-place">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 animate-float">👾</div>
                <h3 className="text-lg mc-text mc-text-green mb-2">PerfLite</h3>
                <p className="text-xs mc-text-gray-400 mc-text">Minecraft Content Creator</p>
              </div>
              
              <div className="space-y-4 text-xs">
                <div className="mc-slot p-4">
                  <p className="mc-text-green mb-2">📦 Resource Packs</p>
                  <p className="mc-text-gray-400">Creating faithful and optimized texture packs for better gameplay experience</p>
                </div>
                <div className="mc-slot p-4">
                  <p className="mc-text-gold mb-2">🌍 Translations</p>
                  <p className="mc-text-gray-400">Translating Minecraft and popular mods to Russian and Ukrainian</p>
                </div>
                <div className="mc-slot p-4">
                  <p className="mc-text-yellow mb-2">⚡ Mods</p>
                  <p className="mc-text-gray-400">Developing quality-of-life mods for Fabric and Forge</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://github.com/PerfLite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-button px-6 py-3 text-xs inline-block"
                >
                  🔗 GitHub Profile
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Projects Grid - Inventory Style */
          <div className="mc-inventory animate-block-place">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-slot p-4 group relative"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onMouseEnter={(e) => handleMouseEnter(project, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Icon */}
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xs mc-text mc-text-green mb-2 group-hover:mc-text-yellow">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[10px] mc-text-gray-400 mc-text line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="mc-text mc-text-gold">v{project.version}</span>
                    <span className="mc-text-gray-400">{'\u2B07'} {project.downloads.toLocaleString()}</span>
                  </div>
                  
                  {/* Rarity indicator */}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                    project.rarity === 'legendary' ? 'bg-yellow-500 animate-glow' :
                    project.rarity === 'epic' ? 'bg-purple-500' :
                    project.rarity === 'rare' ? 'bg-blue-500' :
                    project.rarity === 'uncommon' ? 'bg-green-500' :
                    'bg-gray-400'
                  }`} />
                </a>
              ))}
              
              {/* Empty slots */}
              {[...Array(Math.max(0, 6 - filteredProjects.length))].map((_, i) => (
                <div key={`empty-${i}`} className="mc-slot p-4 opacity-50">
                  <div className="text-3xl mb-3 opacity-30">?</div>
                  <div className="h-3 bg-gray-600 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-gray-600 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Hotbar Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="mc-hotbar">
          {hotbarItems.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setActiveCategory(item.key as Category)}
              className={`mc-hotbar-slot ${activeCategory === item.key ? 'active' : ''}`}
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`absolute -top-6 text-[8px] ${item.color} mc-text whitespace-nowrap`}>
                {item.label}
              </span>
              {/* Hotbar number */}
              <span className="absolute bottom-0 right-1 text-[8px] mc-text-gray-400">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tooltip */}
      {hoveredProject && (
        <div
          className="mc-tooltip"
          style={{
            left: tooltipPos.x + 16,
            top: tooltipPos.y - 10
          }}
        >
          <div className={`tooltip-title ${rarityColors[hoveredProject.rarity]}`}>
            {hoveredProject.icon} {hoveredProject.name}
          </div>
          <div className="tooltip-desc">{hoveredProject.description}</div>
          <div className="mt-1 text-[8px] mc-text-gray-400">
            v{hoveredProject.version} •  {hoveredProject.downloads.toLocaleString()}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-[10px] mc-text-gray-400 mc-text">
        <p>© 2024 PerfLite • Not affiliated with Mojang Studios</p>
      </footer>
    </div>
  )
}
