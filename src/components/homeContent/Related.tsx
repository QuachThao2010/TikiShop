export default function Related() {
  return (
    <>
      <div className="bg-white mt-4 rounded-lg px-4 py-2">
        <h1 className="text-xl font-bold">Tìm kiếm liên quan</h1>
        <div className="flex gap-3 mt-4">
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            Sách Tiki
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            Sách Hay
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            Sách giáo khoa
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            Truyện tranh
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            Sách kinh doanh
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            light novel
          </button>
          <button type="button" className="rounded-3xl bg-gray-100 px-4 py-2">
            sách văn học
          </button>
        </div>
      </div>
    </>
  );
}
