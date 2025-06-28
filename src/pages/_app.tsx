import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AddToCartProvider } from "@/context/AddToCartContext";
import { SessionProvider } from "next-auth/react";
import { OrderProvider } from "@/context/OrderContext";
import { BuyNowProvider } from "@/context/BuyNowContext";

type NextPageWithLayout = AppProps["Component"] & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const PageComponent = Component as NextPageWithLayout;
  const getLayout = PageComponent.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <AddToCartProvider>
        <OrderProvider>
          <BuyNowProvider>
            {getLayout(<Component {...pageProps} />)}
          </BuyNowProvider>
        </OrderProvider>
      </AddToCartProvider>
    </SessionProvider>
  );
}
