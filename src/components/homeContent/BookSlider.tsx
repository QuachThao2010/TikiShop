import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sách Mới Siêu Hot",
      subtitle: "Tải trọ bởi Alpha Books Official",
      rating: "5/5 ⭐",
      image: "/assets/Item1.png.webp",
      books: [
        {
          id: 1,
          title: "Sách 1",
          discount: "-31%",
          image: "/assets/item1.1.jpg",
          color: "bg-blue-500",
        },
        {
          id: 2,
          title: "Sách 2",
          discount: "-27%",
          image: "/assets/item1.2.jpg",
          color: "bg-purple-500",
        },
        {
          id: 3,
          title: "Sách 3",
          discount: "-25%",
          image: "/assets/item1.3.jpg",
          color: "bg-red-500",
        },
      ],
    },
    {
      title: "Top Sách Bán Chạy",
      subtitle: "Tải trọ bởi 1980 Books Tại Tiki Trading",
      rating: "5/5 ⭐",
      image: "/assets/item2.jpg",
      books: [
        {
          id: 4,
          title: "Sách 4",
          discount: "-31%",
          image: "/assets/item2.1.jpg",
          color: "bg-green-500",
        },
        {
          id: 5,
          title: "Sách 5",
          discount: "-38%",
          image: "/assets/item2.2.jpg",
          color: "bg-yellow-500",
        },
        {
          id: 6,
          title: "Sách 6",
          discount: "-30%",
          image: "/assets/item2.3.png",
          color: "bg-indigo-500",
        },
      ],
    },
    {
      title: "Sách Mới Siêu Hot ",
      subtitle: "Tải trọ bởi Alpha Books Official",
      rating: "5/5 ⭐",
      image: "/assets/item3.jpg",
      books: [
        {
          id: 1,
          title: "Sách 1",
          discount: "-31%",
          image: "/assets/item3.1.jpg",
          color: "bg-blue-500",
        },
        {
          id: 2,
          title: "Sách 2",
          discount: "-27%",
          image: "/assets/item3.2.jpg",
          color: "bg-purple-500",
        },
        {
          id: 3,
          title: "Sách 3",
          discount: "-25%",
          image: "/assets/item3.3.jpg",
          color: "bg-red-500",
        },
      ],
    },
    {
      title: "Sách Văn Học Hay Nhất",
      subtitle: "Tải trọ bởi Nhà Xuất Bản Trẻ",
      rating: "4.8/5 ⭐",
      image: "/assets/item4.jpg",
      books: [
        {
          id: 7,
          title: "Sách 7",
          discount: "-40%",
          image: "/assets/item4.1.jpg",
          color: "bg-pink-500",
        },
        {
          id: 8,
          title: "Sách 8",
          discount: "-35%",
          image: "/assets/item4.2.jpg",
          color: "bg-teal-500",
        },
        {
          id: 9,
          title: "Sách 9",
          discount: "-28%",
          image: "/assets/item4.3.jpg",
          color: "bg-orange-500",
        },
      ],
    },
    {
      title: "Sách Mới Siêu Hot",
      subtitle: "Tải trọ bởi Alpha Books Official",
      rating: "5/5 ⭐",
      image: "/assets/item5.jpg",
      books: [
        {
          id: 1,
          title: "Sách 1",
          discount: "-31%",
          image: "/assets/item5.1.png",
          color: "bg-blue-500",
        },
        {
          id: 2,
          title: "Sách 2",
          discount: "-27%",
          image: "/assets/item5.2.png",
          color: "bg-purple-500",
        },
        {
          id: 3,
          title: "Sách 3",
          discount: "-25%",
          image: "/assets/item5.3.png",
          color: "bg-red-500",
        },
      ],
    },
    {
      title: "Sách Mới Siêu Hot",
      subtitle: "Tải trọ bởi Alpha Books Official",
      rating: "5/5 ⭐",
      image: "/assets/item6.png",
      books: [
        {
          id: 1,
          title: "Sách 1",
          discount: "-31%",
          image: "/assets/item6.1.jpg",
          color: "bg-blue-500",
        },
        {
          id: 2,
          title: "Sách 2",
          discount: "-27%",
          image: "/assets/item6.2.jpg",
          color: "bg-purple-500",
        },
        {
          id: 3,
          title: "Sách 3",
          discount: "-25%",
          image: "/assets/item6.3.jpg",
          color: "bg-red-500",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="bg-white py-8 rounded-lg mb-4 pl-3 text-3xl font-bold">
        Nhà sách Tiki
      </div>
      <div className="relative rounded-lg shadow-lg overflow-hidden h-[200px] ">
        <div
          className="flex transition-transform duration-500 ease-in-out pr-4"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex h-[200px] items-center pr-6 w-1/2"
            >
              <div
                key={index}
                className="relative w-[220px] h-[200px] rounded-lg flex items-center justify-center overflow-hidden"
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundColor: "rgb(56, 117, 70)",
                    filter: "blur(30px)",
                    transform: "scale(1.2)",
                  }}
                ></div>

                <div className="relative z-10">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-[120px] h-[200px] object-contain"
                  />
                </div>
              </div>
              <div className="w-1/2 p-8 bg-gray-50 flex-1">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mb-1 text-sm">{slide.subtitle}</p>
                <p className="text-yellow-500 font-semibold text-sm">
                  {slide.rating}
                </p>

                {/* Book Grid */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {slide.books.map((book) => (
                    <div
                      key={book.id}
                      className="relative group cursor-pointer"
                    >
                      <img
                        src={book.image}
                        alt="not found"
                        className="rounded-lg p-2 h-20 flex items-center justify-center transform transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-1 right-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs font-bold">
                        {book.discount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[0, 2].map((slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                slideIndex === currentSlide 
                  ? 'bg-green-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-100 ease-linear"
          style={{
            width: `${currentSlide === 0 ? 50 : 100}%`,
          }}
        />
      </div>
    </>
  );
}
