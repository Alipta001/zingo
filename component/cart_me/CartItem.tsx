// "use client";
// import { motion } from 'framer-motion';
// import { Minus, Plus, X } from 'lucide-react';
// import Image from 'next/image';

// export default function CartItem({ item }: { item: any }) {
//   return (
//     <motion.div 
//       layout
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 20 }}
//       className="flex items-center justify-between p-4 mb-4 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500 group"
//     >
//       <div className="flex items-center gap-4 flex-1">
//         <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md">
//           <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
//         </div>
//         <div>
//           <h3 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight">{item.name}</h3>
//           <p className="text-rose-500 font-black text-xs mt-1">₹{item.unitPrice}</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-6 md:gap-12">
//         <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
//           <button className="p-2 hover:bg-white hover:text-rose-600 rounded-xl transition-all shadow-sm"><Minus size={14} /></button>
//           <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
//           <button className="p-2 hover:bg-white hover:text-emerald-600 rounded-xl transition-all shadow-sm"><Plus size={14} /></button>
//         </div>
        
//         <div className="hidden md:block w-24 text-right">
//           <p className="font-[1000] text-slate-900">₹{item.finalPrice}</p>
//         </div>

//         <button className="p-2 text-slate-300 hover:text-rose-600 hover:rotate-90 transition-all duration-300">
//           <X size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// }


// "use client";
// import { useDispatch } from 'react-redux';
// import { Minus, Plus, X } from 'lucide-react';
// import { addToCart, removeItemFromApi } from '@/redux/slice/cartSlice';

// export default function CartItem({ item }: { item: any }) {
//   const dispatch = useDispatch<any>();

//   const handleIncrement = () => {
//     // Dynamic: Tells backend to set qty to current + 1
//     dispatch(addToCart({ menu_item_id: item.menu_item_id, quantity: item.quantity + 1 }));
//   };

//   const handleDecrement = () => {
//     if (item.quantity > 1) {
//       dispatch(addToCart({ menu_item_id: item.menu_item_id, quantity: item.quantity - 1 }));
//     }
//   };

//   const handleRemove = () => {
//     dispatch(removeItemFromApi(item.menu_item_id));
//   };

//   return (
//     <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-3xl border border-slate-100">
//       <div className="flex items-center gap-4 flex-1">
//         <img src={item.menu_item?.image || item.image} className="w-20 h-20 rounded-2xl object-cover" />
//         <div>
//           <h3 className="font-bold text-slate-900">{item.menu_item?.name || item.name}</h3>
//           <p className="text-rose-500 font-black">₹{item.menu_item?.price || item.price}</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-8">
//         <div className="flex items-center bg-slate-50 rounded-2xl p-1">
//           <button onClick={handleDecrement} className="p-2 hover:text-rose-600"><Minus size={14} /></button>
//           <span className="w-8 text-center font-bold">{item.quantity}</span>
//           <button onClick={handleIncrement} className="p-2 hover:text-emerald-600"><Plus size={14} /></button>
//         </div>
//         <button onClick={handleRemove} className="text-slate-300 hover:text-rose-600"><X size={20} /></button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useDispatch } from 'react-redux';
import { Minus, Plus, X } from 'lucide-react';
import { addToCart, removeItemFromApi } from '@/redux/slice/cartSlice';
import { motion } from 'framer-motion';

export default function CartItem({ item }: { item: any }) {
  const dispatch = useDispatch<any>();

  // Extracting data from your specific API structure
  const menuId = item.menu_item?.id; 
  const name = item.menu_item?.name;
  const price = item.price;
  const image = item.menu_item?.images?.[0]?.image || item.menu_item?.image;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between p-4 mb-4 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-extrabold text-slate-900 leading-tight">{name}</h3>
          <p className="text-rose-500 font-black text-sm">₹{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-10">
        <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
          <button 
            onClick={() => dispatch(addToCart({ menu_item_id: menuId, quantity: item.quantity - 1 }))}
            className="p-2 hover:bg-white rounded-xl transition-all"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center font-black text-slate-900">{item.quantity}</span>
          <button 
            onClick={() => dispatch(addToCart({ menu_item_id: menuId, quantity: item.quantity + 1 }))}
            className="p-2 hover:bg-white rounded-xl transition-all"
          >
            <Plus size={14} />
          </button>
        </div>
        
        <div className="hidden md:block w-20 text-right">
          <p className="font-[1000] text-slate-900">₹{item.item_total}</p>
        </div>

        <button 
          onClick={() => dispatch(removeItemFromApi(menuId))}
          className="p-2 text-slate-300 hover:text-rose-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </motion.div>
  );
}