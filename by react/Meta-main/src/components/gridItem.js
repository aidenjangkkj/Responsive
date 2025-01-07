const GridItem = ({ title, src }) => {
  return (
    <div className="flex flex-col items-center px-10 pt-10 lg:px-20 lg:pt-20 pb-12 bg-[#f7f7f7] rounded-3xl">
      <div className="flex flex-col items-center mb-10">
        <div className="text-base xl:text-3xl md:text-2xl sm:text-xl font-bold text-center">
          {title}
        </div>
        <div className="text-sm xl:text-2xl md:text-xl sm:text-lg font-normal">
          {"(비매품)"}
        </div>
      </div>
      <img className="w-3/4 xl:w-full lg:w-3/4 md:w-2/3" src={src} alt="사진" />
    </div>
  );
};

export default GridItem;
