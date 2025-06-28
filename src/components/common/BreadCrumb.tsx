import React from "react";

export default function BreadCrumb({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm text-gray-500 mb-4">
      <span className="hover:underline cursor-pointer text-blue-600">
        Trang chủ
      </span>
      <span className="mx-2">&gt;</span>
      <span className="text-gray-800 font-medium">{children}</span>
    </div>
  );
}
