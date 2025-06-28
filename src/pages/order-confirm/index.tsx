import Confirm from "@/components/confirm";
import OrderLayout from "@/layouts/orderLayout";

export default function OrderConfirm() {
  return <Confirm />;
}

OrderConfirm.getLayout = (page: React.ReactNode) => (
  <OrderLayout>{page}</OrderLayout>
);
