import { useEffect, useState } from "react";
import { Book } from "@/interfaces/Book";

export function useBookDetail(id?: string | string[]) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch(() => setError("fetch book failed"))
      .finally(() => setLoading(false));
  }, [id]);

  return { book, loading, error };
}
