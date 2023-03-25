import React from "react";
import Link from "next/link";

const PrimaryBtn = ({
  children,
  link,
  onClick,
  external,
  bgColor,
  classes,
}: {
  children: React.ReactNode;
  link?: string;
  onClick?(): void;
  bgColor?: string;
  classes?: string;
  external?: boolean;
}) => {
  const allClasses = `relative block px-8 py-3 rounded-lg transition-transform -skew-x-6 scale-[1.04] active:scale-100 focus:scale-100 font-heading font-semibold bg-primary text-white after:absolute after:w-full focus:after:opacity-0 active:after:opacity-0 after:h-full after:left-0 after:top-[52.5%] after:bg-primary after:blur-lg after:pointer-events-none after:-z-10 after:transition-opacity stacking-shadow ${classes}`;
  if (link) {
    return (
      <Link className={allClasses} href={link} legacyBehavior={external}>
        {children}
      </Link>
    );
  }
  return (
    <button className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
