"use client";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onLogin = async () => {};
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
        className="border border-gray-300 rounded p-2 mb-2"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
        className="border border-gray-300 rounded p-2 mb-2"
        placeholder="Password"
      />
      <button
        onClick={onLogin}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-2"
      >
        Login
      </button>
      <p>
        {`Don't have an account? `}
        <Link href="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default LoginPage;
