export default function OrderSummary({ items }: { items: any[] }) {
  return (
    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-8">
        <img src="/image/kfc.png" alt="KFC" className="h-8 object-contain" />
        <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">#ORD-882910</span>
      </div>
      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Your Order</h4>
      <ul className="space-y-4 mb-8">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between font-bold text-slate-800">
            <span>{item.qty}x {item.name}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}