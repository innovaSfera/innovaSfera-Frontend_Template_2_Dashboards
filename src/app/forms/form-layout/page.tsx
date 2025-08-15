import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { ContactForm } from "./_components/contact-form";
import { SignInForm } from "./_components/sign-in-form";
import { SignUpForm } from "./_components/sign-up-form";

import {
  Calendar,
  HomeIcon,
  User,
  PieChart,
} from "@/components/Layouts/sidebar/icons";
import Link from "next/link";

import { Suspense } from "react";
import { OverviewMenuGroup } from "../../(home)/_components/overview-cards/index-menu";
import { OverviewCardsSkeleton } from "../../(home)/_components/overview-cards/skeleton";

export const metadata: Metadata = {
  title: "Form Layout",
};

export default function Page() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-9">
          <SignInForm />

          <SignUpForm />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-between bg-[#f9f9f9] xl:hidden">
        <div className="flex w-full items-start justify-between">
          {/* Item */}
          <Link href="/calendar" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-[#f9f9f9] p-[16px] text-[#000] transition-all hover:top-0 hover:border-t-4 hover:text-primary">
              <Calendar className="size-6" />

              <p className="text-md font-medium">Calendar</p>
            </div>
          </Link>

          {/* Item */}
          <Link href="/" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-[#f9f9f9] p-[16px] text-[#000] transition-all hover:top-0 hover:border-t-4 hover:text-primary">
              <HomeIcon className="size-6" />

              <p className="text-md font-medium">Dashboard</p>
            </div>
          </Link>

          {/* Item */}
          <Link href="/profile" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-[#f9f9f9] p-[16px] text-[#000] transition-all hover:top-0 hover:border-t-4 hover:text-primary">
              <User className="size-6" />

              <p className="text-md font-medium">Profile</p>
            </div>
          </Link>

          {/* Item */}
          <Link href="/charts/basic-chart" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-[#f9f9f9] p-[16px] text-[#000] transition-all hover:top-0 hover:border-t-4 hover:text-primary">
              <PieChart className="size-6" />

              <p className="text-md font-medium">Charts</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
