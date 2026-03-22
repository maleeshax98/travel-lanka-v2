"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-orange-100 rounded-full">
            <AlertCircle size={48} className="text-orange-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          We apologize for the inconvenience. Our team has been notified. 
          You can try refreshing the page or returning home.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => reset()}
            className="primary-button flex items-center justify-center gap-2 w-full py-3 text-lg font-semibold shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all"
          >
            <RefreshCcw size={20} />
            Try Again
          </button>
          
          <Link href="/" className="w-full">
            <button className="flex items-center justify-center gap-2 w-full py-3 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              <Home size={20} />
              Go Back Home
            </button>
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-12 p-4 bg-red-50 rounded-lg text-left overflow-auto max-h-40">
            <p className="text-xs font-mono text-red-800 break-all">
              {error?.message || "Unknown error"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
