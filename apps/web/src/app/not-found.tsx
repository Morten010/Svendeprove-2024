import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="px-4">
      <h1 className="sr-only">Side ikke fundet</h1>
      <p className="font-semibold text-center pt-10 text-2xl">
        Du hører ikke til her!
      </p>
      <div className="relative h-[50vh] mx-auto max-w-[800px]">
        <Image fill src="/404.svg" alt="Page not found image" />
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="px-4 py-2 bg-[#D8EADB] text-[#666666] rounded-full hover:bg-[#6DA830]/60 font-medium transition-colors"
        >
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
}
