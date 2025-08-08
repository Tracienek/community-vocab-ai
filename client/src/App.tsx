import { Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddWordPage from './pages/AddWordPage';
import WordDetailPage from './pages/WordDetailPage';
import { useAuth } from './context/AuthContext';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Private (bọc bằng layout chung) */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-word"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AddWordPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/words/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <WordDetailPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
