// src/components/newsItems.js
import React from 'react';

// 뉴스 항목 정보를 배열로 정의
export const newsItems = [
  {
    title: "네이버 밴드",
    description: "QR코드를 스캔해<br />네이버 밴드 물상명리학회에 가입하세요.",
    imgSrc: "/img/qr.png",
    alt: "네이버 밴드 QR코드",
    bgColor: "bg-green-50"
  },
  {
    title: "카카오톡 채널",
    description: "QR코드를 스캔해<br />카카오톡 채널 ‘물상명리학회’ 소식을 받아보세요.",
    imgSrc: "/img/qr.png",
    alt: "카카오톡 채널 QR코드",
    bgColor: "bg-amber-200"
  }
];

// 뉴스 목록을 렌더링하는 컴포넌트
export const NewsList = () => (
  <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 justify-between">
    {newsItems.map((item, index) => (
      <div key={index} className={`${item.bgColor} flex-col sm:flex-row  rounded-lg p-10 shadow-md flex-1 flex justify-between h-96 p-10`}>
        <div className="text-left flex-1">
          <h3 className="text-3xl font-bold mb-8">{item.title}</h3>
          <p className="text-xl" dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>
        <div className="mt-2 lg:mt-0 self-end bg-white p-4 rounded-lg shadow-md">
          <img src={item.imgSrc} alt={item.alt} style={{ height: '5vw' }} />
        </div>
      </div>
    ))}
  </div>
);
