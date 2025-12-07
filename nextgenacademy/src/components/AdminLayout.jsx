import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaStickyNote, FaBlog, FaSignOutAlt } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#0c0c0c] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] border-r border-gray-800 flex flex-col justify-between">

        {/* ---------------- TOP SECTION ---------------- */}
        <div className="px-6 py-6">
          {/* Logo */}
          <h2 className="text-xl font-bold tracking-wide text-indigo-400">
            NextGen Academy
          </h2>
          <p className="text-sm text-gray-400 mb-5">Admin Panel</p>

          <div className="h-px w-full bg-gray-800 mb-6"></div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            
            {/* Dashboard */}
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <FaHome /> Dashboard
            </NavLink>

            {/* Notes */}
            <NavLink
              to="/admin/add-notes"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <FaStickyNote /> Add Notes
            </NavLink>

            {/* Books */}
            <NavLink
              to="/admin/add-books"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <FaBook /> Add Books
            </NavLink>

            {/* Blogs */}
            <NavLink
              to="/admin/add-blogs"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <FaBlog />  Add Blogs
            </NavLink>
            {/* Blogs */}
            <NavLink
              to="/admin/blogs"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <FaBlog />  All Blogs
            </NavLink>
          </nav>
        </div>

        {/* ---------------- BOTTOM SECTION ---------------- */}
        <div className="px-6 pb-8 flex flex-col items-center">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md w-36 justify-center transition shadow-md">
            <FaSignOutAlt /> Logout
          </button>

          <p className="text-[11px] text-gray-500 mt-3">Admin Logged In</p>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
