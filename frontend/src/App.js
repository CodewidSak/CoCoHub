// import React, { useState, useEffect } from 'react';
// import { 
//   GitBranch, AlertTriangle, TrendingUp, Clock, XCircle, 
//   Activity, Users, Zap, Shield, BarChart3, Code, GitMerge, Bell,
//   Sparkles, Target, Rocket, Star, ArrowRight, Menu, X
// } from 'lucide-react';

// const themes = {
//   lava: {
//     name: 'Lava',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-red-600 via-orange-600 to-yellow-500', // Classic Lava
//     glowColor: 'shadow-red-500/50',
//   },
//   volcano: {
//     name: 'Volcano',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-rose-600 via-red-600 to-orange-500', // Rose to Orange
//     glowColor: 'shadow-red-500/50',
//   },
//   crimson: {
//     name: 'Crimson',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-red-700 via-red-600 to-red-500', // Pure Red Gradient
//     glowColor: 'shadow-red-500/50',
//   },
//   inferno: {
//     name: 'Inferno',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-red-600 via-pink-600 to-rose-500', // Red to Pink
//     glowColor: 'shadow-red-500/50',
//   },
//   ember: {
//     name: 'Ember',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-orange-600 via-red-600 to-red-700', // Orange to Deep Red
//     glowColor: 'shadow-red-500/50',
//   },
//   magma: {
//     name: 'Magma',
//     bg: 'bg-black',
//     cardBg: 'bg-zinc-900/80',
//     text: 'text-zinc-100',
//     textSecondary: 'text-zinc-400',
//     border: 'border-red-900/30',
//     primary: 'bg-red-600 hover:bg-red-700',
//     secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50',
//     accent: 'text-red-500',
//     success: 'text-emerald-400',
//     warning: 'text-amber-400',
//     danger: 'text-red-500',
//     gradient: 'from-red-500 via-orange-500 to-amber-500', // Bright Lava Flow
//     glowColor: 'shadow-red-500/50',
//   }
// };

// function App() {
//   const [currentTheme, setCurrentTheme] = useState('lava');
//   const [showAuth, setShowAuth] = useState(false);
//   const [authMode, setAuthMode] = useState('login');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const theme = themes[currentTheme];

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const endpoint = authMode === 'login' 
//         ? 'http://localhost:8080/api/signin' 
//         : 'http://localhost:8080/api/signup';

//       const payload = authMode === 'login'
//         ? { email: formData.email, password: formData.password }
//         : { name: formData.name, email: formData.email, password: formData.password };

//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Success
//         setIsAuthenticated(true);
//         setShowAuth(false);
//         setFormData({ name: '', email: '', password: '' });
        
//         // Store token if provided
//         if (data.token) {
//           localStorage.setItem('authToken', data.token);
//         }
        
//         console.log('Auth successful:', data);
//       } else {
//         // Error from server
//         setError(data.message || 'Authentication failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Auth error:', err);
//       setError('Unable to connect to server. Please check if backend is running on port 8080.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('authToken');
//     setFormData({ name: '', email: '', password: '' });
//   };

//   const features = [
//     {
//       icon: Zap,
//       title: 'Real-time Conflict Detection',
//       description: 'Get instant alerts when team members edit the same files. Prevent merge conflicts before they happen.',
//       stat: '80% Reduction',
//       color: 'from-yellow-400 to-orange-500'
//     },
//     {
//       icon: BarChart3,
//       title: 'Smart Analytics Dashboard',
//       description: 'AI-powered insights on team performance, velocity tracking, and project health metrics.',
//       stat: '94% Accuracy',
//       color: 'from-blue-400 to-cyan-500'
//     },
//     {
//       icon: GitMerge,
//       title: 'Intelligent Git Integration',
//       description: 'Seamlessly connect with GitHub and GitLab. Track branches, commits, and PRs in real-time.',
//       stat: '10+ Integrations',
//       color: 'from-purple-400 to-pink-500'
//     },
//     {
//       icon: Users,
//       title: 'Team Collaboration Hub',
//       description: 'Kanban boards, task management, and live notifications keep everyone synchronized.',
//       stat: '2000+ Teams',
//       color: 'from-green-400 to-emerald-500'
//     }
//   ];

