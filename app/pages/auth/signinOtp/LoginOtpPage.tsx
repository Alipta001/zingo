// "use client";
// import { useEffect, useRef, useState } from "react";
// import "../../../../styles/signinOtp/signinOtp.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { authLoginOtp } from "@/redux/slice/authSlice";

// export default function LoginOtpPage() {
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("email");
//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []);

//   const handleChange = (index: number, value: string) => {
//     if (!/^\d?$/.test(value)) return;

//     if (value && index < 5) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
//     if (
//       e.key === "Backspace" &&
//       !inputsRef.current[index]?.value &&
//       index > 0
//     ) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   const getOtpValue = () =>
//     inputsRef.current.map((input) => input?.value || "").join("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const otpValue = getOtpValue();

//     if (otpValue.length !== 6) {
//       toast.error("Please enter 6-digit OTP");
//       return;
//     }

//     if (!email) {
//       toast.error("Email not found. Please login again.");
//       return;
//     }

//     try {
//       const result = await dispatch(
//         authLoginOtp({ email, otp: otpValue })
//       ).unwrap();

//       if (result?.message) {
//         router.push("/"); // ✅ home/dashboard
//       }
//     } catch (err: any) {
//       toast.error(err?.message || "OTP failed");
//     }
//   };

//   return (
//     <div className="otp-page">
//       <div className="otp-bg-image"></div>
//       <div className="otp-bg-blur"></div>

//       <div className="otp-wrapper">
//         <div className="otp-card">
//           <h2>Login OTP Verification</h2>

//           <p>
//             Enter the 6 digit OTP sent to <br />
//             <strong>{email}</strong>
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="otp-inputs">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <input
//                   key={i}
//                   ref={(el) => {(inputsRef.current[i] = el)}}
//                   type="text"
//                   maxLength={1}
//                   inputMode="numeric"
//                   onChange={(e) => handleChange(i, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(i, e)}
//                   autoFocus={i === 0}
//                 />
//               ))}
//             </div>

//             <button type="submit" className="otp-btn">
//               Verify OTP
//             </button>
//           </form>

//           <p className="resend">
//             Didn’t receive OTP? <span>Resend</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import "../../../../styles/signinOtp/signinOtp.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "@/app/api/axios/cookieUtils";
import { authLoginOtp } from "@/redux/slice/authSlice";

export default function LoginOtpPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

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

  const getOtpValue = () =>
    inputsRef.current.map((input) => input?.value || "").join("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = getOtpValue();

    if (otpValue.length !== 6) {
      toast.error("Please enter 6-digit OTP");
      return;
    }

    if (!email) {
      toast.error("Email not found. Please login again.");
      return;
    }

    try {
      // 1. Dispatch the OTP verification
      const result: any = await dispatch(
        authLoginOtp({ email, otp: otpValue }) as any
      ).unwrap();

      console.log("OTP Verification Result:", result);

      // 2. ✅ SAVING THE TOKEN (The critical piece)
      // We look for 'token', 'access', or 'access_token' based on your Django response
      const token = result?.token || result?.access || result?.access_token;

      if (token) {
        // ✅ Use native setCookie instead of react-cookie
        setCookie("token", token, { 
          path: "/", 
          maxAge: 86400, // 24 hours
          sameSite: 'lax' 
        });
        
        toast.success("Login Successful!");
        
        // 3. Redirect to the Restaurant List
        router.push("/pages/resturantList"); 
      } else {
        // If the backend didn't return a token, we check if the message was just success
        if (result?.message) {
           toast.success(result.message);
           router.push("/");
        }
      }

    } catch (err: any) {
      toast.error(err?.message || "OTP failed. Please try again.");
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-bg-image"></div>
      <div className="otp-bg-blur"></div>

      <div className="otp-wrapper">
        <div className="otp-card">
          <h2>Login OTP Verification</h2>

          <p>
            Enter the 6 digit OTP sent to <br />
            <strong>{email}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  ref={(el) => { inputsRef.current[i] = el; }}
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
            Didn’t receive OTP? <span style={{cursor: 'pointer', color: '#e11d48'}}>Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
}