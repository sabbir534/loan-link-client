import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const Register = () => {
  const { registerUser, updateUserProfile, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data.email, data.password);

      await updateUserProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: data.photoURL,
        role: data.role,
      };

      const dbResponse = await axiosPublic.post("/users", userInfo);

      if (
        dbResponse.data.insertedId ||
        dbResponse.data.message === "User already exists"
      ) {
        toast.success("Registration Successful!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Registration failed");
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
    <div className="card w-full shadow-2xl bg-base-100 border border-base-200 my-8">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Create Account
        </h2>
        <p className="text-center text-base-content/60 mb-6">
          Join LoanLink today
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered focus:input-primary w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered focus:input-primary w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered focus:input-primary w-full"
              {...register("photoURL", { required: "Photo URL is required" })}
            />
            {errors.photoURL && (
              <span className="text-error text-sm">
                {errors.photoURL.message}
              </span>
            )}
          </div>

          {/* Role Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">I want to join as</span>
            </label>
            <select
              className="select select-bordered w-full focus:select-primary"
              {...register("role", { required: "Please select a role" })}
            >
              <option value="borrower">Borrower</option>
              <option value="manager">Loan Manager</option>
            </select>
            {errors.role && (
              <span className="text-error text-sm">{errors.role.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered focus:input-primary w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message:
                    "Password must contain at least one uppercase and one lowercase letter",
                },
              })}
            />
            {errors.password && (
              <span className="text-error text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white text-lg"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
