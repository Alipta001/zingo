export default function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {[
        { title: "Total Orders", value: "1,245" },
        { title: "Active Orders", value: "42" },
        { title: "Restaurants", value: "18" },
        { title: "Revenue", value: "₹3.4L" },
      ].map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">{stat.title}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
