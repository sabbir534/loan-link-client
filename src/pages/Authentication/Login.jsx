import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const Login = () => {
  const { signInUser, signInGoogle, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInUser(data.email, data.password);
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInGoogle();
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: "borrower",
      };

      await axiosPublic.post("/users", userInfo);

      toast.success("Google Login Successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Google login failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner smallHeight />
      </div>
    );
  }

  return (
    <div className="card w-full shadow-2xl bg-base-100 border border-base-200">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered focus:input-primary w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-error text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered focus:input-primary w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-error text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white text-lg"
            >
              Login
            </button>
          </div>
        </form>

        <div className="divider text-base-content/60">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-block hover:bg-base-200 hover:text-base-content"
        >
          <FcGoogle className="text-2xl mr-2" /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-bold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
