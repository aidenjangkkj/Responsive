// src/components/scroll.js
import React, { useRef, useEffect } from 'react';

// items 배열 정의
const items = [
  ["운세/타로", "/img/phone.png"],
  ["상담", "/img/phone.png"],
  ["모두맘", "/img/phone.png"]
];

const Scroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const handleScroll = () => {
      // 스크롤이 거의 끝에 도달했을 때 처음으로 돌아갑니다.
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full lg:w-1/2 flex overflow-x-scroll" ref={scrollRef}>
      <div className="flex flex-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 p-6 w-96">
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{item[0]}</h3>
              <div className="p-4 rounded-lg">
                <img src={item[1]} alt={item[0]} className="w-30" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Scroll;
