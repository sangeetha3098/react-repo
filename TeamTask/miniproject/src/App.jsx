import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';

// Hook & Route protection: Checks session to shield routes
const ProtectedRoute = ({ children }) => {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/news/:id" 
          element={
            <ProtectedRoute>
              <NewsDetail />
            </ProtectedRoute>
          } 
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;