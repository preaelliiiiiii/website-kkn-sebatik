"use client";
import * as React from "react";
import Image from "next/image"; // ⬅️ Import Image

interface LogoSectionProps {
  title: string;
}

function LogoSection({ title }: LogoSectionProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Ganti logo kotak dengan gambar logo.svg */}
      <div className="relative w-[3.5rem] h-[3.5rem] sm:w-[4.5rem] sm:h-[4.5rem]">
        <Image
          src="/landingpage/logo.svg"
          alt="Logo Sebatik Barat"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
        {title}
      </h1>
    </div>
  );
}

interface NavigationMenuProps {
  items: string[];
}

function NavigationMenu({ items }: NavigationMenuProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-white">
      {items.map((item, index) => (
        <li key={index} className="cursor-pointer hover:underline whitespace-nowrap">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const navigationItems = [
    "Profil",
    "Sarana Prasana",
    "Kewilayahan",
    "UMKM",
    "SDA",
    "Budaya"
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-screen bg-neutral-500/20 border-b border-white/50 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-20 py-4 max-w-full">
        <LogoSection title="Sebatik Barat" />
        <NavigationMenu items={navigationItems} />
      </div>
    </nav>
  );
}

export default Navbar;
