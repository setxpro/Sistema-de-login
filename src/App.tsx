import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { AuthProvider } from './Context/AuthProvider';

export const App: React.FC = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={
        <ProtectedRoutes>
          <h2>Hi this is a Component Profile to verify authenticated</h2>
        </ProtectedRoutes>
      }/>
        
        <Route path="/login" element={<Login/>}/>
        <Route/>
      </Routes>
    </BrowserRouter> 
    </AuthProvider>
  );
}
