import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboardDark from './pages/AdminDashboardDark'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <Routes>
      <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/admin" replace /> : <Navigate to="/login" replace />} 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminDashboardDark />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App
