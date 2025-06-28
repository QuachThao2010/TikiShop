import React from "react";
import { UserCircle, Bell, FileText } from "lucide-react";
import BreadCrumb from "../common/BreadCrumb";

export default function AccountSidebar() {
  return (
    <div className="w-full md:w-64  p-4 text-sm">
      <BreadCrumb>Đơn hàng của tôi</BreadCrumb>
      <div className="flex items-center gap-3 mb-6">
        <UserCircle className="w-10 h-10 text-gray-400" />
        <div>
          <p className="font-semibold text-gray-800">Quách Phương Thảo</p>
          <p className="text-gray-500 text-xs">Tài khoản của tôi</p>
        </div>
      </div>

      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
          <UserCircle className="w-4 h-4" />
          Thông tin tài khoản
        </li>
        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
          <Bell className="w-4 h-4" />
          Thông báo của tôi
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer font-medium text-black">
          <FileText className="w-4 h-4" />
          Quản lý đơn hàng
        </li>
      </ul>
    </div>
  );
}
