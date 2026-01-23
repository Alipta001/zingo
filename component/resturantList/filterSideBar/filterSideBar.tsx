"use client"
import React, { useState } from 'react';
import styles from '@/styles/resturantList/filterSideBar/filterSideBar.module.css';

const FilterGroup = ({ title, children, defaultOpen = true }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={styles.filterGroup}>
      <button className={styles.groupHeader} onClick={() => setIsOpen(!isOpen)}>
        {title} <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className={styles.groupContent}>{children}</div>}
    </div>
  );
};

export default function FilterSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <span className={styles.filterTitle}>Filter</span>
        <button className={styles.clearAll}>CLEAR ALL</button>
      </div>

      <FilterGroup title="Food Preference">
        {['veg only', 'Non-Veg', 'Eggitarian', 'vegan'].map((pref) => (
          <label key={pref} className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span className={styles.checkboxText}>{pref}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Cuisine">
        <div className={styles.scrollableCuisine}>
          {['Indian', 'Chinese', 'Italian', 'Mughlai', 'Bengali', 'South Indian'].map((item) => (
            <label key={item} className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span className={styles.checkboxText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Rating">
        <div className={styles.rangeWrapper}>
          <input type="range" min="1" max="5" step="0.5" className={styles.slider} />
          <div className={styles.rangeLabels}>
            <span>1★</span>
            <span>5★</span>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Price Range">
         <div className={styles.rangeWrapper}>
          <input type="range" min="100" max="2000" className={styles.slider} />
          <div className={styles.rangeLabels}>
            <span>₹100</span>
            <span>₹2000</span>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Delivery Time">
        {['Under 30 mins', 'Under 45 mins', 'Under 60 mins'].map((time) => (
          <label key={time} className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span className={styles.checkboxText}>{time}</span>
          </label>
        ))}
      </FilterGroup>
    </div>
  );
}