import React from "react";
import Link from "next/link";

const Button = ({
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
  const allClasses = `inline-flex gap-2 items-center justify-center px-8 py-3 font-heading font-semibold ${classes}`;
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

export default Button;
