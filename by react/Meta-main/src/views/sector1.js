const Sector1 = () => {
  return (
    <>
      <div id="firstPage" className="bg-sec1-bgimg bg-cover bg-center">
        <div className="container mx-auto flex items-center justify-center min-h-screen text-center content-center">
          <h1 className="text-4xl md:text-8xl font-bold text-white tracking-wide leading-[7.564rem]">
            학문적 체계화를 통한
            <br></br>
            물상명리의 새로운 도약
          </h1>
          <img
            src="img/Vector.png"
            alt="Arrow"
            className="absolute top-[90%]"
          ></img>
        </div>
      </div>
      <div id="vision-section" className="container mx-auto flex items-center justify-center min-h-screen text-center vision-section">
        <h1 className="text-3xl md:text-6xl font-bold text-black tracking-wide leading-[4.538rem]">
          물상명리를 학문적으로 정리 및 체계화하여 <br></br>
          현대 사회에 적극적으로 응용, 활용할 수 있는 <br></br>
          전문가를 양성합니다.
        </h1>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-4 mx-20 max-h-fit ">
        <div className="md:col-span-2 text-center justify-center flex items-center m-0 p-0">
          <h1 className="text-3xl md:text-6xl font-bold text-black tracking-wide leading-[4.538rem]">
            물상명리학의 근원
          </h1>
        </div>
        <div className="">
          <img src="img/source1.png" alt="source1" className=""></img>
          <div className="mx-auto flex justify-left text-center md:text-left mx-10 my-10">
            <p className="text-l md:text-3xl font-bold">
              국내 최고 명리학자 '부산 박도사' <br></br>
              제산(霽山) 박재현
            </p>
          </div>
          <div className="mx-auto flex justify-left text-left md:mx-10 my-5">
            <p className="md:text-2xl">
              {" "}
              물상명리는 국내 역술계의 전설로 불리는 '부산 박도사' 제산(霽山){" "}
              <br></br>
              박재현 선생이 고전적인 물상론적 해석 방식을 현대에 맞게 새롭게{" "}
              <br></br>
              재탄생시킨 통변술입니다.
            </p>
          </div>
        </div>

        <div>
          <img src="img/source2.png" alt="source2"></img>
          <div className="md:mx-auto md:flex justify-left md:text-left mx-10 my-10 text-center">
            <p className="text-l md:text-3xl font-bold">
              현대 물상론의 선구자<br></br>
              청원(淸遠) 김용백
            </p>
          </div>
          <div className="mx-auto flex justify-left md:text-left md:mx-10 my-5">
            <p className="md:text-2xl">
              {" "}
              깊은 학구적 탐구와 끊임없는 노력을 통해 제산(霽山) <br></br>
              박재현 선생의 가르침을 체계적인 이론으로 정립하고, <br></br>
              현대인의 삶에 도움이 되는 실용적인 학문으로 발전시켰습니다.
            </p>
          </div>
        </div>
      </div>
      
      <div id="business-section" className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-4 mx-20 my-52">
        <div className="md:col-span-4 flex text-center justify-center flex items-center">
          <h1 className="text-3xl md:text-6xl font-bold text-black tracking-wide leading-[4.538rem]">
            사업정보
          </h1>
        </div>
        <div className="mx-auto justify-center items-center">
          <img src="img/info1.png" alt="infoimg" className="w-full"></img>
          <div className="mx-auto flex md:justify-left md:text-left mx-5 my-5 text-center justify-center">
            <p className="md:text-3xl font-bold">전문상담사 양성</p>
          </div>
          <div className="mx-auto flex justify-left text-left mx-5 my-5">
            <p className="md:text-2xl">
              {" "}
              물상명리학회에서는 물상명리 전문 상담가 양성을 위한 프로그램을
              운영합니다. 체계적인 교육 과정과 사례 중심 교육을 통해 물상명리
              상담 전문성을 갖춘 인재를 양성하고자 합니다.
            </p>
          </div>
        </div>

        <div>
          <img src="img/info2.png" alt="infoimg" className="w-full"></img>

          <div className="mx-auto flex md:justify-left md:text-left mx-5 my-5 text-center justify-center">
            <p className="md:text-3xl font-bold">
              학술 연구활동 및<br></br>
              학술지 발간
            </p>
          </div>
          <div className="mx-auto flex justify-left text-left mx-5 my-5">
            <p className="md:text-2xl">
              {" "}
              활발한 학술 연구를 통해 새로운 지식을 창출하고, 이를 학술지 발간을
              통해 공유합니다.
            </p>
          </div>
        </div>
        <div>
          <img src="img/info3.png" alt="infoimg" className="w-full"></img>
          <div className="mx-auto flex md:justify-left md:text-left mx-5 my-5 text-center justify-center">
            <p className="md:text-3xl font-bold">
              사례연구 및<br></br>
              교육·수련 활동
            </p>
          </div>
          <div className="mx-auto flex justify-left text-left mx-5 my-5 ">
            <p className="md:text-2xl">
              {" "}
              실무 경험을 바탕으로 만들어진 사례 연구와 교육 프로그램으로 당신의
              역량을 키워드립니다.
            </p>
          </div>
        </div>
        <div>
          <img src="img/info4.png" alt="infoimg" className="w-full"></img>
          <div className="mx-auto flex md:justify-left md:text-left mx-5 my-5 text-center justify-center">
            <p className="md:text-3xl font-bold">저술 출판 지원</p>
          </div>
          <div className="mx-auto flex justify-left text-left mx-5 my-5 ">
            <p className="md:text-2xl">
              {" "}
              물상명리학회에서는 학술 발전에 기여하는 우수한 물상명리 연구
              자료의 출판을 지원합니다. 선정된 연구 자료 저자는 저술 및 출판
              과정 전문 상담을 받을 수 있으며, 이를 통해 연구 활성화와 학문적
              교류 기회를 확대할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7;] min-h-screen">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 md:grid-rows-3 gap-4">
          <div className="flex text-center justify-center flex items-center">
            <h1 className="text-3xl md:text-6xl font-bold text-black tracking-wide leading-[4.538rem]">
              새로운 도전 <br></br>더 나은 세상을 향한 열정
            </h1>
          </div>
          <div className="md:mx-40 mx-10">
            <p className="md:text-3xl leading-[2.421rem] text-left">
              물상명리학회는 물상론의 실용적 학문 체계화를 목표로
              설립되었습니다. 우리 학회는 물상명리학이 우리의 일상생활과
              밀접하게 연관된 학문이라는 점에 주목하고 있습니다. 그 깊이와
              넓이가 무궁무진한 이 학문의 잠재력을 극대화하여, 다양한 사회적
              요구에 부응할 수 있는 전문 상담사를 양성하고자 합니다. <br></br>
              <br></br>
              이를 위해 물상명리학회는 현장 상담 기반의 실전 사례 연구 활동을
              통해 학문적 기반을 확고히 하고 있습니다. 또한 학술 연구 활동과
              학술지 발간을 통해 물상명리학의 이론적 발전을 지속적으로 도모하며,
              사례 연구와 교육 수련 활동을 통해 현장에 적용 가능한 지식을 널리
              공유하고 있습니다. <br></br>
              <br></br>
              더불어 학회 소속 연구원의 저술 출판 지원을 통해 물상명리학의
              대중화와 학문적 확장을 꾀하고 있으며, 궁극적으로 현대인의 삶의 질
              향상에 적극적으로 기여할 수 있도록 최선을 다하겠습니다. <br></br>
              <br></br>
              물상명리학회의 밝은 미래를 함께 만들어 나가기 위해 여러분의
              지속적인 관심과 성원을 부탁드립니다.
            </p>
          </div>
          <div>
            <div className="bg-[#D9E5FD;] mx-10 md:mx-40 rounded-xl my-10">
              <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
                <div className="content-center mx-10 align-middle">
                  <div>
                    <p className="md:text-3xl text-left leading-[2.421rem]">
                      동양문화학 박사<br></br>
                      고천(敲天) <span className="font-bold">황영오 회장</span>
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="leading-[1.967rem] md:text-2xl">
                      [저서] <br></br>
                      Quantum Orientalism (2023/Amazon Kindle Store){" "}
                      <br></br>
                      챗GPT200%활용법 (2023/메타북스) <br></br>
                      디지털 뉴트렌드 메타버스 NFT 활용서(2022/메타북스){" "}
                      <br></br>
                      작명.개명 실전서(2012/동방의빛) <br></br>
                      <br></br>
                      [수상]  <br></br>
                      포보스(Forbes) 최고경영자 대상(2015) <br></br>
                      대한민국 인물대상(2014) <br></br>
                      지식경제부 장관상(2009) <br></br>
                    </p>
                  </div>
                </div>

                <div className="flex justify-center flex items-center mx-10">
                  <img src="img/portrait.png" alt="프로필 사진"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sector1;
