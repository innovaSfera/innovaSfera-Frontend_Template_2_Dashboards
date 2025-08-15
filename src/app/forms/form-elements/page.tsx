import type { Metadata } from "next";

import { GlobeIcon } from "@/assets/icons";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import MultiSelect from "@/components/FormElements/MultiSelect";
import { Checkbox } from "@/components/FormElements/checkbox";
import { RadioInput } from "@/components/FormElements/radio";
import { Select } from "@/components/FormElements/select";
import { Switch } from "@/components/FormElements/switch";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

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
  title: "Form Elements",
};

export default function FormElementsPage() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <Breadcrumb pageName="Form Elements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <ShowcaseSection title="Input Fields" className="space-y-5.5 !p-6.5">
            <InputGroup
              label="Default input"
              placeholder="Default input text"
              type="text"
            />

            <InputGroup
              label="Active input"
              placeholder="Active input text"
              active
              type="text"
            />

            <InputGroup
              label="Disabled input"
              placeholder="Disabled input text"
              type="text"
              disabled
            />
          </ShowcaseSection>

          <ShowcaseSection
            title="Toggle switch input"
            className="space-y-5.5 !p-6.5"
          >
            <Switch />
            <Switch backgroundSize="sm" />
            <Switch withIcon />
            <Switch background="dark" />
          </ShowcaseSection>

          <ShowcaseSection title="Time and date" className="space-y-5.5 !p-6.5">
            <DatePickerOne />
            <DatePickerTwo />
          </ShowcaseSection>

          <ShowcaseSection title="File upload" className="space-y-5.5 !p-6.5">
            <InputGroup
              type="file"
              fileStyleVariant="style1"
              label="Attach file"
              placeholder="Attach file"
            />

            <InputGroup
              type="file"
              fileStyleVariant="style2"
              label="Attach file"
              placeholder="Attach file"
            />
          </ShowcaseSection>
        </div>

        <div className="flex flex-col gap-9">
          <ShowcaseSection title="Textarea Fields" className="space-y-6 !p-6.5">
            <TextAreaGroup
              label="Default textarea"
              placeholder="Default textarea"
            />

            <TextAreaGroup
              label="Active textarea"
              placeholder="Active textarea"
              active
            />

            <TextAreaGroup
              label="Disabled textarea"
              placeholder="Disabled textarea"
              disabled
            />
          </ShowcaseSection>

          <ShowcaseSection title="Select input" className="space-y-5.5 !p-6.5">
            <Select
              label="Select Country"
              items={[
                { label: "United States", value: "USA" },
                { label: "United Kingdom", value: "UK" },
                { label: "Canada", value: "Canada" },
              ]}
              defaultValue="USA"
              prefixIcon={<GlobeIcon />}
            />
            <MultiSelect id="multiSelect" />
          </ShowcaseSection>

          <ShowcaseSection
            title="Checkbox and radio"
            className="space-y-5.5 !p-6.5"
          >
            <Checkbox label="Checkbox Text" />
            <Checkbox label="Checkbox Text" withIcon="check" />
            <Checkbox label="Checkbox Text" withIcon="x" />
            <RadioInput label="Checkbox Text" />
            <RadioInput label="Checkbox Text" variant="circle" />
          </ShowcaseSection>
        </div>
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
