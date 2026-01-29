"use client";
import React, { useState } from 'react';
import styles from '../../../styles/blogPage/blogSection/blogsection.module.css';
import Link from 'next/dist/client/link';

const CATEGORIES = ["All", "Recipes", "Food Trends", "Healthy Eating", "Restaurant Stories"];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Secret to the Perfect Lucknawi Biryani",
    excerpt: "Discover the age-old techniques that make Lucknawi biryani the king of all rice dishes...",
    category: "Recipes",
    date: "Oct 24, 2025",
    readTime: "8 min read",
    image: "/images/blog/blog1.png",
    featured: true
  },
  {
    id: 2,
    title: "5 Vegan Spots in Kolkata You Must Visit",
    excerpt: "Veganism is taking the city by storm. Here are our top picks for plant-based goodness...",
    category: "Food Trends",
    date: "Oct 22, 2025",
    readTime: "5 min read",
    image: "/images/blog/blog2.jpg",
  },
  {
    id: 3,
    title: "5 Vegan Spots in Kolkata You Must Visit",
    excerpt: "Veganism is taking the city by storm. Here are our top picks for plant-based goodness...",
    category: "Food Trends",
    date: "Oct 22, 2025",
    readTime: "5 min read",
    image: "/images/blog/blog3.jpg",
  },
   {
    id: 4,
    title: "5 Vegan Spots in Kolkata You Must Visit",
    excerpt: "Veganism is taking the city by storm. Here are our top picks for plant-based goodness...",
    category: "Food Trends",
    date: "Oct 22, 2025",
    readTime: "5 min read",
    image: "/images/blog/blog4.webp",
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        
        {/* HEADER AREA */}
        <header className={styles.blogHeader}>
          <h1 className={styles.mainTitle}>The Foodie Journal</h1>
          <p className={styles.subTitle}>Stories, recipes, and news from the heart of the kitchen.</p>
          
          <div className={styles.categoryNav}>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                className={activeTab === cat ? styles.activePill : styles.pill}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* FEATURED POST */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImgArea}>
              <img src={BLOG_POSTS[0].image} alt="Featured" />
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.categoryBadge}>{BLOG_POSTS[0].category}</span>
              <h2>{BLOG_POSTS[0].title}</h2>
              <p>{BLOG_POSTS[0].excerpt}</p>
              <div className={styles.meta}>
                <span>{BLOG_POSTS[0].date}</span> • <span>{BLOG_POSTS[0].readTime}</span>
              </div>
              <Link href="/pages/blogDetail" className={styles.readMoreBtn}>Read Story</Link>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <div className={styles.blogGrid}>
          {BLOG_POSTS.slice(1).map(post => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.cardImgArea}>
                <img src={post.image} alt={post.title} />
                <span className={styles.floatingBadge}>{post.category}</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>{post.date} • {post.readTime}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className={styles.textLink}>Continue Reading →</button>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.newsletterSection}>
  <div className={styles.newsletterBox}>
    <div className={styles.newsletterContent}>
      <span className={styles.newsBadge}>Stay Updated</span>
      <h2>Join the Foodie Community</h2>
      <p>Get the latest restaurant reviews, secret recipes, and exclusive discount codes delivered straight to your inbox.</p>
      
      <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className={styles.emailInput} 
          required 
        />
        <button type="submit" className={styles.subscribeBtn}>
          Subscribe Now
        </button>
      </form>
      <p className={styles.privacyNote}>No spam, we promise. Only pure foodie goodness.</p>
    </div>
    <div className={styles.newsletterImage}>
      {/* You can use a food-related illustration or a high-res PNG of a dish */}
      <img src="/images/blog/newsLetter.jpg" alt="Newsletter" />
    </div>
  </div>
</section>

      </div>
    </div>
  );
}