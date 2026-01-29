// "use client";

// import Image from 'next/image';
// import styles from '../../../styles/aboutUs/aboutSection/aboutSection.module.css';

// export default function AboutSection() {
//   const teamMembers = [
//     {
//       name: "Arjun Sharma",
//       role: "Founder & CEO",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       name: "Priya Verma",
//       role: "Chief Operations",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       name: "Chef Marcus Rossi",
//       role: "Head of Quality",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       name: "Sanya Goel",
//       role: "CTO",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
//     },
//   ];

//   return (
//     <div className={styles.aboutPage}>
//       <div className={styles.container}>
        
//         {/* HERO SECTION */}
//         <section className={styles.hero}>
//           <span className={styles.eyebrow}>Our Story</span>
//           <h1 className={styles.mainTitle}>
//             We’re on a mission to <br />
//             <span className={styles.highlight}>redefine the way you eat.</span>
//           </h1>
//           <p className={styles.subText}>
//             Launched in 2024, we started with a simple idea: premium food shouldn't just be a luxury, it should be an experience delivered to your doorstep.
//           </p>
//         </section>

//         {/* STATS BAR - The Red Power Bar */}
//         <div className={styles.statsBar}>
//           <div className={styles.statItem}>
//             <h2>500+</h2>
//             <p>Partner Restaurants</p>
//           </div>
//           <div className={styles.statItem}>
//             <h2>1M+</h2>
//             <p>Happy Foodies</p>
//           </div>
//           <div className={styles.statItem}>
//             <h2>20+</h2>
//             <p>Cities Covered</p>
//           </div>
//           <div className={styles.statItem}>
//             <h2>4.8★</h2>
//             <p>App Rating</p>
//           </div>
//         </div>

//         {/* MISSION & VISION */}
//         <section className={styles.visionSection}>
//           <div className={styles.visionCard}>
//             <div className={styles.visionContent}>
//               <h3>Driven by Quality</h3>
//               <p>
//                 We don't just partner with anyone. Every kitchen on our platform undergoes a rigorous 50-point quality check to ensure you get nothing but the best.
//               </p>
//               <button className={styles.learnMore}>Our Standards →</button>
//             </div>
//             <div className={styles.visionImage}>
//               <Image 
//                 src="/images/aboutUs/quality.png" 
//                 alt="Chef preparing food" 
//                 width={600} 
//                 height={400} 
//                 className={styles.mainImg}
//               />
//             </div>
//           </div>
//         </section>

//         {/* THE CORE VALUES (White-Red Mix) */}
//         <section className={styles.valuesSection}>
//           <h2 className={styles.sectionTitle}>Our Core Values</h2>
//           <div className={styles.valuesGrid}>
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>🚀</div>
//               <h4>Speed First</h4>
//               <p>Hot food belongs in your plate, not in a delivery bag for hours.</p>
//             </div>
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>💎</div>
//               <h4>Pure Quality</h4>
//               <p>If we wouldn't serve it to our family, we won't serve it to you.</p>
//             </div>
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>🤝</div>
//               <h4>Community</h4>
//               <p>Supporting local chefs and small businesses is in our DNA.</p>
//             </div>
//           </div>
//         </section>

//         {/* MEET THE TEAM SECTION */}
//         <section className={styles.teamSection}>
//           <div className={styles.teamHeader}>
//             <span className={styles.eyebrow}>The Team</span>
//             <h2 className={styles.sectionTitle}>Meet Our Visionaries</h2>
//           </div>
//           <div className={styles.teamGrid}>
//             {teamMembers.map((member, index) => (
//               <div key={index} className={styles.teamCard}>
//                 <div className={styles.memberImageWrapper}>
//                   <img src={member.image} alt={member.name} className={styles.memberImg} />
//                   <div className={styles.socialOverlay}>
//                     <span>LinkedIn</span>
//                     <span>Twitter</span>
//                   </div>
//                 </div>
//                 <div className={styles.memberInfo}>
//                   <h4>{member.name}</h4>
//                   <p className={styles.role}>{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Target, Star, Users, MapPin } from 'lucide-react';
import styles from '../../../styles/aboutUs/aboutSection/aboutSection.module.css';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const numericEnd = parseFloat(end);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * numericEnd;
      setCount(end.includes('.') ? currentCount.toFixed(1) : Math.floor(currentCount));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  const suffix = end.replace(/[0-9.]/g, '');
  return <span ref={countRef}>{count}{suffix}</span>;
};

