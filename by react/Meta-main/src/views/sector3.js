import React, { useRef, useEffect } from 'react';
import { BenefitsList } from '../components/benefits.js';
import { NewsList } from '../components/newsItems.js';
import Scroll from "../components/scroll.js";

const Sector3 = () => {
  return (
    <>
      {/* 자격증센터 섹션 */}
      <section id='certificate-section' className="py-12 rounded-lg ">
        <div className="container mx-auto flex flex-col md:flex-row items-center pb-12">
          <div className="md:w-1/2 ml-12">
            <h2 className="text-5xl font-extrabold mb-7">자격증센터</h2>
            <p className="text-2xl mr-12 pt-4">물상명리학회는 2017년 문화체육관광부로부터 물상명리 상담전문가 민간자격증(등록번호: 2017-003552, ‘물상명리상담사 1급/2급’)을 발급,
              관리하고 있는 유일한 전문 학회입니다.</p>
            <p className="text-2xl pt-8 mr-12">체계적인 교육 과정과 전문적인 시험을 통해 진정한 물상명리 전문가를 양성하고 있습니다.</p>
            <div className="flex items-center" style={{ marginTop: '4vw' }}>
              <a href="https://www.naver.com/" className="text-2xl no-underline mr-2">자세히 보기</a>
              <img src="/img/arrow.png" alt="Arrow" className="ml-3 h-5 w-5" />
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="/img/certificate.png" alt="Certificate" className="mt-4" />
          </div>
        </div>
      </section>

      {/* 명앤명 APP 공인 섹션 */}
      <section id='app-section' className="py-12 rounded-lg ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10 h-auto lg:h-96">
          {/* 왼쪽 부분 */}
          <div className="w-full lg:w-1/2 sm:w-full bg-blue-50 p-6 rounded-lg h-96 flex flex-col justify-center" style={{ paddingLeft: "4.5vw", height: "26rem" }}>
            <h2 className="text-5xl font-bold mb-7">물상명리학회<br />‘명앤명’ APP 공인</h2>
            <p className="text-2xl">2024.10 새롭게 리뉴얼된 ‘명앤명’을<br />구글플레이 스토어, 앱 스토어에서 만나보세요!</p>
          </div>
          <Scroll />
        </div>
      </section>


      {/* 큰 성장을 위한 혜택 섹션 */}
      <section id='mebership-section' className="py-12 ">
        <div className="container mx-auto px-4 pt-12">
          <h2 className="text-center text-5xl font-bold mt-10 mb-6">
            큰 성장을 위한 더 많은 혜택을 드립니다!
          </h2>
          <p className="text-center text-3xl font-bold mt-5">
            물상명리학회의 회원이 되시면 다양한 혜택을 제공 받을 수 있습니다.
          </p>
          <div className="flex flex-row text-center space-x-16 justify-center my-12 py-4">
            <p className="text-3xl font-bold underline">회원 혜택안내</p>
            <p className='text-3xl font-bold'> 가입신청</p>
          </div>
          <BenefitsList />
        </div>
      </section>

      {/* 다양한 소식 섹션 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center text-base py-12">
          <h2 className="text-5xl font-bold mb-4 p-10">다양한 소식을 만나보세요</h2>
          <NewsList />
        </div>
      </section>

      {/* 물상명리학회와 함께 섹션 */}
      <section className="py-12 rounded-lg h-96 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">물상명리학회와 함께<br />당신의 꿈과 가능성을 담아 미래를 만들어 나가세요.</h2>
        </div>
      </section>

      {/* Footer 섹션 */}
      <footer className="py-12 bg-gray-900 text-white" style={{ height: '20rem' }}>
        <div className="container mx-auto px-4 text-xl">
          <p>한국경영학전문가협회 | 대표이사: 황영오</p>
          <p>본사: 경기도 성남시 분당구 황새울로 200번길 36, 분당동부루트빌딩 1015호</p>
          <p>고객센터: 1661-2749</p>
          <p>COPYRIGHT © 한국경영학전문가협회 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
};

export default Sector3;
