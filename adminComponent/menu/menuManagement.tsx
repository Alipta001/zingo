"use client";
import React, { useState, useMemo, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

// Layout
import SideBar from '../layout/Sidebar';
import Topbar from '../layout/Topbar';

// Components
import SearchBar from './searchBar';
import CategoryFilters from './CategoryFilters';
import MenuCard from './MenuCard';
import AddItem from './addItem';
import Toast from './Toast';
import DeleteConfirmModal from './deleteConfirmModal';

const CATEGORIES = ["All Items", "Starters", "Main Course", "Beverages", "Desserts"];

const INITIAL_DATA = [
  { id: 1, name: "Truffle Mushroom Risotto", category: "Main Course", price: 450, isVeg: true, isAvailable: true, description: "Creamy arborio rice with wild mushrooms and truffle oil.", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500" },
  { id: 2, name: "Spicy Peri-Peri Wings", category: "Starters", price: 320, isVeg: false, isAvailable: true, description: "Flame-grilled wings tossed in hot peri-peri sauce.", image: "https://images.unsplash.com/photo-1567620832903-9fc8deee6a6f?w=500" }
];

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState(INITIAL_DATA);
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "" });

  // Delete State
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, targetId: null as number | null });

  // 1. Filtering Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item: any) => {
      const matchesCategory = activeCategory === "All Items" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  // 2. Availability Toggle
  const toggleAvailability = useCallback((id: number) => {
    setMenuItems((prev: any) => prev.map((item: any) => 
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    ));
  }, []);

  // 3. Delete Handlers
  const openDeleteModal = useCallback((id: number) => {
    setDeleteModal({ isOpen: true, targetId: id });
  }, []);

  const confirmDelete = () => {
    if (deleteModal.targetId) {
      setMenuItems(prev => prev.filter(item => item.id !== deleteModal.targetId));
      setToast({ show: true, msg: "Dish successfully removed." });
    }
    setDeleteModal({ isOpen: false, targetId: null });
  };

  // 4. Add Item Handler
  const handleAddItem = (newItem: any) => {
    setMenuItems((prev: any) => [{ ...newItem, id: Date.now(), isAvailable: true }, ...prev]);
    setToast({ show: true, msg: "New dish added to the menu!" });
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <AnimatePresence>
        {toast.show && <Toast message={toast.msg} onClose={() => setToast({ ...toast, show: false })} />}
      </AnimatePresence>

      <aside className="hidden lg:block w-72 border-r border-slate-200 bg-white sticky top-0 h-screen">
        <SideBar isSidebarOpen={true} />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="p-6 lg:p-10 flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between gap-6 mb-10">
              <div>
                <h1 className="text-4xl font-[1000] text-slate-900 tracking-tight">Menu <span className="text-rose-600">Catalogue.</span></h1>
                <p className="text-slate-500 text-sm font-medium">Refine your flavors and manage availability.</p>
              </div>
              <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all transform active:scale-95">
                <Plus size={20} /> Add New Item
              </button>
            </header>

            <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryFilters categories={CATEGORIES} active={activeCategory} onSelect={setActiveCategory} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode='popLayout'>
                {filteredItems.map((item: any) => (
                  <MenuCard 
                    key={item.id} 
                    item={item} 
                    onToggle={toggleAvailability} 
                    onDelete={openDeleteModal}
                  />
                ))}
              </AnimatePresence>
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 font-bold">No dishes found matching your criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <AddItem 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddItem} 
        categories={CATEGORIES} 
      />

      <DeleteConfirmModal 
        isOpen={deleteModal.isOpen} 
        onClose={() => setDeleteModal({ isOpen: false, targetId: null })} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
}