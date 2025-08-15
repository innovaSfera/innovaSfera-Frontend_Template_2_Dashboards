"use client";

import { ChevronUpIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function UserInfo2() {
  const [isOpen, setIsOpen] = useState(false);

  const USER = {
    name: "John Smith",
    email: "johnson@nextadmin.com",
    img: "/images/user/user-03.png",
  };

  return (
    <Link href="/profile">
      <figure className="flex items-center gap-3">
        <Image
          src={USER.img}
          className="size-12"
          alt={`Avatar of ${USER.name}`}
          role="presentation"
          width={200}
          height={200}
        />
        <figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6">
          <span>{USER.name}</span>

          <ChevronUpIcon
            aria-hidden
            className={cn(
              "hidden rotate-180 transition-transform xl:flex",
              isOpen && "rotate-0",
            )}
            strokeWidth={1.5}
          />
        </figcaption>
      </figure>
    </Link>
  );
}
