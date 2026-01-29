import styles from "../../../styles/contactSection/contactSection.module.css";
export default function ContactHeader() {
  return (
    <div className={styles.textHeader}>
      <span className={styles.eyebrow}>Contact Us</span>
      <h1 className={styles.mainTitle}>
        Let's craft your <br />
        <span className={styles.highlight}>next food story.</span>
      </h1>
      <p className={styles.subText}>
        Have a question about an order or a partnership? We're here to
        help you 24/7 with premium support.
      </p>

      <div className={styles.quickContact}>
        <div className={styles.contactBox}>
          <span className={styles.boxIcon} aria-hidden="true">📧</span>
          <div>
            <label>Email Support</label>
            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=zingoofficial01@gmail.com" target="_blank" rel="noopener noreferrer">zingoofficial01@gmail.com</a></p>
          </div>
        </div>
        <div className={styles.contactBox}>
          <span className={styles.boxIcon} aria-hidden="true">📱</span>
          <div>
            <label>Call Us</label>
            <p>+1 (800) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}