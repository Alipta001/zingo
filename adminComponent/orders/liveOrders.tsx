export default function LiveOrders() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Live Orders</h2>

      <div className="space-y-4">
        {["Pending", "Preparing", "Out for Delivery"].map((status) => (
          <div key={status} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <p className="font-semibold">Order #1024</p>
              <p className="text-gray-500">{status}</p>
            </div>

            <select className="border px-3 py-2 rounded">
              <option>Pending</option>
              <option>Preparing</option>
              <option>Out for Delivery</option>
              <option>Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
