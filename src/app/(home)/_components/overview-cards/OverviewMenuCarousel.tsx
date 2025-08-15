"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OverviewCard2 } from "./card2";
import {
  Alphabet,
  Table,
  FourCircle,
  Authentication,
} from "@/components/Layouts/sidebar/icons";
import Link from "next/link";

export function OverviewMenuCarousel() {
  return (
    <>
      <div className="mb-4 block xl:hidden">
        <Swiper spaceBetween={16} slidesPerView={3.15} grabCursor={true}>
          <SwiperSlide key="form">
            <Link href="/forms/form-elements">
              <OverviewCard2 label="Form" data="Form" Icon={Alphabet} />
            </Link>
          </SwiperSlide>

          <SwiperSlide key="table">
            <Link href="/tables">
              <OverviewCard2 label="Table" data="Table" Icon={Table} />
            </Link>
          </SwiperSlide>

          <SwiperSlide key="authentication">
            <Link href="/auth/sign-in">
              <OverviewCard2
                label="Authentication"
                data="Authentication"
                Icon={Authentication}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide key="elements">
            <Link href="/ui-elements/alerts">
              <OverviewCard2
                label="Elements"
                data="Elements"
                Icon={FourCircle}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide key="pages">
            <Link href="/pages/settings">
              <OverviewCard2 label="Pages" data="Pages" Icon={Alphabet} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
