import React from "react";
import { IconType } from "react-icons";
import ModernCard from "../UI/ModernCard";

const ServiceItem = ({
  item,
}: {
  item: { title: string; desc: string; icon: IconType };
}) => {
  return (
    <ModernCard classes="dark:bg-white">
      <div className="py-7 px-5 xl:px-6 xl:py-8 skew-x-3">
        <div className="flex items-center justify-center rounded-full bg-primary w-14 h-14 mb-5 group-hover:bg-yellow-500 text-white text-3xl">
          <item.icon />
        </div>
        <h3 className="text-3xl font-bold mb-6 group-hover:text-white dark:text-headingText">
          {item.title}
        </h3>
        <p className="group-hover:text-slate-100 text-lg">{item.desc}</p>
      </div>
    </ModernCard>
  );
};

export default ServiceItem;
