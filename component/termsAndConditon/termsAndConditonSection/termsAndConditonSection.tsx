"use client";

import styles from "../../../styles/termsAndConditon/terms/terms.module.css";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "cancellation",
      title: "3. Cancellation & Refunds",
      content: [
        { subtitle: "3.1 Cancellation", text: "Users can cancel orders only before the restaurant starts preparing the food. Once the restaurant begins preparing food, cancellation may not be allowed." },
        { subtitle: "3.2 Refund Eligibility", text: "Refunds may be issued for: Incorrect or missing items, Poor food quality, or Order not delivered." },
        { subtitle: "3.3 Refund Timeline", text: "Approved refunds will be processed within 5–10 business days to the original payment method." },
        { subtitle: "3.4 No Refund Cases", text: "Change of mind after food preparation or Incorrect address provided by the user." },
      ]
    },
    {
      id: "delivery",
      title: "4. Delivery Partner Terms",
      content: [
        { subtitle: "4.1 Independent Contractors", text: "Delivery partners are independent contractors and not employees of Zingo." },
        { subtitle: "4.2 Responsibilities", text: "Delivery partners must deliver orders safely and promptly, follow traffic and local laws, and maintain professional behavior." },
        { subtitle: "4.3 Payments", text: "Earnings are calculated per delivery and paid according to Zingo’s payout cycle." },
        { subtitle: "4.4 Termination", text: "Zingo reserves the right to suspend or terminate delivery partner access for policy violations." },
      ]
    }
  ];

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        
        {/* HEADER SECTION */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Legal Center</span>
          <h1 className={styles.mainTitle}>Terms & <span className={styles.highlight}>Conditions</span></h1>
          <p className={styles.lastUpdated}>Last Updated: January 2026</p>
        </header>

        <main className={styles.mainContent}>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.subGrid}>
                {section.content.map((item, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CONTACT SECTION */}
          <section className={styles.contactSection}>
            <div className={styles.contactBox}>
              <h2>5. Contact Us</h2>
              <p>For any questions or concerns regarding these terms:</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <strong>Email</strong>
                  <span>support@zingo.com</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone</strong>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </section>

          {/* DISCLAIMER */}
          <footer className={styles.disclaimer}>
            <p>⚠️ <strong>Legal Disclaimer:</strong> This document is a standard template created for project/demo purposes. Please consult a qualified legal professional before using it in a live commercial application.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}