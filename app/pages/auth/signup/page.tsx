"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../../../styles/register/register.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authRegistration } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/* ================== Yup Schema ================== */
const schema = yup.object().shape({
  role: yup.string().required("Please select a role"),
  username: yup.string().required("Name is required").min(2),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup.boolean().oneOf([true], "You must accept the terms & conditions"),
});

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [selectedRole, setSelectedRole] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClick = async (data) => {

  
    const mapRole = {
      user: "customer",
      admin: "admin",
      delivery: "delivery_partner",
    };
    const payload = {
      role: mapRole[data.role] || "customer",
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      first_name: "_",
      last_name: "_",
    };
    console.log("Final payload to backend:", JSON.stringify(payload, null, 2));

    console.log("JSON Payload:", payload);

    try {
      let res = await dispatch(authRegistration(payload)).unwrap();
      
      console.log("Registration response:", res);
      const emailToStore=res?.user?.email||payload.email;
      console.log("Storing email for OTP:", emailToStore);
      localStorage.setItem("otp_email", emailToStore);
      console.log("Email stored for OTP:", localStorage.getItem("otp_email"));


      if (res?.message) {
      toast.success(res.message);

        router.push("/pages/auth/otp");
      } else {
        router.push("/pages/auth/signup");
      }
    } catch (error) {}
  };
  // console.log("FORM ERRORS 👉", errors);

  return (
    <section className="customer-acc-sec">
      <div className="bg-container">
        {/* Background image */}
        <div className="bg-image"></div>

        {/* Blur + dark overlay */}
        <div className="bg-blur"></div>

        {/* Form layer */}
        <div className="form-layer">
          <div className="create-acc-sec glass-form">
            <h2 className="user-title">Create an Account</h2>

            <form onSubmit={handleSubmit(handleClick)}>
              {/* Role Selection */}
              <div className="acc-form">
                <label>Register As</label>
                <select {...register("role")}>
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="delivery">Delivery Partner</option>
                </select>

                {errors.role && <p className="error">{errors.role.message}</p>}
              </div>

              {/* Name */}
              <div className="acc-form">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="error">{errors.username.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="acc-form">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="password-form">
                <label>Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Use at least 8 characters"
                    autoComplete="new-password"
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

              {/* Confirm Password */}
              <div className="confirm-form">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    {...register("confirm_password")}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                    />
                  </button>
                </div>
                {errors.confirm_password && (
                  <p className="error">{errors.confirm_password.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="terms">
                <input type="checkbox" {...register("terms")} />
                <label>
                  By clicking Create Account, you agree to Zingo’s{" "}
                  <Link href="/terms" className="terms-link">
                    Terms of Use and Policies
                  </Link>
                </label>
              </div>
              {errors.terms && <p className="error">{errors.terms.message}</p>}

              {/* Submit */}
              <button type="submit" className="primary-btn">
                Create An Account
              </button>

              <h4 className="or-text">or</h4>

              {/* Google */}
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

              {/* Sign In */}
              <p className="already-account">
                Already have an account?
                <Link href="/auth/signin" className="signin-link">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
