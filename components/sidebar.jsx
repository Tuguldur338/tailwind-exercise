const SideBar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen bg-white-800 w-64 shadow-lg flex flex-col">
        {/* Logo / Header */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">My App</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-4">
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-gray-700 transition text-gray-800"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-gray-700 transition text-gray-800"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-gray-700 transition text-gray-800"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-gray-700 transition text-gray-800"
          >
            Logout
          </a>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-sm text-gray-800">
          © 2025 My App
        </div>
      </div>

      {/* Content area (to push aside) */}
      <div className="ml-64 p-6 flex-1">
        <h2 className="text-2xl font-bold">Main Content</h2>
        <p className="mt-2 text-gray-600">
          This is where your page content will go.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
