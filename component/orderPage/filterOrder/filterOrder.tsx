import React from "react";
import { Check, Package, Truck, CheckCircle, XCircle } from "lucide-react";

const filterIcons = {
  "All Orders": Package,
  "On The Way": Truck,
  Delivered: CheckCircle,
  Cancelled: XCircle,
};

export default function FilterOrder({ categories, activeTab, setActiveTab }) {
  return (
    <div
      className="
        flex lg:flex-col gap-3
        overflow-x-auto lg:overflow-visible
        pb-2 lg:pb-0
        scrollbar-hide
      "
    >
      {categories.map((cat) => {
        const isActive = activeTab === cat;
        const Icon = filterIcons[cat];

        return (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`
              group flex items-center justify-between gap-3
              px-4 py-3 rounded-xl text-sm font-semibold
              transition-all duration-300 whitespace-nowrap
              border
              ${
                isActive
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white border-red-500 shadow-lg shadow-red-500/30"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-200 hover:bg-red-50"
              }
            `}
          >
            <div className="flex items-center gap-3 cursor-pointer">
              <Icon
                className={`
                  w-4 h-4 transition-transform duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-110"}
                `}
                strokeWidth={2}
              />
              <span>{cat}</span>
            </div>

            {isActive && <Check className="w-4 h-4" strokeWidth={3} />}
          </button>
        );
      })}
    </div>
  );
}
