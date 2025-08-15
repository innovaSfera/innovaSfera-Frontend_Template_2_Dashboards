import { PaymentsOverview } from "@/components/Charts/payments-overview";
import { UsedDevices } from "@/components/Charts/used-devices";
import { WeeksProfit } from "@/components/Charts/weeks-profit";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { ChatsCard } from "./_components/chats-card";
import { OverviewMenuGroup } from "./_components/overview-cards/index-menu";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";
import {
  Calendar,
  HomeIcon,
  User,
  PieChart,
} from "@/components/Layouts/sidebar/icons";
import Link from "next/link";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <div className="pb-22">
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <PaymentsOverview
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        />

        <WeeksProfit
          key={extractTimeFrame("weeks_profit")}
          timeFrame={extractTimeFrame("weeks_profit")?.split(":")[1]}
          className="col-span-12 xl:col-span-5"
        />

        <UsedDevices
          className="col-span-12 xl:col-span-5"
          key={extractTimeFrame("used_devices")}
          timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
        />

        <RegionLabels />

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<TopChannelsSkeleton />}>
            <TopChannels />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <ChatsCard />
        </Suspense>
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

          {/* Active Item */}
          <Link href="/" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-primary bg-[rgba(87,80,241,0.07)] p-[16px] text-primary transition-all">
              <HomeIcon className="size-6" />

              <p className="text-md font-medium text-primary">Dashboard</p>
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
}
