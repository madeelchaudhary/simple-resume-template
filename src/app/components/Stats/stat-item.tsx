import React from "react";
import { IconType } from "react-icons";

const StateItem = ({
  count,
  label,
  Icon,
}: {
  count: number;
  label: string;
  Icon: IconType;
}) => {
  return (
    <div className="flex items-center gap-5">
      <div className="text-headingText dark:text-white text-7xl">
        <Icon />
      </div>
      <div className="flex flex-col">
        <p className="text-4xl text-primary font-heading font-bold mb-1.5">
          {count}+
        </p>
        <h3 className="font-body font-normal text-secondaryText dark:text-gray-100 text-sm">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default StateItem;
