import Footer from "@/components/footer/Footer";
import FooterOrder from "@/components/footer/FooterOrder";
import HeaderClient from "@/components/header";
import Logo from "@/components/header/Logo";
import PromoBanner from "@/components/header/PromoBanner";
import { SearchProvider } from "@/context/SearchContext";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function OrderLayout({ children }: Props) {
  return (
    <div className=" font-sans text-sm text-gray-700">
      <div className="min-h-screen flex flex-col justify-between">
        <PromoBanner />
        <div className=" flex items-center py-1 px-16">
          <Logo />
        </div>
        <main>{children}</main>
        <FooterOrder />
      </div>
    </div>
  );
}
