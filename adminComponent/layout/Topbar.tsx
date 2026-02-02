export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Admin Dashboard</h1>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </header>
  );
}
