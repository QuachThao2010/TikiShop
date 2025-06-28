export async function getAllBooks() {
  const res = await fetch("http://localhost:3000/books");
  if (!res.ok) throw new Error("Failed to fetch books");
  return await res.json();
}
export async function getBookById(id: string) {
  const res = await fetch(`http://localhost:3000/books/${id}`);
  if (!res.ok) throw new Error("Failed to fetch book");
  return await res.json();
}