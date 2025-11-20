import { useState, useEffect } from 'react'
import { 
  Users, FolderKanban, AlertTriangle, TrendingUp, 
  GitBranch, Clock, CheckCircle, Activity 
} from 'lucide-react'

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 24,
    activeUsers: 156,
    conflictsPrevented: 342,
    avgResolutionTime: 12
  })

  const [recentConflicts, setRecentConflicts] = useState([
    { id: 1, file: 'auth.service.js', users: ['John', 'Sarah'], probability: 85, status: 'resolved' },
    { id: 2, file: 'user.controller.js', users: ['Mike', 'Emma'], probability: 72, status: 'active' },
    { id: 3, file: 'database.config.js', users: ['Alex', 'Lisa'], probability: 68, status: 'monitoring' }
  ])

  const [projects, setProjects] = useState([
    { id: 1, name: 'E-Commerce Platform', team: 'Team Alpha', progress: 75, status: 'active' },
    { id: 2, name: 'Mobile App Backend', team: 'Team Beta', progress: 45, status: 'active' },
    { id: 3, name: 'Analytics Dashboard', team: 'Team Gamma', progress: 90, status: 'review' }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                CollabFlow Admin
              </h1>
              <p className="text-slate-600 mt-1">Welcome back, Administrator</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 hover:text-purple-600 transition-colors">
                <Activity className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FolderKanban className="w-6 h-6" />}
            title="Active Projects"
            value={stats.totalProjects}
            change="+3 this month"
            color="purple"
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            title="Active Users"
            value={stats.activeUsers}
            change="+12 this week"
            color="blue"
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
            color="amber"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-800">Active Projects</h2>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
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
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl font-semibold text-slate-800">Conflict Alerts</h2>
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
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Conflict Prevention Analytics</h2>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <p className="text-slate-600">Chart visualization will be displayed here</p>
              <p className="text-sm text-slate-500 mt-2">Integration with Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard
            icon={<FolderKanban className="w-6 h-6" />}
            title="Create New Project"
            description="Start a new project with your team"
            color="purple"
          />
          <QuickActionCard
            icon={<Users className="w-6 h-6" />}
            title="Manage Teams"
            description="Add or remove team members"
            color="blue"
          />
          <QuickActionCard
            icon={<GitBranch className="w-6 h-6" />}
            title="Git Integration"
            description="Connect repositories"
            color="green"
          />
        </div>
      </main>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ icon, title, value, change, color }) => {
  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    amber: 'from-amber-500 to-amber-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]} text-white`}>
          {icon}
        </div>
      </div>
      <h3 className="text-slate-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-800 mb-2">{value}</p>
      <p className="text-sm text-green-600 font-medium">{change}</p>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-700',
    review: 'bg-amber-100 text-amber-700',
    completed: 'bg-blue-100 text-blue-700'
  }

  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-800">{project.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-3">{project.team}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-slate-700">{project.progress}%</span>
      </div>
    </div>
  )
}

// Conflict Card Component
const ConflictCard = ({ conflict }) => {
  const statusColors = {
    active: 'bg-red-100 text-red-700 border-red-200',
    monitoring: 'bg-amber-100 text-amber-700 border-amber-200',
    resolved: 'bg-green-100 text-green-700 border-green-200'
  }

  return (
    <div className={`border rounded-lg p-4 ${statusColors[conflict.status]}`}>
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
    purple: 'hover:border-purple-400 hover:bg-purple-50',
    blue: 'hover:border-blue-400 hover:bg-blue-50',
    green: 'hover:border-green-400 hover:bg-green-50'
  }

  return (
    <button className={`bg-white border-2 border-slate-200 rounded-xl p-6 text-left transition-all ${colorClasses[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </button>
  )
}

export default AdminDashboard