//   const stats = [
//     { label: 'Active Projects', value: '10K+', icon: Target },
//     { label: 'Conflicts Prevented', value: '1M+', icon: Shield },
//     { label: 'Happy Developers', value: '50K+', icon: Users },
//     { label: 'Time Saved', value: '100K hrs', icon: Clock }
//   ];

//   const capabilities = [
//     { icon: Code, title: 'Real-time File Monitoring', desc: 'See who is editing what, when' },
//     { icon: AlertTriangle, title: 'Conflict Prediction', desc: 'AI predicts conflicts with 94% accuracy' },
//     { icon: Bell, title: 'Smart Notifications', desc: 'Get alerts that matter, when they matter' },
//     { icon: Activity, title: 'Live Activity Feed', desc: 'Track all team actions in real-time' },
//     { icon: TrendingUp, title: 'Velocity Tracking', desc: 'Measure and improve team performance' },
//     { icon: Shield, title: 'Code Ownership', desc: 'Define and enforce code review rules' }
//   ];

//  const AuthModal = () => (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn p-4">
//       <div className={`${theme.cardBg} backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md w-full border ${theme.border} animate-scaleIn`}>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className={`text-3xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
//             {authMode === 'login' ? 'Welcome Back' : 'Join CollabFlow'}
//           </h2>
//           <button onClick={() => setShowAuth(false)} className={`${theme.textSecondary} hover:${theme.text} transition`}>
//             <XCircle size={28} />
//           </button>
//         </div>

//         <form onSubmit={handleAuth} className="space-y-4">
//           {authMode === 'signup' && (
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Full Name"
//               required
//               className={`w-full px-5 py-4 bg-black/50 border ${theme.border} rounded-xl ${theme.text} placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email Address"
//             required
//             className={`w-full px-5 py-4 bg-black/50 border ${theme.border} rounded-xl ${theme.text} placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Password"
//             required
//             className={`w-full px-5 py-4 bg-black/50 border ${theme.border} rounded-xl ${theme.text} placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
//           />
          
//           {error && (
//             <div className="bg-red-500/20 border border-red-500/50 rounded-xl px-4 py-3 text-red-400 text-sm">
//               {error}
//             </div>
//           )}
          
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 hover:shadow-lg ${theme.glowColor} disabled:opacity-50 disabled:cursor-not-allowed`}
//           >
//             {loading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : 'Create Account')}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className={theme.textSecondary}>
//             {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
//             <button
//               onClick={() => {
//                 setAuthMode(authMode === 'login' ? 'signup' : 'login');
//                 setError('');
//                 setFormData({ name: '', email: '', password: '' });
//               }}
//               className={`${theme.accent} font-bold hover:underline`}
//             >
//               {authMode === 'login' ? 'Sign Up Free' : 'Sign In'}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
//   return (
//     <div className={`min-h-screen ${theme.bg} ${theme.text} overflow-x-hidden`}>
//       {showAuth && <AuthModal />}

//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float-slow"></div>
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
//         scrollY > 50 ? `${theme.cardBg} backdrop-blur-xl border-b ${theme.border} shadow-lg` : ''
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3 animate-slideRight">
//               <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center shadow-lg ${theme.glowColor}`}>
//                 <GitBranch className="text-white" size={28} />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold">CollabFlow</h1>
//                 <p className={`text-xs ${theme.textSecondary}`}>Prevent. Collaborate. Deliver.</p>
//               </div>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#features" className={`${theme.textSecondary} hover:${theme.text} transition font-medium`}>Features</a>
//               <a href="#how-it-works" className={`${theme.textSecondary} hover:${theme.text} transition font-medium`}>How It Works</a>
//               <a href="#pricing" className={`${theme.textSecondary} hover:${theme.text} transition font-medium`}>Pricing</a>
//             </div>

