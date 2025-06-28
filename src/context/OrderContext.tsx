import { Book } from "@/interfaces/Book";
import { AnyARecord } from "dns";
import { createContext, useContext, useState } from "react";

type OrderContextType = {
  address: any;
  orderProducts: any[];
  setOrderProducts: (value: any) => void;
  setAddress: (value: any) => void;
  isBuyNow: boolean;
  setIsBuyNow: (value: boolean) => void;
};
const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState(null);
  const [orderProducts, setOrderProducts] = useState([]);
  const [isBuyNow, setIsBuyNow] = useState<boolean>(false);

  return (
    <OrderContext.Provider
      value={{
        address,
        setAddress,
        orderProducts,
        setOrderProducts,
        isBuyNow,
        setIsBuyNow,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
