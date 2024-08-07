"use client";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState({
    password: "",
    cpassword: ""
  });

  const router = useRouter();

  const updatePassword = async () => {
    try {
      if (password.password === password.cpassword) {
        await axios.put("/apii/users/updatepassword", { token, password });
        toast.success("Success!");
        router.push("/login");
      } else {
        return alert("Passwords do not match");
      }
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  const verifyUserEmail = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/verifyemail", { token });
      setVerify(true);
    } catch (error: any) {
      setLoading(false);
      setError(true);
      console.log(error.response.data);
    }
  }, [token]);

  useEffect(() => {
    const token = window.location.search.split("=")[1];
    setToken(token || "");
  }, []);

  useEffect(() => {
    if (token !== "") {
      verifyUserEmail();
    }
  }, [token, verifyUserEmail]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white">Some Error Occurred</h1>
      </div>
    );
  }

  if (!verify) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white">Wait, we are verifying...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-white">{loading ? "Processing..." : "Reset Password"}</h1>
      <label htmlFor="password" className="text-white">Enter New Password</label>
      <input
        className="hover:border border-white rounded-lg px-2 m-2"
        type="password"
        placeholder="New Password"
        id="password"
        value={password.password}
        onChange={(e) => setPassword({
          ...password,
          password: e.target.value
        })}
      />
      <input
        className="hover:border border-white rounded-lg px-2 m-2"
        type="password"
        placeholder="Confirm New Password"
        id="cpassword"
        value={password.cpassword}
        onChange={(e) => setPassword({
          ...password,
          cpassword: e.target.value
        })}
      />
      <button className="border border-gray-700 m-2 p-2 rounded-xl text-white" onClick={updatePassword}>Update Password</button>
    </div>
  );
};

export default ResetPassword;
