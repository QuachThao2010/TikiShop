import React from "react";
import BookList from "../book/BookList";
import LeftSidebar from "../leftmenu/LeftSidebar";
import BookSlider from "./BookSlider";
import Discover from "./Discover";
import Filter from "./Filter";
import Related from "./Related";
import useBooks from "@/hooks/useBooks";
import { useSearch } from "@/context/SearchContext";
import { Book } from "@/interfaces/Book";
import BreadCrumb from "../common/BreadCrumb";
import BestSellingBooks from "./BestSellingBooks";

export default function HomeContent() {
  const [sortOption, setSortOption] = React.useState<string>("bestSeller");
  const { books, loading, error } = useBooks();
  const { searchItem } = useSearch();

  const sortRating = (a: Book, b: Book) => a.rating_average - b.rating_average;
  const bestSeller = (a: Book, b: Book) =>
    (Number(b.quantity_sold?.value) || 0) -
    (Number(a.quantity_sold?.value) || 0);

  const matchesSearch = (bookTitle: string) => {
    if (!searchItem) return true;
    return bookTitle.toLowerCase().includes(searchItem.toLowerCase());
  };

  const sortBooks = (books: Book[]) => {
    if (sortOption === "bestSeller") {
      return books.sort(sortRating);
    }
    if (sortOption === "topRating") {
      return books.sort(bestSeller);
    }
    return books;
  };

  const filteredBooks = sortBooks(
    books.filter((book) => matchesSearch(book.name))
  );

  const bestsellingBook = books.sort(sortRating).slice(0, 15);
  return (
    <div className="bg-gray-100 px-16 flex justify-center">
      <div className="my-4 px-8">
        <BreadCrumb>Nhà sách Tiki</BreadCrumb>
        <LeftSidebar />
      </div>
      <div className="max-w-6xlp-4 max-w-6xl mt-4 justify-center">
        <BookSlider />
        <Discover />
        <Filter sortOption={sortOption} onSortChange={setSortOption} />
        <BookList books={filteredBooks} loading={loading} error={error} />
        <Related />
        <BestSellingBooks books={bestsellingBook} />
      </div>
    </div>
  );
}
