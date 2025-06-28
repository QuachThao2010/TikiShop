import ShippingAddressForm from "@/components/address";
import MainLayout from "@/layouts/mainLayout";
import { GetServerSidePropsContext } from "next";
import { getToken } from "next-auth/jwt";

export default function ShippingAddress() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <ShippingAddressForm />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = await getToken({
    req: context.req,
    secret: "KJv9zEtO7W2OmlrHDcUJcLZL3If+UG3bVaSeJJzAMXM=",
  });

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

ShippingAddress.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
);
