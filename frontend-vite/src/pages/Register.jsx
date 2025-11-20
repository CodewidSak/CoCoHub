import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Loader2, User, Flame, CheckCircle } from 'lucide-react'
import { toast } from 'react-toastify'
import authService from '../services/authService'

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    const result = await authService.register({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    })

    if (result.success) {
      toast.success('Account created successfully! Please login.')
      navigate('/login')
    } else {
      toast.error(result.error || 'Registration failed')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red gradient orbs */}
        <div className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-red-800/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-red-700/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-red rounded-2xl mb-4 shadow-red-glow">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Collab<span className="text-red-500">Flow</span>
          </h1>
          <p className="text-gray-400">Create your account</p>
        </div>

        {/* Register Form */}
        <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">Get Started</h2>
          <p className="text-gray-400 mb-6">Join CollabFlow and start managing projects</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-card border border-dark-border rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-card border border-dark-border rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-card border border-dark-border rounded-lg pl-11 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-card border border-dark-border rounded-lg pl-11 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-dark-card/50 border border-dark-border rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-2">Password must contain:</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className={`w-3 h-3 ${formData.password.length >= 6 ? 'text-green-500' : 'text-gray-600'}`} />
                  <span className={formData.password.length >= 6 ? 'text-green-500' : 'text-gray-500'}>
                    At least 6 characters
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className={`w-3 h-3 ${formData.password === formData.confirmPassword && formData.password ? 'text-green-500' : 'text-gray-600'}`} />
                  <span className={formData.password === formData.confirmPassword && formData.password ? 'text-green-500' : 'text-gray-500'}>
                    Passwords match
                  </span>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 bg-dark-card border-dark-border rounded text-red-500 focus:ring-red-500 focus:ring-offset-0"
              />
              <label className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <Link to="/terms" className="text-red-500 hover:text-red-400 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-red-500 hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-red text-white font-semibold py-3 rounded-lg hover:shadow-red-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  <Flame className="w-5 h-5 mr-2" />
                  Create Account
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-red-500 hover:text-red-400 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          © 2024 CollabFlow. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Register
