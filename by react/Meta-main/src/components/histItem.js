const HistItem = ({ year, contents, isEnd = false }) => {
  return (
    <div
      className={
        isEnd
          ? `flex flex-col py-[100px] md:flex-row sm:flex-col`
          : `flex flex-col py-[100px] border-b-[1px] md:flex-row sm:flex-col`
      }
    >
      <span className="font-bold text-2xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl">
        {year}
      </span>
      <ul className="list-disc">
        {contents.map((content, idx) => {
          return (
            <li
              key={idx.toString()}
              className="font-normal py-[3%] ml-6 md:ml-24 text-base 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base"
            >
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistItem;
