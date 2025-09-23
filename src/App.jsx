import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
// import signupPage from './pages/signupPage.jsx';
// import dashboardPage from './pages/dashboardPage.jsx'

/*
  This sets up the main routing rules for the entire application.
  BrowserRouter is the component that enables routing.
  <Route path="/login" ...> tells the app: when a user visits the URL /login, render the <loginPage /> component
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* If the URL is "/login", show the loginPage component */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* If the URL is something else, redirect to "/login" for now */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;