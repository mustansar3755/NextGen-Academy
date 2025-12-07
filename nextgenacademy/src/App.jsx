import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, SignUp, Login, Dashboard, AddNotes, AddBooks } from "./pages/pages_index.js";


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
        <Route path="add-notes" element={<AddNotes/>} />
        <Route path="add-books" element={<AddBooks/>} />
        <Route path="add-blogs" element={<h1>Blogs</h1>} />
        <Route path="all-blogs" element={<h1>Settings</h1>} />
      </Route>

    </Routes>
  );
};

export default App;
