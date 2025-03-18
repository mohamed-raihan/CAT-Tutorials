"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import Next.js router
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modal from "../ModalForm";
import { useModal } from "@/app/modalContext/ModalContext";

export default function Header() {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down - Hide Header
        setIsVisible(false);
      } else {
        // Scrolling Up - Show Header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-[95%]  mx-auto text-center 
      bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl z-50 
      transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <div className="flex gap-3 items-center">
            <Link href={"/"}>
              <Image
                src="/cat-tutorial-logo.png"
                alt="Prep Academy Logo"
                width={70}
                height={50}
                className=""
              />
            </Link>
            <div className="text-teal-700 font-normal text-1xl">
              <HiOutlineDotsVertical className="m-0" />
              <HiOutlineDotsVertical className="-my-0.5" />
              <HiOutlineDotsVertical className="" />
              <HiOutlineDotsVertical className="-my-0.5" />
            </div>
            <Image
              src="/prep-logo.png"
              alt="Prep Academy Logo"
              width={100}
              height={70}
              className=""
            />
          </div>

          {/* Desktop Navigation */}
          <button
            onClick={openModal}
            className="bg-[#F55D3E] text-white p-2 rounded-lg"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
