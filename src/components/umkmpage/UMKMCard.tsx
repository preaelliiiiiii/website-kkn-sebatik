"use client";
import { useState } from "react";

interface UMKMCardProps {
  nama?: string;
  content?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const UMKMCard = ({
  nama = "UMKM",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  onClick,
}: UMKMCardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className={`grid grid-cols-2 w-[82.5vw] transition-all duration-300 p-[1.5vw] rounded-[1.563vw] border-[0.208vw] drop-shadow-[4px_8px_8px_rgba(0,0,0,0.25)] ${
        isCardHovered
          ? "bg-primary-100 text-white cursor-pointer"
          : "bg-white text-primary-100"
      } border-primary-100`}
    >
      <div className="flex flex-col gap-[0.416vw] p-[0.833vw] text-left ">
        <h1 className="font-montserrat font-bold text-[2.5vw]">{nama}</h1>
        <div className="font-montserrat text-[1.25vw]">{content}</div>
        <button
          onClick={onClick}
          className={`mt-2 border border-white px-4 py-2 text-sm font-semibold rounded-md w-fit hover:cursor-pointer ${
            isCardHovered
              ? "bg-white text-primary-100 hover:bg-gray-200"
              : "bg-primary-100 text-white hover:bg-primary-200"
          } transition`}
        >
          View More
        </button>
      </div>
      {/* Placeholder Image 2 */}
      <div className="flex justify-end items-center">
        <div className="w-[25vw] aspect-square bg-[#D9D9D9] border-black border-2 rounded-[1.563vw]"></div>
      </div>
    </div>
  );
};

export default UMKMCard;
