import React from "react";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

export default function CancelOrderModal({ onClose, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Xác nhận hủy đơn hàng
        </h2>
        <p className="text-gray-700 mb-6">
          Bạn có chắc chắn muốn hủy đơn hàng này không?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            Đóng
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Hủy đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
}
