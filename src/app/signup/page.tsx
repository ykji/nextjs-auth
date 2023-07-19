"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  useEffect(() => {
    if (user.email.length && user.password.length && user.username.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("hogya signup");
      router.push("/");
    } catch (error: any) {
      console.log("Client-side Error: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
        className="border border-gray-300 rounded p-2 mb-2 text-black"
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
        className="border border-gray-300 rounded p-2 mb-2 text-black"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
        className="border border-gray-300 rounded p-2 mb-2 text-black"
        placeholder="Password"
      />
      <button
        onClick={onSignup}
        disabled={buttonDisabled}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-2"
      >
        {loading ? "In process" : "Signup"}
      </button>
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
