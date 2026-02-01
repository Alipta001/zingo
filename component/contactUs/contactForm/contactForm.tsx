"use client";
import { useState } from "react";
import styles from "../../../styles/contactSection/contactSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactFormSubmit } from "@/redux/slice/contactSlice";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();
  const {
    loading: contactLoading,
    error: contactError,
  } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(contactFormSubmit(formData));
    setIsSent(true);
  };

  // --- LOADING STATE ---
  if (contactLoading) {
    return (
      <div className={styles.loadingCard}>
        <div className={styles.spinner}></div>
        <h2>Sending Message...</h2>
        <p>Please wait while we connect your inquiry to our team.</p>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (contactError) {
    return (
      <div className={`${styles.successCard} ${styles.errorBorder}`}>
        <div className={`${styles.successIcon} ${styles.errorIcon}`}>!</div>
        <h2>Submission Failed</h2>
        <p>Something went wrong. Please try again after some time.</p>
        <button onClick={() => setIsSent(false)} className={styles.simpleLink}>
          Go back to form
        </button>
      </div>
    );
  }

  // --- SUCCESS STATE ---
  if (isSent) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h2>Message Sent!</h2>
        <p>We've received your inquiry and will respond within 2 hours.</p>
        <button onClick={() => setIsSent(false)} className={styles.simpleLink}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.modernCard} onSubmit={handleSend}>
      <h3 className={styles.formTitle}>Send a Message</h3>
      <div className={styles.inputRow}>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.inputField}>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="" disabled>How can we help?</option>
          <option value="order">Order Inquiries</option>
          <option value="business">Business Partnerships</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <div className={styles.inputField}>
        <textarea
          name="message"
          rows={5}
          placeholder="Your message here..."
          required
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.premiumBtn}>
        Send Message <span className={styles.btnIcon}>→</span>
      </button>
    </form>
  );
}