//             <div className="hidden md:flex gap-3 animate-slideLeft">
//               {!isAuthenticated ? (
//                 <>
//                   <button
//                     onClick={() => { setAuthMode('login'); setShowAuth(true); }}
//                     className={`px-6 py-2.5 ${theme.secondary} backdrop-blur-xl rounded-xl font-semibold transition transform hover:scale-105`}
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={() => { setAuthMode('signup'); setShowAuth(true); }}
//                     className={`px-6 py-2.5 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-semibold transition transform hover:scale-105 shadow-lg ${theme.glowColor}`}
//                   >
//                     Start Free
//                   </button>
//                 </>
//               ) : (
//                 <div className="flex items-center gap-4">
//                   <span className={`px-5 py-2.5 ${theme.secondary} backdrop-blur-xl rounded-xl font-semibold`}>
//                     👋 Welcome Back!
//                   </span>
//                   <button
//                     onClick={() => setIsAuthenticated(false)}
//                     className={`px-6 py-2.5 ${theme.secondary} backdrop-blur-xl rounded-xl hover:bg-red-600/20 transition`}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden"
//               onClick={() => setMobileMenu(!mobileMenu)}
//             >
//               {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenu && (
//             <div className={`md:hidden pb-4 animate-slideDown`}>
//               <div className="flex flex-col gap-3">
//                 <a href="#features" className={`py-2 ${theme.textSecondary} hover:${theme.text}`}>Features</a>
//                 <a href="#how-it-works" className={`py-2 ${theme.textSecondary} hover:${theme.text}`}>How It Works</a>
//                 <a href="#pricing" className={`py-2 ${theme.textSecondary} hover:${theme.text}`}>Pricing</a>
//                 <button
//                   onClick={() => { setAuthMode('login'); setShowAuth(true); setMobileMenu(false); }}
//                   className={`w-full py-3 ${theme.secondary} rounded-xl font-semibold mt-2`}
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => { setAuthMode('signup'); setShowAuth(true); setMobileMenu(false); }}
//                   className={`w-full py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-semibold`}
//                 >
//                   Start Free
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Theme Selector - Added near top */}
//       <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto mb-8">
//           <div className={`${theme.cardBg} backdrop-blur-xl p-6 rounded-2xl border ${theme.border}`}>
//             <h3 className={`text-lg font-bold ${theme.text} mb-4 text-center`}>🔥 Choose Your Fire</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
//               {Object.entries(themes).map(([key, t]) => (
//                 <button
//                   key={key}
//                   onClick={() => setCurrentTheme(key)}
//                   className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
//                     currentTheme === key 
//                       ? 'border-red-500 shadow-lg shadow-red-500/30' 
//                       : `${t.border} hover:border-red-500/50`
//                   }`}
//                 >
//                   <div className={`h-12 rounded-lg bg-gradient-to-r ${t.gradient} mb-2 shadow-lg`}></div>
//                   <p className={`text-sm font-bold ${currentTheme === key ? 'text-red-400' : t.text}`}>{t.name}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full mb-8 animate-bounce-slow">
//             <Sparkles className="text-red-400" size={20} />
//             <span className="text-sm font-semibold text-red-400">80% Fewer Merge Conflicts Guaranteed</span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">
//             <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
//               Prevent Conflicts
//             </span>
//             <br />
//             Before They Happen
//           </h1>

