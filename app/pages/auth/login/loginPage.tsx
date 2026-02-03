// "use client";

// import { authLogin } from "@/redux/slice/authSlice";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { Cookies } from "react-cookie";
// import { toast } from "sonner";
// import "../../../../styles/login/login.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";

// /* ================== Yup Schema ================== */
// const schema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Minimum 6 characters")
//     .max(20, "Maximum 20 characters")
//     .required("Password is required"),
//     terms: yup.boolean().oneOf([true], "You must accept"),
// });
// export default function LoginPage() {
//   const router = useRouter();
//   const cookies = new Cookies();
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state.auth);

//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       const result = await dispatch(authLogin(data)).unwrap();
//       console.log(result, "login result in page");

//       // ✅ email save for OTP page
//     localStorage.setItem("email", data.email);
//     //   if (result.status == true) {
//     //     cookies.set("token", result.token, { path: "/" });

//     // ✅ OTP sent → redirect
//     router.push("/pages/auth/signinOtp");
//       } 
//      catch (err: any) {
//       setSuccess(false);
//       setMessage(err);
//     }
//   };
//   return (
//     <section className="customer-acc-sec">
//       <div className="bg-container">
//         {/* Background image */}
//         <div className="bg-image"></div>
//         {/* Blur + dark overlay */}
//         <div className="bg-blur"></div>
//         {/* form layer */}
//         <div className="form-layer">
//              <div className="form-wrapper">
//           <div className="create-acc-sec glass-form">
//             <h2 className="user-title">Welcome Back</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="acc-form">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your Email"
//                   {...register("email")}
//                 />
//                 {errors.email && (
//                   <p className="error">{errors.email.message}</p>
//                 )}
//               </div>
//               <div className="password-form">
//                 <label>Password</label>
//                 <div className="input-wrapper">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your Password"
//                     autoComplete="new-password"
//                     {...register("password")}
//                   />
//                   <button
//                     type="button"
//                     className="toggle-password"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="error">{errors.password.message}</p>
//                 )}
//               </div>
//               {/* Terms */}
//               <div className="terms">
//                 <input type="checkbox" {...register("terms")} />
//                 <label>
//                   Remember me{" "}
//                   <Link href="/terms" className="terms-link">
//                     Forgot Password?
//                   </Link>
//                 </label>
//               </div>
//               {errors.terms && <p className="error">{errors.terms.message}</p>}
//               {/* Submit */}
//               <button type="submit" className="primary-btn">
//                 Sign In
//               </button>

//               <h4 className="or-text">or</h4>

//               {/* Google */}
//               <a
//                 href="https://accounts.google.com"
//                 className="secondary-btn google-btn"
//               >
//                 <img
//                   src="https://www.svgrepo.com/show/355037/google.svg"
//                   alt="Google"
//                   className="google-icon"
//                 />
//                 <span className="google-signin">Sign in with Google</span>
//               </a>

//               {/* Sign In */}
//               <p className="already-account">
//                 Don't have an account?{" "}
//                 <Link href="/pages/auth/signup" className="signin-link">
//                   Sign Up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { authLogin } from "@/redux/slice/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { toast } from "sonner";
import "../../../../styles/login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

/* ================== Yup Schema ================== */
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .max(20, "Maximum 20 characters")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept terms"),
});

export default function LoginPage() {
  const router = useRouter();
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Dispatching login
      const result = await dispatch(authLogin(data)).unwrap();
      console.log(result, "Login successful");

      // 1. Save email for the OTP page
      localStorage.setItem("email", data.email);

      // 2. TOKEN HANDLING: 
      // If your backend provides the token now (before OTP), we save it.
      // If it provides it AFTER OTP, make sure to do this same logic in signinOtp page.
      if (result.token || result.access) {
        const activeToken = result.token || result.access;
        cookies.set("token", activeToken, { 
          path: "/", 
          maxAge: 3600, // 1 hour
          sameSite: 'lax' 
        });
      }

      toast.success("OTP sent to your email!");
      
      // 3. Redirect to OTP page
      router.push("/pages/auth/signinOtp");

    } catch (err) {
      console.error("Login Error:", err);
      toast.error(typeof err === "string" ? err : "Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="customer-acc-sec">
      <div className="bg-container">
        <div className="bg-image"></div>
        <div className="bg-blur"></div>
        <div className="form-layer">
          <div className="form-wrapper">
            <div className="create-acc-sec glass-form">
              <h2 className="user-title">Welcome Back</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="acc-form">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="password-form">
                  <label>Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      autoComplete="current-password"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                  </div>
                  {errors.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </div>

                <div className="terms">
                  <div className="checkbox-wrapper">
                    <input type="checkbox" {...register("terms")} id="terms-checkbox" />
                    <label htmlFor="terms-checkbox">Remember me</label>
                  </div>
                  <Link href="/terms" className="terms-link">
                    Forgot Password?
                  </Link>
                </div>
                {errors.terms && <p className="error">{errors.terms.message}</p>}

                <button type="submit" className="primary-btn">
                  Sign In
                </button>

                <h4 className="or-text">or</h4>

                <a
                  href="https://accounts.google.com"
                  className="secondary-btn google-btn"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="google-icon"
                  />
                  <span className="google-signin">Sign in with Google</span>
                </a>

                <p className="already-account">
                  Don't have an account?{" "}
                  <Link href="/pages/auth/signup" className="signin-link">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}