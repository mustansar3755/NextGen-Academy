import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, SignUp, Login, Dashboard } from "./pages/pages_index.js";


import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import AdminLogin from "./pages/Admin/AdminLogin.jsx";

const App = () => {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Login Page */}
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="notes" element={<h1>Notes</h1>} />
        <Route path="books" element={<h1>Books</h1>} />
        <Route path="blogs" element={<h1>Blogs</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
      </Route>

    </Routes>
  );
};

export default App;