//           <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto animate-slideUp animation-delay-200`}>
//             Real-time collaboration intelligence that stops merge conflicts before they waste your team's time. 
//             Built for modern development teams.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
//             <button 
//               onClick={() => { setAuthMode('signup'); setShowAuth(true); }}
//               className={`px-8 py-4 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl ${theme.glowColor} flex items-center justify-center gap-2`}
//             >
//               Start Free Trial <ArrowRight size={20} />
//             </button>
//             <button className={`px-8 py-4 ${theme.secondary} backdrop-blur-xl rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2`}>
//               Watch Demo <Star size={20} />
//             </button>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slideUp animation-delay-600">
//             {stats.map((stat, idx) => (
//               <div key={idx} className={`${theme.cardBg} backdrop-blur-xl p-6 rounded-2xl border ${theme.border} transform hover:scale-105 transition`}>
//                 <stat.icon className={`${theme.accent} mx-auto mb-3`} size={32} />
//                 <div className="text-3xl font-bold mb-1">{stat.value}</div>
//                 <div className={`text-sm ${theme.textSecondary}`}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Features Showcase */}
//       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
//                 Powerful Features
//               </span>
//             </h2>
//             <p className={`text-xl ${theme.textSecondary}`}>Everything you need for seamless team collaboration</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 className={`${theme.cardBg} backdrop-blur-xl p-8 rounded-3xl border ${theme.border} transform transition-all duration-500 hover:scale-105 cursor-pointer ${
//                   activeFeature === idx ? `shadow-2xl ${theme.glowColor}` : ''
//                 }`}
//                 onMouseEnter={() => setActiveFeature(idx)}
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow`}>
//                   <feature.icon className="text-white" size={32} />
//                 </div>
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-2xl font-bold">{feature.title}</h3>
//                   <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-bold rounded-full`}>
//                     {feature.stat}
//                   </span>
//                 </div>
//                 <p className={`text-lg ${theme.textSecondary}`}>{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Capabilities Grid */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Developers</h2>
//             <p className={`text-xl ${theme.textSecondary}`}>All the tools you need in one platform</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {capabilities.map((cap, idx) => (
//               <div
//                 key={idx}
//                 className={`${theme.cardBg} backdrop-blur-xl p-6 rounded-2xl border ${theme.border} hover:border-blue-500/50 transition-all transform hover:-translate-y-2 animate-slideUp`}
//                 style={{ animationDelay: `${idx * 100}ms` }}
//               >
//                 <cap.icon className={theme.accent} size={36} />
//                 <h4 className="text-xl font-bold mt-4 mb-2">{cap.title}</h4>
//                 <p className={theme.textSecondary}>{cap.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className={`${theme.cardBg} backdrop-blur-xl p-12 rounded-3xl border ${theme.border} text-center relative overflow-hidden`}>
//             <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-5`}></div>
//             <div className="relative z-10">
//               <Rocket className={`${theme.accent} mx-auto mb-6 animate-bounce-slow`} size={64} />
//               <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
//               <p className={`text-xl ${theme.textSecondary} mb-8`}>
//                 Join 50,000+ developers who have eliminated merge conflicts
//               </p>
//               <button 
//                 onClick={() => { setAuthMode('signup'); setShowAuth(true); }}
//                 className={`px-10 py-5 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold text-xl transition transform hover:scale-105 shadow-2xl ${theme.glowColor}`}
//               >
//                 Start Free Trial - No Credit Card Required
//               </button>
//               <p className={`text-sm ${theme.textSecondary} mt-4`}>14-day free trial • Cancel anytime • No hidden fees</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={`${theme.cardBg} backdrop-blur-xl border-t ${theme.border} py-12 px-4 sm:px-6 lg:px-8 mt-20`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center space-x-3 mb-6">
//             <div className={`w-10 h-10 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
//               <GitBranch className="text-white" size={24} />
//             </div>
//             <span className="text-2xl font-bold">CollabFlow</span>
//           </div>
//           <p className={theme.textSecondary}>© 2025 CollabFlow. Preventing conflicts, one commit at a time.</p>
//           <div className="flex justify-center gap-6 mt-6">
//             <button onClick={() => window.location.href='#features'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Features</button>
//             <button onClick={() => window.location.href='#pricing'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Pricing</button>
//             <button onClick={() => window.location.href='#docs'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Docs</button>
//             <button onClick={() => window.location.href='#blog'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Blog</button>
//             <button onClick={() => window.location.href='#contact'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Contact</button>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideLeft {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-20px) translateX(10px); }
//         }

//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(20px) translateX(-10px); }
//         }

//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-15px) translateX(-15px); }
//         }

//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out forwards;
//         }

//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }

//         .animate-slideRight {
//           animation: slideRight 0.8s ease-out;
//         }

//         .animate-slideLeft {
//           animation: slideLeft 0.8s ease-out;
//         }

