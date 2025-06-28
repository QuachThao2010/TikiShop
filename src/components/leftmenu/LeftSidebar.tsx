import { useState } from "react";

const categories = [
  {
    title: "English Books",
    subcategories: [
      "Art & Photography",
      "Biographies & Memoirs",
      "Business & Economics",
      "How-to - Self Help",
      "Children's Books",
      "Dictionary",
      "Education - Teaching",
      "Fiction - Literature",
      "Magazines",
      "Medical Books",
      "Parenting & Relationships",
      "Reference",
      "Science - Technology",
      "History, Politics & Social Sciences",
      "Travel & Holiday",
      "Cookbooks, Food & Wine",
    ],
  },
  { title: "Sách tiếng Việt", subcategories: [] },
  { title: "Văn phòng phẩm", subcategories: [] },
  { title: "Quà lưu niệm", subcategories: [] },
];

export default function LeftMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-6 w-2/3">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="p-4 font-semibold text-gray-700 border-b border-gray-200">
          Khám phá theo danh mục
        </h2>
        <div className="divide-y divide-gray-200">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                aria-expanded={openIndex === idx}
                aria-controls={`sect-${idx}`}
              >
                <span>{cat.title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {cat.subcategories.length > 0 && openIndex === idx && (
                <ul
                  id={`sect-${idx}`}
                  className="bg-white border-t border-gray-100 overflow-y-auto"
                >
                  {cat.subcategories.map((sub, i) => (
                    <li
                      key={i}
                      className="p-3 pl-8 text-gray-600 hover:bg-gray-50 cursor-pointer text-sm"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
