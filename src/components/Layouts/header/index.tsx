"use client";

import { SearchIcon } from "@/assets/icons";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { Notification } from "./notification";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo2 } from "./user-info2";

export function Header() {
  const { toggleSidebar, isMobile } = useSidebarContext();

  return (
    <header className="top-0 z-30 flex items-center justify-between xl:border-b border-none xl:border-stroke bg-transparent px-4 py-5 xl:shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 xl:sticky xl:bg-white 2xl:px-10">
      <button
        onClick={toggleSidebar}
        className="hidden rounded-lg border px-1.5 py-1 dark:border-stroke-dark dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A]"
      >
        <MenuIcon />
        <span className="sr-only">Toggle Sidebar</span>
      </button>

      <div className="max-xl:hidden">
        <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
          Dashboard
        </h1>
        <p className="font-medium">Next.js Admin Dashboard Solution</p>
      </div>

      <div className="flex flex-1 flex-row-reverse items-center justify-between gap-2 min-[375px]:gap-4 xl:flex-row xl:justify-end">
        <div className="relative hidden w-full max-w-[300px] xl:flex">
          <input
            type="search"
            placeholder="Search"
            className="flex w-full items-center gap-3.5 rounded-full border bg-gray-2 py-3 pl-[53px] pr-5 outline-none transition-colors focus-visible:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-dark-4 dark:hover:bg-dark-3 dark:hover:text-dark-6 dark:focus-visible:border-primary"
          />

          <SearchIcon className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 max-[1015px]:size-5" />
        </div>

        <ThemeToggleSwitch />

        <Notification />

        <div className="shrink-0">
          <UserInfo2 />
        </div>
      </div>
    </header>
  );
}
