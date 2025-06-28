import Address from "@/components/checkout/Address";
import Delivery from "@/components/checkout/DeliveryMethod";
import Discount from "@/components/checkout/Discount";
import OrderDetails from "@/components/checkout/OrderPaymentDetails";
import Payment from "@/components/checkout/Payment";
import Voucher from "@/components/checkout/Voucher";
import { GetServerSidePropsContext, NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import MainLayout from "@/layouts/mainLayout";
import { useOrder } from "@/context/OrderContext";
import { getAccessToken } from "@/servives/authService";
import ListOrderCard from "@/components/checkout/ListOrderCard";

export default function Checkout() {
  const { address } = useOrder();
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-3/5">
        <div className="bg-white p-6 rounded-xl shadow-md max-w-screen-xl my-4">
          <Delivery />
          <ListOrderCard />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-screen-xl my-4">
          <Payment />
          <Discount />
        </div>
      </div>
      <div className="ml-16 my-4">
        {address && <Address />}
        <Voucher />
        <OrderDetails />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = await getAccessToken(context.req as NextApiRequest);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
}

Checkout.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