export default function AboutSection() {
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const teamGridRef = useRef(null);

  const teamMembers = [
    { name: "Arjun Sharma", role: "Founder & CEO", image: "/images/aboutUs/person1.jpg" },
    { name: "Priya Verma", role: "Chief Operations", image: "/images/aboutUs/person2.png" },
    { name: "Chef Marcus Rossi", role: "Head of Quality", image: "/images/aboutUs/person3.png" },
    { name: "Sanya Goel", role: "CTO", image: "/images/aboutUs/person4.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsTeamVisible(true);
    }, { threshold: 0.1 });
    if (teamGridRef.current) observer.observe(teamGridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.aboutPage} min-h-screen bg-[#FFFDFD] text-slate-900`}>
      <div className={styles.textureOverlay} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="pt-28 pb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-rose-200 bg-rose-50 px-4 py-1.5 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5 text-rose-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-800">The Legacy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-[950] tracking-tighter leading-[0.85] uppercase mb-8">
            The <span className="text-rose-800 italic font-serif lowercase tracking-normal">Evolution</span> <br /> of Taste.
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Launched in 2024, Zingo was born from a singular vision: to transform food delivery into a <span className="text-rose-800 font-bold italic">Curated Experience</span>.
          </p>
        </section>

        {/* --- SECTION 2: ABOUT ZINGO (NEW) --- */}
        <section className="py-20 mb-20">
          <div className="bg-rose-800 rounded-[60px] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl shadow-rose-900/20">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <h2 className="text-[15vw] font-black leading-none uppercase select-none">Zingo</h2>
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8">About Zingo</h2>
              <div className="space-y-6 text-lg lg:text-xl text-rose-50 leading-relaxed font-medium">
                <p>
                  Zingo is your go-to online food delivery platform designed to connect hungry customers with the <span className="text-white font-black underline decoration-rose-400">best local restaurants near you</span>. 
                </p>
                <p>
                  Our mission is to redefine online food ordering by focusing on speed, quality, and customer satisfaction. Whether it’s late-night cravings or affordable meal options, Zingo brings fresh food and exclusive deals together in one simple app.
                </p>
                <p className="pt-4 text-rose-200 italic font-serif">
                  Order food online with Zingo — fast, fresh, and right around the corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: DRIVEN BY QUALITY --- */}
<section className="py-24 grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-20 overflow-hidden">
  
  {/* TEXT CONTENT - Moved to Left (order-1 on all screens) */}
  <div className="order-1 px-4 lg:px-0">
    <div className="flex items-center gap-3 mb-6">
      <div className="h-[1px] w-10 bg-rose-800" />
      <span className="text-[11px] font-black uppercase tracking-[0.4em] text-rose-800/60">
        Excellence Guaranteed
      </span>
    </div>
    
    <h3 className="text-5xl lg:text-7xl font-[950] uppercase tracking-tighter mb-8 text-slate-900 leading-[0.9]">
      Driven by <br />
      <span className="text-rose-800 italic font-serif lowercase tracking-normal">Absolute</span> Quality
    </h3>
    
    <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-xl">
      Every kitchen on our platform undergoes a rigorous <span className="text-rose-800 font-bold border-b-2 border-rose-100">50-point check</span>. We don't just deliver food; we deliver the highest standards of culinary peace of mind.
    </p>
    
    <button className="group flex items-center gap-6 px-10 py-5 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-rose-800 transition-all duration-500 shadow-2xl shadow-slate-900/20">
      View Our Standards
      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
    </button>
  </div>

  {/* PHOTO CONTENT - Moved to Right (order-2 on all screens) */}
  <div className="order-2 relative group">
    {/* Decorative Premium Elements */}
    <div className="absolute -inset-6 bg-rose-50 rounded-[60px] rotate-3 transition-transform group-hover:rotate-1 group-hover:bg-rose-100 duration-700" />
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(circle,_#fb7185_0%,_transparent_70%)] opacity-20 blur-2xl" />
    
    {/* Main Image */}
    <div className="relative z-10 rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(159,18,57,0.15)] border border-white">
      <Image 
        src="/images/aboutUs/quality.png" 
        alt="Quality Assurance" 
        width={800} 
        height={600} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Subtle Rosewater overlay for premium finish */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/10 to-transparent pointer-events-none" />
    </div>

    {/* Small floating "Seal of Quality" badge */}
    <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-rose-50 hidden md:block animate-bounce [animation-duration:3s]">
      <div className="text-rose-800 font-black text-2xl leading-none italic font-serif">50+</div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">Checkpoints</div>
    </div>
  </div>
</section>

        {/* --- SECTION 4: STATS BAR --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white border border-rose-100 p-12 lg:p-20 rounded-[60px] shadow-2xl shadow-rose-900/5 text-center mb-32">
          {[
            { end: "500+", label: "Partner Restaurants", icon: <Target className="mx-auto mb-4 text-rose-800 w-5 h-5"/> },
            { end: "1M+", label: "Happy Foodies", icon: <Users className="mx-auto mb-4 text-rose-800 w-5 h-5"/> },
            { end: "20+", label: "Cities Covered", icon: <MapPin className="mx-auto mb-4 text-rose-800 w-5 h-5"/> },
            { end: "4.8★", label: "App Rating", icon: <Star className="mx-auto mb-4 text-rose-800 w-5 h-5"/> },
          ].map((stat, i) => (
            <div key={i}>
              {stat.icon}
              <h2 className="text-4xl lg:text-6xl font-[950] text-slate-900 tracking-tighter mb-2 italic">
                <CountUp end={stat.end} />
              </h2>
              <p className="text-[10px] font-black text-rose-800/60 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- SECTION 5: TEAM --- */}
        <section className="pb-40 relative">
  <div className="text-center mb-20 px-4">
    <span className="text-[10px] font-black text-rose-800 uppercase tracking-[0.4em] mb-4 block">The Board</span>
    <h2 className="text-4xl md:text-5xl font-[950] uppercase tracking-tighter mb-4 text-slate-900 leading-none">
      Our <span className="text-rose-800">Visionaries</span>
    </h2>
    <div className="h-1 w-20 bg-rose-200 mx-auto" />
  </div>
  
  <div ref={teamGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
    {teamMembers.map((member, index) => (
      <div 
        key={index} 
        className={`${styles.floatingCard} transition-all duration-1000 transform ${isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* We use a fixed height container to ensure 'Card 1' logic applies to all */}
        <div className="group relative rounded-[40px] overflow-hidden shadow-2xl bg-white" style={{ height: '450px' }}>
          
          {/* IMAGE LAYER: Forced to fill 100% height and width */}
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
            style={{ 
              backgroundImage: `url(${member.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />
          
          {/* THE GRADIENT: This is what makes the first card look good. 
              We use a heavy burgundy-to-transparent mix. */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{ 
              background: 'linear-gradient(to top, rgba(26, 5, 5, 1) 0%, rgba(26, 5, 5, 0.4) 40%, rgba(26, 5, 5, 0) 100%)',
              zIndex: 2,
              opacity: 0.9
            }} 
          />

          {/* TEXT CONTENT: Forced to the bottom with White color */}
          <div className="absolute bottom-0 left-0 w-full p-8" style={{ zIndex: 3 }}>
            <h4 className="text-2xl font-[950] uppercase tracking-tighter text-white leading-none mb-2">
              {member.name}
            </h4>
            
            <div className="flex items-center gap-3">
               <div className="h-[2px] w-5 bg-rose-600 shadow-[0_0_12px_#e11d48]" />
               <p className="text-[11px] font-black text-rose-100 uppercase tracking-[0.3em]">
                 {member.role}
               </p>
            </div>
          </div>

          {/* Premium Border Overlay */}
          <div className="absolute inset-0 border border-white/10 rounded-[40px] pointer-events-none z-4" />
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  );
}