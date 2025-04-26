'use client';

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <div className="max-w-sm mx-auto p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Welcome Back!</h2>
      <p className="text-gray-500 text-center mb-8">Sign in with Approve Google account</p>
      <button
        onClick={() => signIn('google', { callbackUrl: '/account' })}
        className="bg-blue-500 text-white text-lg w-full py-3 flex gap-3 items-center justify-center rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:scale-105">
        <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 animate-pulse" />
        <span className="font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}
