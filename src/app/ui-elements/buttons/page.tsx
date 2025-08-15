import { MessageOutlineIcon } from "@/assets/icons";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Button } from "@/components/ui-elements/button";
import { Metadata } from "next";
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
  title: "Buttons",
};

export default function Page() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <Breadcrumb pageName="Buttons" />

      <div className="space-y-10">
        <ShowcaseSection title="Normal Button">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <Button label="Button" variant="primary" />
            <Button label="Button" variant="primary" shape="rounded" />
            <Button label="Button" variant="primary" shape="full" />
            <Button label="Button" variant="outlinePrimary" shape="rounded" />
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <Button label="Button" variant="green" />
            <Button label="Button" variant="green" shape="rounded" />
            <Button label="Button" variant="green" shape="full" />
            <Button label="Button" variant="outlineGreen" shape="rounded" />
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-20">
            <Button label="Button" variant="dark" />
            <Button label="Button" variant="dark" shape="rounded" />
            <Button label="Button" variant="dark" shape="full" />
            <Button label="Button" variant="outlineDark" shape="rounded" />
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="Button With Icon">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              label="Button With Icon"
              variant="primary"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="green"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="dark"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="outlinePrimary"
              size="small"
              icon={<MessageOutlineIcon />}
            />
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              label="Button With Icon"
              variant="primary"
              shape="rounded"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="green"
              shape="rounded"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="dark"
              shape="rounded"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="outlinePrimary"
              shape="rounded"
              size="small"
              icon={<MessageOutlineIcon />}
            />
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              label="Button With Icon"
              variant="primary"
              shape="full"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="green"
              shape="full"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="dark"
              shape="full"
              size="small"
              icon={<MessageOutlineIcon />}
            />
            <Button
              label="Button With Icon"
              variant="outlinePrimary"
              shape="full"
              size="small"
              icon={<MessageOutlineIcon />}
            />
          </div>
        </ShowcaseSection>
      </div>

      <div className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-between bg-[#f9f9f9] xl:hidden">
        <div className="flex w-full items-start justify-between">
          {/* Botão central */}
          <div className="absolute -top-7 left-1/2 z-9999 -translate-x-1/2">
            <Link
              href="/"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-yellow-400"></div>
            </Link>
          </div>
          
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
