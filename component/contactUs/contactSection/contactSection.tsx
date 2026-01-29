// "use client";
// import { useState } from "react";
// import styles from "../../../styles/contactSection/contactSection.module.css";

// export default function ContactSection() {
//   const [isSent, setIsSent] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     setIsSent(true);
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className={styles.contactPage}>
//       <div className={styles.container}>
//         <div className={styles.contentGrid}>
//           {/* Header Section */}
//           <div className={styles.textHeader}>
//             <span className={styles.eyebrow}>Contact Us</span>
//             <h1 className={styles.mainTitle}>
//               Let's craft your <br />
//               <span className={styles.highlight}>next food story.</span>
//             </h1>
//             <p className={styles.subText}>
//               Have a question about an order or a partnership? We're here to
//               help you 24/7 with premium support.
//             </p>

//             <div className={styles.quickContact}>
//               <div className={styles.contactBox}>
//                 <span className={styles.boxIcon}>📧</span>
//                 <div>
//                   <label>Email Support</label>
//                   <p>hello@zingo.com</p>
//                 </div>
//               </div>
//               <div className={styles.contactBox}>
//                 <span className={styles.boxIcon}>📱</span>
//                 <div>
//                   <label>Call Us</label>
//                   <p>+1 (800) 123-4567</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Section */}
//           <div className={styles.formCardWrapper}>
//             {!isSent ? (
//               <form className={styles.modernCard} onSubmit={handleSend}>
//                 <h3 className={styles.formTitle}>Send a Message</h3>

//                 <div className={styles.inputRow}>
//                   <div className={styles.inputField}>
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       name="name"
//                       required
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className={styles.inputField}>
//                     <input
//                       type="email"
//                       placeholder="Email Address"
//                       name="email"
//                       required
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className={styles.inputField}>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>
//                       How can we help?
//                     </option>
//                     <option value="order">Order Inquiries</option>
//                     <option value="business">Business Partnerships</option>
//                     <option value="feedback">Feedback</option>
//                   </select>
//                 </div>

//                 <div className={styles.inputField}>
//                   <textarea
//                     name="message"
//                     rows={5}
//                     placeholder="Your message here..."
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>

//                 <button type="submit" className={styles.premiumBtn}>
//                   Send Message
//                   <span className={styles.btnIcon}>→</span>
//                 </button>
//               </form>
//             ) : (
//               <div className={styles.successCard}>
//                 <div className={styles.successIcon}>✓</div>
//                 <h2>Message Sent!</h2>
//                 <p>
//                   We've received your inquiry and will respond within 2 hours.
//                 </p>
//                 <button
//                   onClick={() => setIsSent(false)}
//                   className={styles.simpleLink}
//                 >
//                   Send another message
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import styles from "../../../styles/contactSection/contactSection.module.css";
import ContactForm from "../contactForm/contactForm";
import ContactHeader from "../contactHeader/contactHeader";

export default function ContactSection() {
  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <ContactHeader />
          <div className={styles.formCardWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}