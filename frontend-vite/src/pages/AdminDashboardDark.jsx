import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
  Users, FolderKanban, AlertTriangle, TrendingUp, 
  GitBranch, Clock, Activity, LogOut, Settings, Bell,
  Menu, X, Sun, Moon, Zap
} from 'lucide-react'
import { toast } from 'react-toastify'
import authService from '../services/authService'
import { logout } from '../redux/slices/authSlice'

const AdminDashboardDark = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const [stats, setStats] = useState({
    totalProjects: 24,
    activeUsers: 156,
    conflictsPrevented: 342,
    avgResolutionTime: 12
  })

  const [recentConflicts, setRecentConflicts] = useState([
    { id: 1, file: 'auth.service.js', users: ['John', 'Sarah'], probability: 85, status: 'active' },
    { id: 2, file: 'user.controller.js', users: ['Mike', 'Emma'], probability: 72, status: 'monitoring' },
    { id: 3, file: 'database.config.js', users: ['Alex', 'Lisa'], probability: 68, status: 'resolved' }
  ])

  const [projects, setProjects] = useState([
    { id: 1, name: 'E-Commerce Platform', team: 'Team Alpha', progress: 75, status: 'active' },
    { id: 2, name: 'Mobile App Backend', team: 'Team Beta', progress: 45, status: 'active' },
    { id: 3, name: 'Analytics Dashboard', team: 'Team Gamma', progress: 90, status: 'review' }
  ])

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLogout = async () => {
    await authService.logout()
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="bg-dark-surface/80 backdrop-blur-xl border-b border-dark-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-neon-cyan transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center shadow-neon-cyan">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Collab<span className="text-neon-cyan">Flow</span>
                  </h1>
                  <p className="text-xs text-slate-400">Admin Dashboard</p>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-400 hover:text-neon-cyan transition-colors rounded-lg hover:bg-dark-card"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-slate-400 hover:text-neon-cyan transition-colors rounded-lg hover:bg-dark-card">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse"></span>
              </button>

              {/* Settings */}
              <button className="p-2 text-slate-400 hover:text-neon-cyan transition-colors rounded-lg hover:bg-dark-card">
                <Settings className="w-5 h-5" />
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-3 pl-3 border-l border-dark-border">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-white">{user?.fullName || 'Administrator'}</p>
                  <p className="text-xs text-slate-400">{user?.email || 'admin@collabflow.com'}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-semibold shadow-neon-cyan">
                  {user?.fullName?.charAt(0) || 'A'}
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-slate-300 hover:text-neon-pink hover:border-neon-pink transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, <span className="text-neon-cyan">{user?.fullName?.split(' ')[0] || 'Admin'}</span>! 👋
          </h2>
          <p className="text-slate-400">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FolderKanban className="w-6 h-6" />}
            title="Active Projects"
            value={stats.totalProjects}
            change="+3 this month"
            color="cyan"
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            title="Active Users"
            value={stats.activeUsers}
            change="+12 this week"
            color="purple"
          />
          <StatCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Conflicts Prevented"
            value={stats.conflictsPrevented}
            change="80% reduction"
            color="green"
          />
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            title="Avg Resolution Time"
            value={`${stats.avgResolutionTime}m`}
            change="-5m improvement"
            color="pink"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Overview */}
          <div className="lg:col-span-2">
            <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Active Projects</h3>
                <button className="text-neon-cyan hover:text-neon-cyan/80 text-sm font-medium transition-colors">
                  View All →
                </button>
              </div>
              <div className="space-y-4">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>

          {/* Conflict Alerts */}
          <div className="lg:col-span-1">
            <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-neon-pink" />
                <h3 className="text-xl font-semibold text-white">Conflict Alerts</h3>
              </div>
              <div className="space-y-4">
                {recentConflicts.map(conflict => (
                  <ConflictCard key={conflict.id} conflict={conflict} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Chart Section */}
        <div className="mt-6 bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Conflict Prevention Analytics</h3>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl border border-dark-border">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
              <p className="text-slate-300">Chart visualization will be displayed here</p>
              <p className="text-sm text-slate-500 mt-2">Integration with Recharts or Chart.js</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard
            icon={<FolderKanban className="w-6 h-6" />}
            title="Create New Project"
            description="Start a new project with your team"
            color="cyan"
          />
          <QuickActionCard
            icon={<Users className="w-6 h-6" />}
            title="Manage Teams"
            description="Add or remove team members"
            color="purple"
          />
          <QuickActionCard
            icon={<GitBranch className="w-6 h-6" />}
            title="Git Integration"
            description="Connect repositories"
            color="pink"
          />
        </div>
      </main>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ icon, title, value, change, color }) => {
  const colorClasses = {
    cyan: 'from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/30 text-neon-cyan',
    purple: 'from-neon-purple/20 to-neon-purple/5 border-neon-purple/30 text-neon-purple',
    green: 'from-neon-green/20 to-neon-green/5 border-neon-green/30 text-neon-green',
    pink: 'from-neon-pink/20 to-neon-pink/5 border-neon-pink/30 text-neon-pink',
  }

  return (
    <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 hover:border-neon-cyan/50 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} border`}>
          {icon}
        </div>
      </div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-white mb-2">{value}</p>
      <p className="text-sm text-neon-green font-medium">{change}</p>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project }) => {
  const statusColors = {
    active: 'bg-neon-green/20 text-neon-green border-neon-green/30',
    review: 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30',
    completed: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30'
  }

  return (
    <div className="border border-dark-border rounded-xl p-4 hover:border-neon-cyan/50 transition-all bg-dark-card/50">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-white">{project.name}</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-3">{project.team}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-dark-bg rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full transition-all"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-slate-300">{project.progress}%</span>
      </div>
    </div>
  )
}

// Conflict Card Component
const ConflictCard = ({ conflict }) => {
  const statusColors = {
    active: 'bg-neon-pink/20 text-neon-pink border-neon-pink/30',
    monitoring: 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30',
    resolved: 'bg-neon-green/20 text-neon-green border-neon-green/30'
  }

  return (
    <div className={`border rounded-xl p-4 ${statusColors[conflict.status]}`}>
      <div className="flex items-start justify-between mb-2">
        <p className="font-medium text-sm truncate flex-1">{conflict.file}</p>
        <span className="text-xs font-bold ml-2">{conflict.probability}%</span>
      </div>
      <div className="flex items-center gap-2 text-xs mb-2">
        <Users className="w-3 h-3" />
        <span>{conflict.users.join(' & ')}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium capitalize">{conflict.status}</span>
        {conflict.status === 'active' && (
          <button className="text-xs underline hover:no-underline">
            View Details
          </button>
        )}
      </div>
    </div>
  )
}

// Quick Action Card Component
const QuickActionCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    cyan: 'hover:border-neon-cyan hover:bg-neon-cyan/5',
    purple: 'hover:border-neon-purple hover:bg-neon-purple/5',
    pink: 'hover:border-neon-pink hover:bg-neon-pink/5'
  }

  return (
    <button className={`bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 text-left transition-all ${colorClasses[color]}`}>
      <div className="mb-4 text-neon-cyan">{icon}</div>
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </button>
  )
}

export default AdminDashboardDark
