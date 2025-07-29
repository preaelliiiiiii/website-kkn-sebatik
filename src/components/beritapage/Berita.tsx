"use client";
// import Image from "next/image";
import { useState } from "react";
import BeritaCard from "./BeritaCard";

const beritaList = Array.from({ length: 20 }, (_, i) => ({
  judul: `Judul ${i + 1}`,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
}));

const Berita = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = beritaList.slice(startIdx, startIdx + itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="relative w-full flex flex-col justify-center container">
      <h1 className="font-hanken-grotesk text-primary-100 font-bold text-[3.906vw] flex px-[2.5vw] justify-items-center">
        Berita
      </h1>
      <div className="grid grid-cols-4 gap-x-[1.25vw] gap-y-[2.5vw] justify-items-center">
        {currentData.map((berita, index) => (
          <BeritaCard
            key={index}
            judul={berita.judul}
            content={berita.content}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-green-700 font-medium hover:underline flex items-center space-x-1 disabled:opacity-40"
        >
          <span>← Previous</span>
        </button>

        {/* Numbered Pages */}
        <div className="flex space-x-2">
          {renderPageNumbers().map((page, idx) =>
            typeof page === "number" ? (
              <button
                key={idx}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-md text-green-700 font-semibold ${
                  page === currentPage ? "bg-gray-300" : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ) : (
              <span
                key={idx}
                className="w-8 h-8 flex items-center justify-center text-gray-500"
              >
                ...
              </span>
            )
          )}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-green-700 font-medium hover:underline flex items-center space-x-1 disabled:opacity-40"
        >
          <span>Next →</span>
        </button>
      </div>
    </div>
  );
};

export default Berita;
