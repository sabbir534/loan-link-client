import axios from "axios";

// Create the instance once
const axiosPublic = axios.create({
  // Use environment variable for production, fallback to localhost for dev
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",

  // IMPORTANT: This allows the server to set cookies (like the token)
  // in your browser even during login/registration requests.
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
