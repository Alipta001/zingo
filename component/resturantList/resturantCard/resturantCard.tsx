import { BaseURL } from '@/api/axios/axios';
import styles from '@/styles/resturantList/resturantCard/resturantCard.module.css';

export default function RestaurantCard({ item }: { item: any }) {
  return (
    <div className={styles.card}>
      <button className={styles.wishlistBtn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff9f43" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      <div className={styles.imgArea}>
        <img src={`${BaseURL}/${item.image}`} alt={item.name} className={styles.restaurantImg} />
      </div>

      <div className={styles.detailsArea}>
        <h3 className={styles.restName}>{item.name}</h3>
        <p className={styles.cuisineText}>{item.cuisine_type}</p>
        
        <div className={styles.statsRow}>
          <div className={styles.ratingBadge}>
            <span className={styles.star}>★</span> {item.rating}
          </div>
         {/*  <div className={styles.deliveryInfo}>
            <span className={styles.dot}>•</span> 
            {item.deliveryTime} 
            <span className={styles.dot}>•</span> 
            ₹{item.priceForTwo}
          </div> */}
        </div>

        {item.offer && (
          <div className={styles.promoBadge}>
            <span className={styles.promoText}>
              {item.offer} | Use Code {item.promoCode}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}