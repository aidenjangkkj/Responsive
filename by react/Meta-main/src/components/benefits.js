// src/components/benefits.js
import React from 'react';

// 혜택 정보를 배열로 정의
export const benefits = [
  ["회원 확인패 증정", "/img/Location.png"],
  ["정보제공", "/img/Information.png"],
  ["공지 출판지원", "/img/Book2.png"],
  ["특화교육", "/img/Education.png"],
  ["오프라인 세미나<br />참석비 20% 할인", "/img/Education.png"],
  ["문화센터 강의<br />참여 기회 부여", "/img/Lecture.png"],
  ["네트워킹", "/img/Networking.png"],
  ["강사활동지원", "/img/Tutor.png"]
];

// 혜택 목록을 렌더링하는 컴포넌트
export const BenefitsList = () => (
  <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-lg p-4 shadow-md flex flex-col items-center p-14 text-2xl"
      >
        <img src={benefit[1]} alt={benefit[0]} className="mb-4 pt-10" />
        <p className="text-center pt-5" dangerouslySetInnerHTML={{ __html: benefit[0] }}></p>
      </div>
    ))}
  </div>
);
