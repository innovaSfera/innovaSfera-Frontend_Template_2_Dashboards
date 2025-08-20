"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  HomeIcon,
  User,
  PieChart,
} from "@/components/Layouts/sidebar/icons";

export default function BottomMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/", label: "Dashboard", icon: HomeIcon },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/charts/basic-chart", label: "Charts", icon: PieChart },
  ];

  return (
    <div className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-between bg-[#f9f9f9] xl:hidden">
      <div className="flex w-full items-start justify-between">
        {/* Botão central */}
        <div className="absolute -top-7 left-1/2 z-50 -translate-x-1/2">
          <Link
            href="/"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-yellow-400"></div>
          </Link>
        </div>

        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link href={href} key={href} className="w-1/3">
              <div
                className={`relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 p-[16px] transition-all
                  ${
                    isActive
                      ? "border-primary bg-[rgba(87,80,241,0.07)] text-primary"
                      : "border-[#f9f9f9] text-[#000] hover:text-primary hover:border-primary"
                  }
                `}
              >
                <Icon className="size-6" />
                <p className="text-md font-medium">{label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
