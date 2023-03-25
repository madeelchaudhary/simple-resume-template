import React from "react";

const ModernCard = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div
      className={`relative border-2 rounded-xl -skew-x-3 transition-colors duration-150 hover:border-primary hover:bg-primary group after:absolute after:w-4/5 hover:after:opacity-50 after:opacity-0 after:h-full after:left-8 after:top-[52%] after:bg-primary after:blur-lg after:pointer-events-none after:-z-10 after:transition-opacity after:duration-150 stacking-shadow ${classes}`}
    >
      {children}
    </div>
  );
};

export default ModernCard;
