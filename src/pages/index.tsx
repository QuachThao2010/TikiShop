import ECommerce from "@/components/admin/Dashboard/E-commerce";
import Header from "@/components/header/HeaderHome";
import { Geist, Geist_Mono } from "next/font/google";
import HomeTiki from "./home";
import MainLayout from "@/layouts/mainLayout";
import Confirm from "@/components/confirm";
import LoginForm from "@/components/login/LoginForm";
import Checkout from "./checkout";
import Cart from "@/components/cart/Cart";
import HomeContent from "@/components/homeContent";

type Props = {
  children: React.ReactNode;
};

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
