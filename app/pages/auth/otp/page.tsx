"use client";

import { useRef } from "react";
import "../../../../styles/otp/otp.css";

export default function OtpPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // allow only numbers

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !inputsRef.current[index]?.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-bg-image"></div>
      <div className="otp-bg-blur"></div>

      <div className="otp-wrapper">
        <div className="otp-card">
          <h2>OTP Verification</h2>

          <p>
            Enter the 6 digit OTP sent to <br />
            <strong>example@email.com</strong>
          </p>

          <div className="otp-inputs">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                ref={(el) => {(inputsRef.current[i] = el)}}
                type="text"
                maxLength={1}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                autoFocus={i === 0}
              />
            ))}
          </div>

          <button className="otp-btn">Verify OTP</button>

          <p className="resend">
            Didn’t receive OTP? <span>Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
}
