import React from "react";
import GridItem from "./gridItem";

const GridUI = ({ title, subTitle, itemData }) => {
  return (
    <div className="flex flex-col px-[8%] xl:px-[3%] mt-[180px]">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">
          {title}
        </h2>
        <p className="mt-6 text-base 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-normal text-center">
          {subTitle.map((line, idx) => {
            if (idx === subTitle.length - 1)
              return (
                <React.Fragment key={idx.toString()}>
                  {line} <br />
                </React.Fragment>
              );
            return (
              <React.Fragment key={idx.toString()}>
                {line} <br />
              </React.Fragment>
            );
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {[...itemData].map(([title, src], idx) => {
          return <GridItem key={idx.toString()} title={title} src={src} />;
        })}
      </div>
    </div>
  );
};

export default GridUI;
