import React from "react";

const Card = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${classes}`}>
      {children}
    </div>
  );
};

export default Card;
