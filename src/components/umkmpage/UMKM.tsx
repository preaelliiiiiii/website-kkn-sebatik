"use client";
import { useState } from "react";
import UMKMCard from "./UMKMCard";

const dummyUMKM = [
  {
    name: "Kopi Nusantara",
    description: "UMKM kopi dari biji lokal pilihan.",
    imageUrl: "/images/umkm1.jpg",
  },
  {
    name: "Kerajinan Anyaman",
    description: "Produk handmade ramah lingkungan.",
    imageUrl: "/images/umkm2.jpg",
  },
  {
    name: "Sambal Bu Sari",
    description: "Rasa pedas khas daerah.",
    imageUrl: "/images/umkm3.jpg",
  },
  {
    name: "Batik Tulis Citra",
    description: "Batik tulis asli dengan motif klasik.",
    imageUrl: "/images/umkm4.jpg",
  },
  {
    name: "Kue Kering Madu",
    description: "Kue sehat tanpa gula buatan.",
    imageUrl: "/images/umkm5.jpg",
  },
  {
    name: "Teh Daun Jati",
    description: "Teh herbal menyehatkan.",
    imageUrl: "/images/umkm6.jpg",
  },
  {
    name: "Tas Daur Ulang",
    description: "Tas modis dari bahan bekas.",
    imageUrl: "/images/umkm7.jpg",
  },
  {
    name: "Minyak Kelapa Alami",
    description: "Minyak dari kelapa asli.",
    imageUrl: "/images/umkm8.jpg",
  },
];

const ITEMS_PER_PAGE = 4;

export default function UMKM() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyUMKM.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUMKM = dummyUMKM.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="relative w-full flex flex-col justify-center container">
      <h1 className="font-hanken-grotesk text-primary-100 font-bold text-[3.906vw] flex px-[2.5vw] justify-items-center">
        UMKM
      </h1>
      <div className="grid grid-rows-4 gap-x-[1.25vw] gap-y-[2.5vw] justify-items-center">
        {currentUMKM.map((umkm, index) => (
          <UMKMCard key={index} {...umkm} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Sebelumnya
        </button>

        <span className="px-4 py-2 text-gray-700">
          {currentPage} dari {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
