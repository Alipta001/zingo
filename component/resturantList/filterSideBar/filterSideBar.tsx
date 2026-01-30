"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, ChevronDown, X } from "lucide-react";
import {
  addCuisine,
  addPrice,
  addRating,
  clearAllFilters,
  removeCuisine,
  removePrice,
  removeRating,
} from "@/redux/slice/filterSlice";
import styles from "@/styles/resturantList/filterSideBar/filterSideBar.module.css";
const FILTERS = [
  {
    key: "cuisine",
    label: "Cuisine",
    options: ["Indian", "Chinese", "Italian", "Mexican", "Thai"],
  },
  { key: "rating", label: "Rating", options: ["5", "4.5", "4.0", "3.5", "3"] },
  {
    key: "price",
    label: "Price Range",
    options: ["₹250", "₹500", "₹1000", "₹2000"],
  },
];

export default function FilterSection() {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const selectedCuisines = useSelector(
    (state: any) => state.filters?.selectedCuisines || [],
  );
  const selectedRatings = useSelector(
    (state: any) => state.filters?.selectedRating || [],
  );
  const handleToggle = (category: string, opt: string, checked: boolean) => {
    console.log("Toggling:", category, opt, checked);
    console.log(activeModal);
    if (category === "cuisine") {
      checked ? dispatch(removeCuisine(opt)) : dispatch(addCuisine(opt));
    } else if (category === "rating") {
      checked ? dispatch(removeRating(opt)) : dispatch(addRating(opt));
    }
  };

  return (
    <>
      {/* --- MOBILE: Top Horizontal Pills (Hidden on LG) --- */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 px-6 overflow-x-auto flex gap-3 noScrollbar justify-center">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveModal(f.key)}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-600"
          >
            {f.label} <ChevronDown className="w-3 h-3" />
          </button>
        ))}
      </div>

      {/* --- DESKTOP: Left Sidebar (Hidden on Mobile) --- */}
      <aside className="hidden lg:block w-72 sticky top-32 h-fit">
        <div className="bg-white border border-slate-100 rounded-[32px] p-8">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Filters
            </h3>
            {selectedCuisines.length ||
              (selectedRatings.length > 0 && (
                <button
                  onClick={() => dispatch(clearAllFilters())}
                  className="text-[10px] font-black text-rose-800 underline"
                >
                  Reset
                </button>
              ))}
          </div>
          {FILTERS.map((filter) => (
            <div key={filter.key} className="mb-10 last:mb-0">
              <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6">
                {filter.label}
              </p>
              <div className="space-y-4">
                {filter.options.map((opt) => {
                  const isChecked =
                    selectedCuisines.includes(opt) ||
                    selectedRatings.includes(opt);
                  return (
                    <label
                      key={opt}
                      className="flex items-center group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() =>
                          handleToggle(filter.key, opt, isChecked)
                        }
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded-lg flex items-center justify-center transition-all ${isChecked ? "bg-[#0f172a] border-[#0f172a]" : "border-slate-100"}`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span
                        className={`ml-3 text-sm font-bold ${isChecked ? "text-slate-900" : "text-slate-400"}`}
                      >
                        {opt}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* --- MOBILE MODAL (Bottom Sheet) --- */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className={`w-full bg-white rounded-t-[40px] p-8 ${styles.animateSlideUp}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-slate-900 tracking-tighter">
                Select {activeModal}
              </h3>
              <X
                className="w-6 h-6 text-slate-400"
                onClick={() => setActiveModal(null)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FILTERS.find((f) => f.key === activeModal)?.options.map(
                (opt) => {
                  const isChecked =
                    selectedCuisines.includes(opt) ||
                    selectedRatings.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => handleToggle(activeModal, opt, isChecked)}
                      className={`p-4 rounded-2xl border-2 text-sm font-black transition-all ${isChecked ? "border-[#0f172a] bg-slate-50 text-slate-900" : "border-slate-50 text-slate-400"}`}
                    >
                      {opt}
                    </button>
                  );
                },
              )}
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px]"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </>
  );
}
