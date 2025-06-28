import { Book } from "@/interfaces/Book";

type BookContentProps = {
  book: Book;
};

export default function BookContent({ book }: BookContentProps) {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow border">
      <div className="flex justify-center mb-4">
        <img
          src={book.images[0].base_url}
          alt="ChatGPT thực chiến"
          className="rounded-lg w-48 h-auto"
        />
      </div>

      <div className="flex gap-2 justify-center mb-4">
        <img
          src={book.images[0].small_url}
          alt="Preview 1"
          className="w-12 h-auto border rounded hover:scale-105 transition-transform cursor-pointer"
        />
        <img
          src={book.images[0].small_url}
          alt="Preview 2"
          className="w-12 h-auto border rounded hover:scale-105 transition-transform cursor-pointer"
        />
      </div>

      <div className="border-t pt-2 text-sm text-blue-600 font-medium flex items-center gap-1 cursor-pointer hover:underline">
        <svg
          className="w-4 h-4 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        ></svg>
        Xem thêm Tóm tắt nội dung sách
      </div>
    </div>
  );
}
