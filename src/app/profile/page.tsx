"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [loadingDetails, setLoadingDetails] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      setLoadingDetails(true);
      const res = await axios.get("/api/users/me");
      setData(res.data.data._id);
    } catch (error: any) {
      console.log("Client-side Error: ", error.message);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      <h1 className="text-3xl mt-14 text-center font-bold">Profile</h1>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-10 top-12"
      >
        Logout
      </button>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-36 top-12"
      >
        Home
      </a>
      <div className="flex flex-col grow items-center justify-center h-full py-2">
        <h2 className="px-3 py-2 border-4 bg-green-500">
          {data === "nothing" ? (
            "Please click below button to get details"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <button
          onClick={getUserDetails}
          className="bg-green-800 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {loadingDetails ? "Getting..." : "Get User Details"}
        </button>
      </div>
    </div>
  );
}
