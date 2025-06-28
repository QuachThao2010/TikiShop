import Footer from "@/components/footer/Footer";
import HeaderClient from "@/components/header";
import { SearchProvider } from "@/context/SearchContext";
import React from "react";


type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <SearchProvider>
      <HeaderClient/>
        <main>
            {children}
        </main>
        <Footer />
    </SearchProvider>
  );
}