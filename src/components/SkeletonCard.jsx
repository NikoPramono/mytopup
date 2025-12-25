// src/components/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-6" />
      <div className="flex gap-4 mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded mb-3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
      <div className="h-40 bg-gray-200 rounded" />
    </div>
  );
}
