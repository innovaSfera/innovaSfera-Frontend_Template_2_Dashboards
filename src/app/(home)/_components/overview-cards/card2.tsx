import type { JSX, SVGProps } from "react";

type PropsType = {
  label: string;
  data: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard2({ data, Icon }: PropsType) {
  return (
    <div className="flex items-center justify-center flex-col rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon />

      <div className="mt-6">
        <dl>
          <dt className="mb-1.5 font-medium text-lg text-dark dark:text-white">
            {data}
          </dt>
        </dl>
      </div>
    </div>
  );
}
