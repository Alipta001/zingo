"use client";
import { useEffect, useRef, useState } from "react";
import "../../../../styles/otp/otp.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authOtp } from "@/redux/slice/authSlice";


export default function OtpPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const { email, isOtpverified } = useSelector((state: any) => state.auth);

  const [userId, setUserId] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("Id");
    if (id) {
      setUserId(id);
    }
  }, []);

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

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("otp_email");
    console.log("EMAIL FROM STORAGE:", storedEmail); // 🔥 DEBUG
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
  console.log("OTP VERIFY PAYLOAD:", payload);


  try {
    const result = await dispatch(authOtp(payload)).unwrap();

    console.log("OTP API response:", result); // ✅ YOU WILL SEE THIS NOW

    if (result?.status === true) {
      toast.success("OTP verified successfully");
      router.push("/auth/signin");
    } else {
      toast.error(result?.message || "Invalid OTP");
    }
  } catch (error: any) {
    console.error("OTP error:", error); // ✅ ERROR WILL SHOW
    toast.error(error?.message || "OTP verification failed");
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
            <strong>{email || "your email"}</strong>
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
