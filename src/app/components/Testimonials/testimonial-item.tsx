import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";

const TestimonialItem = ({
  review,
}: {
  review: {
    desc: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}) => {
  return (
    <div className="w-full">
      <blockquote className="flex flex-col items-center gap-5 text-center">
        <div className="rounded-full overflow-hidden w-20 h-20 mb-4">
          <Image
            className="object-cover object-center w-full h-full"
            src={review.avatar}
            alt=""
            width={50}
            height={50}
          />
        </div>
        <p className="text-secondaryText font-medium text-lg">
          <span className="text-primary text-3xl self-start inline-block mr-4 -mb-1">
            <ImQuotesLeft />
          </span>
          {review.desc}
          <span className="text-primary text-3xl inline-block ml-4 -mb-2">
            <ImQuotesRight />
          </span>
        </p>
        <footer>
          <cite className="not-italic text-xl text-headingText dark:text-white font-heading font-bold">
            {review.name}
          </cite>
          <p className="mt-4 font-medium">
            {review.role} &bull; {review.company}
          </p>
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialItem;
