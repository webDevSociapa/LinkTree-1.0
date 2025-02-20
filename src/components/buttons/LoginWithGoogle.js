'use client';

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <div className="max-w mx-auto p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Sign in to Your Account</h2>
      <p className="text-gray-500 text-center mb-6">Use your Google account to get started</p>
      <button
        onClick={() => signIn('google', { callbackUrl: '/account' })}
        className="bg-red-500 text-white text-lg w-full py-3 flex gap-3 items-center justify-center rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md">
        <FontAwesomeIcon icon={faGoogle} className="h-6" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
