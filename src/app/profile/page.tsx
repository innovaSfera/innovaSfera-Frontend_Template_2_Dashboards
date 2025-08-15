"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { useState } from "react";
import { CameraIcon } from "./_components/icons";
import { SocialAccounts } from "./_components/social-accounts";

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

export default function Page() {
  const [data, setData] = useState({
    name: "Danish Heilium",
    profilePhoto: "/images/user/user-03.png",
    coverPhoto: "/images/cover/cover-01.png",
  });

  const handleChange = (e: any) => {
    if (e.target.name === "profilePhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        profilePhoto: file && URL.createObjectURL(file),
      });
    } else if (e.target.name === "coverPhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        coverPhoto: file && URL.createObjectURL(file),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[970px] pb-22">
        <Suspense fallback={<OverviewCardsSkeleton />}>
          <OverviewMenuGroup />
        </Suspense>

        <Breadcrumb pageName="Profile" />

        <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src={data?.coverPhoto}
              alt="profile cover"
              className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
              width={970}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-[15px] py-[5px] text-body-sm font-medium text-white hover:bg-opacity-90"
              >
                <input
                  type="file"
                  name="coverPhoto"
                  id="coverPhoto"
                  className="sr-only"
                  onChange={handleChange}
                  accept="image/png, image/jpg, image/jpeg"
                />

                <CameraIcon />

                <span>Edit</span>
              </label>
            </div>
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
              <div className="relative drop-shadow-2">
                {data?.profilePhoto && (
                  <>
                    <Image
                      src={data?.profilePhoto}
                      width={160}
                      height={160}
                      className="overflow-hidden rounded-full"
                      alt="profile"
                    />

                    <label
                      htmlFor="profilePhoto"
                      className="absolute bottom-0 right-0 flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                    >
                      <CameraIcon />

                      <input
                        type="file"
                        name="profilePhoto"
                        id="profilePhoto"
                        className="sr-only"
                        onChange={handleChange}
                        accept="image/png, image/jpg, image/jpeg"
                      />
                    </label>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1 text-heading-6 font-bold text-dark dark:text-white">
                {data?.name}
              </h3>
              <p className="font-medium">Ui/Ux Designer</p>
              <div className="mx-auto mb-5.5 mt-5 grid max-w-[370px] grid-cols-3 rounded-[5px] border border-stroke py-[9px] shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card">
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-dark-3 xsm:flex-row">
                  <span className="font-medium text-dark dark:text-white">
                    259
                  </span>
                  <span className="text-body-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-dark-3 xsm:flex-row">
                  <span className="font-medium text-dark dark:text-white">
                    129K
                  </span>
                  <span className="text-body-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                  <span className="font-medium text-dark dark:text-white">
                    2K
                  </span>
                  <span className="text-body-sm-sm">Following</span>
                </div>
              </div>

              <div className="mx-auto max-w-[720px]">
                <h4 className="font-medium text-dark dark:text-white">
                  About Me
                </h4>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque posuere fermentum urna, eu condimentum mauris
                  tempus ut. Donec fermentum blandit aliquet. Etiam dictum
                  dapibus ultricies. Sed vel aliquet libero. Nunc a augue
                  fermentum, pharetra ligula sed, aliquam lacus.
                </p>
              </div>

              <SocialAccounts />
            </div>
          </div>
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

          {/* Active Item */}
          <Link href="/profile" className="w-1/3">
            <div className="relative top-0 flex cursor-pointer flex-col items-center justify-center gap-1 border-t-4 border-primary bg-[rgba(87,80,241,0.07)] p-[16px] text-primary transition-all">
              <User className="size-6" />

              <p className="text-md font-medium text-primary">Profile</p>
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
