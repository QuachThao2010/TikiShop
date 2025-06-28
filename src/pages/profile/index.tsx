import CancelOrderModal from "@/components/CancelOrderModal";
import AccountSidebar from "@/components/profile/AccountSidebar";
import OrderHistory from "@/components/profile/OrderHistory";
import MainLayout from "@/layouts/mainLayout";
import React, { useEffect, useState } from "react";

export default function MyProfile() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isConfirmDeleteOrder, setIsConfirmDeleteOrder] = useState(false);

  const handleCancelOrder = async () => {
    try {
      setIsConfirmDeleteOrder(true);
      setShowCancelModal(false);
    } catch (err) {
      console.error("Error during delete order:", err);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex text-gray-700 font-sans px-24">
        <aside className="w-64 p-6 flex flex-col">
          <AccountSidebar />
        </aside>
        <OrderHistory
          setShowCancelModal={setShowCancelModal}
          isConfirmDeleteOrder={isConfirmDeleteOrder}
          setIsConfirmDeleteOrder={setIsConfirmDeleteOrder}
        />
      </div>
      {showCancelModal && (
        <CancelOrderModal
          onClose={() => setShowCancelModal(false)}
          onConfirm={handleCancelOrder}
        />
      )}
    </>
  );
}

MyProfile.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
);
