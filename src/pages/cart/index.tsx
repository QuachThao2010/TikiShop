import BookList from "@/components/book/BookList";
import Cart from "@/components/cart/Cart";
import CheckoutSummary from "@/components/cart/CheckoutSumary";
import Voucher from "@/components/checkout/Voucher";
import { useOrder } from "@/context/OrderContext";
import { Book } from "@/interfaces/Book";
import MainLayout from "@/layouts/mainLayout";
import OrderLayout from "@/layouts/orderLayout";
import { getAllBooks } from "@/servives/bookService";
import { GetStaticProps } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {
  relatedBooks: Book[];
  error?: string;
};

export default function ShoppingCart({ relatedBooks, error }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { setIsBuyNow } = useOrder();

  const handleBuy = async () => {
    if (!session) {
      signIn(undefined, { callbackUrl: "/checkout" });
    } else {
      setIsBuyNow(false);
      router.push("/checkout");
    }
  };
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <>
      <div className="flex justify-center bg-gray-50">
        <div className="mb-4">
          <Cart />
          <div className="max-w-5xl  p-6 shadow-sm rounded-lg bg-white">
            <h2 className="text-xl font-bold">Sản phẩm mua kèm</h2>
            <BookList books={relatedBooks} loading={false} error={""} />
          </div>
        </div>

        <div className="ml-16 my-4">
          <Voucher />
          <CheckoutSummary onBuyClick={handleBuy} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    const allBooks = await getAllBooks();
    const relatedBooks = allBooks.slice(0, 8);

    return {
      props: {
        relatedBooks,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        relatedBooks: [],
        error: "Lỗi khi tải dữ liệu sách.",
      },
    };
  }
};

ShoppingCart.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
);
