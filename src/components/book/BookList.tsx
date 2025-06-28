import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/interfaces/Book";

interface Props {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export default function BookList({ books, loading, error }: Props) {

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Đang tải sách...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 mt-10">Lỗi: {error}</p>;
  }
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Không có sách nào để hiển thị.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
