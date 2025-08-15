import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";
import { Metadata } from "next";
import {
  Calendar,
  HomeIcon,
  User,
  PieChart,
} from "@/components/Layouts/sidebar/icons";
import Link from "next/link";

import { Suspense } from "react";
import { OverviewMenuGroup } from "../(home)/_components/overview-cards/index-menu";
import { OverviewCardsSkeleton } from "../(home)/_components/overview-cards/skeleton";

export const metadata: Metadata = {
  title: "Calender Page",
  // other metadata
};

const CalendarPage = () => {
  return (
    <div className="pb-22">
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <Breadcrumb pageName="Calendar" />

      <CalendarBox />

      <div className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-between bg-[#f9f9f9] xl:hidden">
        <div className="flex w-full items-start justify-between">
          {/* Active Item */}
          <Link href="/calendar" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-primary bg-[rgba(87,80,241,0.07)] p-[16px] text-primary transition-all">
              <Calendar className="size-6" />

              <p className="text-md font-medium text-primary">Calendar</p>
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
    </div>
  );
};

export default CalendarPage;
