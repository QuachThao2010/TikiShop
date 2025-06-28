import { Book } from "@/interfaces/Book";
import BookList from "@/components/book/BookList";
import BuyNow from "@/components/book/BuyNow";
import BookInfomation from "@/components/book/BookInfomation";
import BookContent from "@/components/book/BookContent";
import MainLayout from "@/layouts/mainLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllBooks, getBookById } from "@/servives/bookService";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";

interface Props {
  book: BookWithQuantity | null;
  relatedBooks: Book[];
  error?: string;
}
type Params = { id: string };

export default function BookDetails({ book, relatedBooks, error }: Props) {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!book) {
    return <p className="text-gray-600">Không tìm thấy sách.</p>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8 grid grid-cols-[300px,1fr,280px] gap-10">
      <div className="sticky top-4">
        <BookContent book={book} />
      </div>

      <div className="">
        <BookInfomation book={book} />

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Sản phẩm tương tự</h2>
          <BookList books={relatedBooks} loading={false} error={""} />
        </div>
      </div>

      <div className="sticky top-4">
        <BuyNow book={book} />
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const books = await getAllBooks();
  const paths = books.map((book: Book) => ({
    params: { id: book.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  try {
    const id = params!.id;

    const allBooks = await getAllBooks();
    const book = allBooks.find((b: Book) => b.id === id) ?? null;
    const relatedBooks = allBooks.filter((b: Book) => b.id !== id).slice(0, 12);

    if (!book) {
      return { notFound: true };
    }

    return {
      props: {
        book,
        relatedBooks,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        book: null,
        relatedBooks: [],
        error: "Lỗi khi tải dữ liệu sách.",
      },
    };
  }
};

BookDetails.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
);
