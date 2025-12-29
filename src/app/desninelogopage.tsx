"use client";

import Image from "next/image";

export default function DesnineImage() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/images/Desnine Studio.svg" // change path
        alt="Desnine Studio"
      />
    </div>
  );
}
