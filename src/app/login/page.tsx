"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user.email.length && user.password.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed:", error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
        onClick={onLogin}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-2"
        disabled={buttonDisabled}
      >
        {loading ? "In process" : "Login"}
      </button>
      <p>
        {`Don't have an account? `}
        <Link href="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default LoginPage;
