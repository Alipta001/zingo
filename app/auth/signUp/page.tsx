"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../../styles/register/register.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authRegistration } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* ================== Yup Schema ================== */
const schema = yup.object().shape({
  role: yup.string().required("Please select a role"),
  name: yup.string().required("Name is required").min(2),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup
  .boolean()
  .oneOf([true], "You must accept the terms & conditions"),

});

export default function Page() {
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
    const formData = new FormData();
    formData.append("role", data.role);

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    console.log("Form Data:", data);

    try {
      let res = await dispatch(authRegistration(formData)).unwrap();
      if (res.success) {
        localStorage.setItem("Id", res.user.id);
        router.push("/auth/otp");

      } else {
        router.push("/auth/signup");
      }
    } catch (error) {}
  };
  console.log("FORM ERRORS 👉", errors);

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
                  {...register("name")}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
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
                    {...register("confirmPassword")}
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
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="terms">
                <input type="checkbox" {...register("terms")} />
                <label>
                  By clicking Create Account, you agree to Zingo’s{" "}
                  <Link href="/pages/termsAndConditions" className="terms-link">
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
                <Link href="/auth/signIn" className="signin-link">
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


