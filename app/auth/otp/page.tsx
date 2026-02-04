"use client";
import { useEffect, useRef, useState } from "react";
import "@/styles/otp/otp.css"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authOtp } from "@/redux/slice/authSlice";


export default function OtpPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // allow only numbers

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (
      e.key === "Backspace" &&
      !inputsRef.current[index]?.value &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const getOtpValue = () => {
    return inputsRef.current.map((input) => input?.value || "").join("");
  };

  useEffect(() => {
    // Get email from registration page
    const storedEmail = localStorage.getItem("otp_email") || localStorage.getItem("email");
    console.log("📧 EMAIL FROM STORAGE (Registration OTP Page):", storedEmail);
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpValue = getOtpValue();

    if (otpValue.length !== 6) {
      toast.error("Please enter 6-digit OTP");
      return;
    }

    // ✅ USE localStorage email
    if (!userEmail) {
      toast.error("User not found. Please register again.");
      return;
    }

    const payload = {
      email: userEmail,
      otp: otpValue,
    };
    console.log("🔐 REGISTRATION OTP VERIFY PAYLOAD:", payload);

    try {
      // Registration OTP verification
      const result = await dispatch(authOtp(payload) as any).unwrap();

      console.log("✅ OTP API response:", result); 
      // Accept success when backend returns status/token or a success message
      const successMessage = /verified|success|successfully/i.test(result?.message || "");
      if (result?.status === true || result?.token || result?.access || successMessage) {
        toast.success("OTP verified successfully! Please login now.");
        // Clear the storage
        localStorage.removeItem("otp_email");
        localStorage.removeItem("email");
        // Redirect to login page after successful registration
        router.push("/auth/signIn");
      } else {
        toast.error(result?.message || "Invalid OTP");
      }
    } catch (error: any) {
      console.error("❌ OTP error:", error); 
      toast.error(error?.message || "OTP verification failed");
    }
  };


  

  return (
    <div className="otp-page">
      <div className="otp-bg-image"></div>
      <div className="otp-bg-blur"></div>

      <div className="otp-wrapper">
        <div className="otp-card">
          <h2>Registration OTP Verification</h2>

          <p>
            Enter the 6 digit OTP sent to <br />
            <strong>{userEmail || "your email"}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputsRef.current[i] = el;
                  }}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  autoFocus={i === 0}
                />
              ))}
            </div>

            <button type="submit" className="otp-btn">
              Verify OTP
            </button>
          </form>

          <p className="resend">
            Didn’t receive OTP? <span>Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
}
