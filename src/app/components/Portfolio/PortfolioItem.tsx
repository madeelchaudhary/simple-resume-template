import Image from "next/image";
import React from "react";
import Card from "../UI/Card";

const PortfolioItem = ({
  item,
}: {
  item: { img: string; title: string; category: string };
}) => {
  return (
    <Card>
      <div className="relative group">
        <figure>
          <a
            href="#"
            className="peer block h-[300px] overflow-hidden bg-slate-900"
          >
            <Image
              className="h-full object-cover opacity-80 transition ease-in-out group-hover:scale-110 group-hover:opacity-100 peer-focus:opacity-100"
              src={item.img}
              alt={item.img}
              width={640}
              height={290}
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 bg-white text-center p-5  shadow-inner scale-y-0 origin-bottom transition-transform peer-focus:scale-100 group-hover:scale-100 pointer-events-none">
            <figcaption>
              <h4 className="text-cardHeading text-xl mb-1">{item.title}</h4>
              <p className="text-sm text-secondaryText">{item.category}</p>
            </figcaption>
          </div>
        </figure>
      </div>
    </Card>
  );
};

export default PortfolioItem;
