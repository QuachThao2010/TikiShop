import { createContext, useContext, useState } from "react";
import { Book } from "@/interfaces/Book";

type BuyNowItem = {
  book: Book;
  quantity: number;
};

type BuyNowContextType = {
  item: BuyNowItem | null;
  setItem: (item: BuyNowItem | null) => void;
};

const BuyNowContext = createContext<BuyNowContextType>({
  item: null,
  setItem: () => {},
});

export const BuyNowProvider = ({ children }: { children: React.ReactNode }) => {
  const [item, setItem] = useState<BuyNowItem | null>(null);
  return (
    <BuyNowContext.Provider value={{ item, setItem }}>
      {children}
    </BuyNowContext.Provider>
  );
};

export const useBuyNow = () => useContext(BuyNowContext);