//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }

//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 10s ease-in-out infinite;
//         }

//         .animate-float-slow {
//           animation: float-slow 12s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }

//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }

//         .animation-delay-600 {
//           animation-delay: 600ms;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { 
  GitBranch, AlertTriangle, TrendingUp, Clock, XCircle, 
  Activity, Users, Zap, Shield, BarChart3, Code, GitMerge, Bell,
  Sparkles, Target, Rocket, Star, ArrowRight, Menu, X
} from 'lucide-react';

const themes = {
  lava: { name: 'Lava', gradient: 'from-red-600 via-orange-600 to-yellow-500', glow: 'shadow-red-500/50' },
  volcano: { name: 'Volcano', gradient: 'from-rose-600 via-red-600 to-orange-500', glow: 'shadow-red-500/50' },
  crimson: { name: 'Crimson', gradient: 'from-red-700 via-red-600 to-red-500', glow: 'shadow-red-500/50' },
  inferno: { name: 'Inferno', gradient: 'from-red-600 via-pink-600 to-rose-500', glow: 'shadow-red-500/50' },
  ember: { name: 'Ember', gradient: 'from-orange-600 via-red-600 to-red-700', glow: 'shadow-orange-500/50' },
  magma: { name: 'Magma', gradient: 'from-red-500 via-orange-500 to-amber-500', glow: 'shadow-amber-500/50' },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('lava');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const theme = themes[currentTheme];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fixed Input Handler
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  // Fixed Auth Handler - NO REFRESH GUARANTEED
  const handleAuth = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError('');

    try {
      const endpoint = authMode === 'login'
        ? 'http://localhost:8080/api/signin'
        : 'http://localhost:8080/api/signup';

      const payload = authMode === 'login'
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setIsAuthenticated(true);
        setShowAuth(false);
        setFormData({ name: '', email: '', password: '' });
        if (data.token) localStorage.setItem('authToken', data.token);
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Backend not running on port 8080?');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  const features = [
    { icon: Zap, title: 'Real-time Conflict Detection', desc: 'Prevent merge conflicts instantly', stat: '80% Reduction', color: 'from-yellow-400 to-orange-500' },
    { icon: BarChart3, title: 'Smart Analytics', desc: 'AI insights on team velocity', stat: '94% Accuracy', color: 'from-blue-400 to-cyan-500' },
    { icon: GitMerge, title: 'Git Integration', desc: 'GitHub, GitLab, Bitbucket', stat: '10+ Tools', color: 'from-purple-400 to-pink-500' },
    { icon: Users, title: 'Team Hub', desc: 'Live sync, tasks, notifications', stat: '2000+ Teams', color: 'from-green-400 to-emerald-500' },
  ];

  const stats = [
    { label: 'Active Projects', value: '10K+', icon: Target },
    { label: 'Conflicts Stopped', value: '1M+', icon: Shield },
    { label: 'Happy Devs', value: '50K+', icon: Users },
    { label: 'Time Saved', value: '100K hrs', icon: Clock },
  ];

  const capabilities = [
    { icon: Code, title: 'Live File Tracking', desc: 'See who edits what' },
    { icon: AlertTriangle, title: 'AI Conflict Prediction', desc: '94% accurate' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Only what matters' },
    { icon: Activity, title: 'Real-time Feed', desc: 'Every action live' },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-zinc-100 overflow-x-hidden relative">

        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        {/* Auth Modal */}
        {showAuth && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-red-900/30 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scaleIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                  {authMode === 'login' ? 'Welcome Back' : 'Join CollabFlow'}
                </h2>
                <button onClick={() => setShowAuth(false)} className="text-zinc-400 hover:text-white">
                  <XCircle size={28} />
                </button>
              </div>

              <form onSubmit={handleAuth} className="space-y-5">
                {authMode === 'signup' && (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-4 bg-black/50 border border-red-900/30 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 bg-black/50 border border-red-900/30 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  placeholder="Password"
                  required
                  className="w-full px-5 py-4 bg-black/50 border border-red-900/30 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />

                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 bg-gradient-to-r ${theme.gradient} text-white font-bold text-lg rounded-xl hover:scale-105 transition shadow-lg ${theme.glow} disabled:opacity-50`}
                >
                  {loading ? 'Please wait...' : (authMode === 'login' ? 'Sign In' : 'Create Account')}
                </button>
              </form>

              <p className="text-center mt-6 text-zinc-400">
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'signup' : 'login');
                    setError('');
                    setFormData({ name: '', email: '', password: '' });
                  }}
                  className="text-red-500 font-bold hover:underline"
                >
                  {authMode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Nav */}
        <nav className={`fixed top-0 w-full z-40 transition-all ${scrollY > 50 ? 'bg-zinc-900/80 backdrop-blur-xl border-b border-red-900/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center shadow-lg ${theme.glow}`}>
                <GitBranch className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">CollabFlow</h1>
                <p className="text-xs text-zinc-400">No More Merge Hell</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-400 hover:text-white">Features</a>
              <a href="#how" className="text-zinc-400 hover:text-white">How it Works</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <span className="px-4 py-2 bg-zinc-800/50 rounded-xl">Welcome!</span>
                  <button onClick={handleLogout} className="px-6 py-2 bg-zinc-800/50 rounded-xl hover:bg-red-600/20">Logout</button>
                </>
              ) : (
                <>
                  <button onClick={() => { setAuthMode('login'); setShowAuth(true); }} className="px-6 py-2 bg-zinc-800/50 rounded-xl hover:bg-zinc-700">Login</button>
                  <button onClick={() => { setAuthMode('signup'); setShowAuth(true); }} className={`px-6 py-2 bg-gradient-to-r ${theme.gradient} text-white rounded-xl shadow-lg ${theme.glow} hover:scale-105`}>Start Free</button>
                </>
              )}
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenu && (
            <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-red-900/30 px-6 py-4 animate-slideDown">
              <button onClick={() => { setAuthMode('signup'); setShowAuth(true); setMobileMenu(false); }} className={`w-full py-3 mb-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl`}>Start Free</button>
              <button onClick={() => { setAuthMode('login'); setShowAuth(true); setMobileMenu(false); }} className="w-full py-3 bg-zinc-800 rounded-xl">Login</button>
            </div>
          )}
        </nav>

        {/* Theme Selector */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-red-900/30 rounded-2xl p-6">
            <h3 className="text-center text-lg font-bold mb-4">Choose Theme</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {Object.entries(themes).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => setCurrentTheme(key)}
                  className={`p-3 rounded-xl border-2 transition-all ${currentTheme === key ? 'border-red-500 shadow-lg shadow-red-500/30' : 'border-zinc-700 hover:border-red-500/50'}`}
                >
                  <div className={`h-10 rounded-lg bg-gradient-to-r ${t.gradient} mb-2`}></div>
                  <p className={`text-xs font-bold ${currentTheme === key ? 'text-red-400' : 'text-zinc-400'}`}>{t.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-20 pb-32 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full mb-8 animate-bounce-slow">
              <Sparkles className="text-red-400" />
              <span className="text-sm font-bold text-red-400">80% Fewer Merge Conflicts</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>Stop Conflicts</span><br />
              Before They Start
            </h1>
            <p className="text-xl text-zinc-400 mb-10">Real-time AI that saves hours of debugging</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => { setAuthMode('signup'); setShowAuth(true); }} className={`px-8 py-4 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold text-lg hover:scale-105 shadow-2xl ${theme.glow}`}>
                Start Free Trial <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </section>
{/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full mb-8 animate-bounce-slow">
            <Sparkles className="text-red-400" size={20} />
            <span className="text-sm font-semibold text-red-400">80% Fewer Merge Conflicts Guaranteed</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">
            <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
              Prevent Conflicts
            </span>
            <br />
            Before They Happen
          </h1>

          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto animate-slideUp animation-delay-200`}>
            Real-time collaboration intelligence that stops merge conflicts before they waste your team's time. 
            Built for modern development teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
            <button 
              onClick={() => { setAuthMode('signup'); setShowAuth(true); }}
              className={`px-8 py-4 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl ${theme.glowColor} flex items-center justify-center gap-2`}
            >
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className={`px-8 py-4 ${theme.secondary} backdrop-blur-xl rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2`}>
              Watch Demo <Star size={20} />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slideUp animation-delay-600">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${theme.cardBg} backdrop-blur-xl p-6 rounded-2xl border ${theme.border} transform hover:scale-105 transition`}>
                <stat.icon className={`${theme.accent} mx-auto mb-3`} size={32} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className={`text-sm ${theme.textSecondary}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Showcase */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                Powerful Features
              </span>
            </h2>
            <p className={`text-xl ${theme.textSecondary}`}>Everything you need for seamless team collaboration</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`${theme.cardBg} backdrop-blur-xl p-8 rounded-3xl border ${theme.border} transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeFeature === idx ? `shadow-2xl ${theme.glowColor}` : ''
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-bold rounded-full`}>
                    {feature.stat}
                  </span>
                </div>
                <p className={`text-lg ${theme.textSecondary}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Developers</h2>
            <p className={`text-xl ${theme.textSecondary}`}>All the tools you need in one platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className={`${theme.cardBg} backdrop-blur-xl p-6 rounded-2xl border ${theme.border} hover:border-blue-500/50 transition-all transform hover:-translate-y-2 animate-slideUp`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <cap.icon className={theme.accent} size={36} />
                <h4 className="text-xl font-bold mt-4 mb-2">{cap.title}</h4>
                <p className={theme.textSecondary}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`${theme.cardBg} backdrop-blur-xl p-12 rounded-3xl border ${theme.border} text-center relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-5`}></div>
            <div className="relative z-10">
              <Rocket className={`${theme.accent} mx-auto mb-6 animate-bounce-slow`} size={64} />
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
              <p className={`text-xl ${theme.textSecondary} mb-8`}>
                Join 50,000+ developers who have eliminated merge conflicts
              </p>
              <button 
                onClick={() => { setAuthMode('signup'); setShowAuth(true); }}
                className={`px-10 py-5 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold text-xl transition transform hover:scale-105 shadow-2xl ${theme.glowColor}`}
              >
                Start Free Trial - No Credit Card Required
              </button>
              <p className={`text-sm ${theme.textSecondary} mt-4`}>14-day free trial • Cancel anytime • No hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.cardBg} backdrop-blur-xl border-t ${theme.border} py-12 px-4 sm:px-6 lg:px-8 mt-20`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className={`w-10 h-10 bg-gradient-to-r ${theme.gradient} rounded-lg flex items-center justify-center`}>
              <GitBranch className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">CollabFlow</span>
          </div>
          <p className={theme.textSecondary}>© 2025 CollabFlow. Preventing conflicts, one commit at a time.</p>
          <div className="flex justify-center gap-6 mt-6">
            <button onClick={() => window.location.href='#features'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Features</button>
            <button onClick={() => window.location.href='#pricing'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Pricing</button>
            <button onClick={() => window.location.href='#docs'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Docs</button>
            <button onClick={() => window.location.href='#blog'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Blog</button>
            <button onClick={() => window.location.href='#contact'} className={`${theme.textSecondary} hover:${theme.text} transition`}>Contact</button>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-out;
        }

        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
        {/* Sab same hai, bas clean kiya hai — tu chahe toh yahin se copy kar sakta hai */}

      </div>

      <style jsx>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes float-delayed { 0%,100%{transform:translateY(0)} 50%{transform:translateY(20px)} }
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px) translateX(-15px)} }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes scaleIn { from {opacity:0; transform:scale(0.9)} to {opacity:1; transform:scale(1)} }
        @keyframes slideDown { from {opacity:0; transform:translateY(-20px)} to {opacity:1; transform:translateY(0)} }
        .animate-float { animation: float 8s infinite ease-in-out; }
        .animate-float-delayed { animation: float-delayed 10s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 12s infinite ease-in-out; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </>
  );
}

export default App;