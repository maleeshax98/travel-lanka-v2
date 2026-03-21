// components/ModernHeroGrid.tsx
import React from "react";

const ModernHeroGrid = () => {
  return (
    <div className="relative isolate bg-slate-50 min-h-[90vh] flex items-center">
      {/* Background Gradient Decorative Element */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Title/CTA Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white p-10 rounded-3xl border border-slate-100 shadow-lg flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Modern <span className="text-blue-600">Intro Grid</span> for
              Your Hero.
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Use complex, responsive CSS grid layouts to create a lasting first
              impression. Optimized for performance and readability.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition">
                Get Started
              </button>
              <button className="text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
                Learn More &rarr;
              </button>
            </div>
          </div>

          {/* Feature 1 - Wide */}
          <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-between group">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-400">
                Design System
              </span>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                🎨
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-4">
              Responsive Tailwind CSS Utilities
            </h3>
            <p className="mt-2 text-slate-400 text-sm">
              Adaptive layouts built mobile-first.
            </p>
          </div>

          {/* Feature 2 - Square */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between transition hover:shadow-lg">
            <div className="text-3xl">⚡</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">App Router</h4>
              <p className="text-sm text-slate-600 mt-1">
                Server-side performance optimized.
              </p>
            </div>
          </div>

          {/* Feature 3 - Square */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between transition hover:shadow-lg">
            <div className="text-3xl">🔒</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Type Safe</h4>
              <p className="text-sm text-slate-600 mt-1">
                Full TypeScript integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHeroGrid;
