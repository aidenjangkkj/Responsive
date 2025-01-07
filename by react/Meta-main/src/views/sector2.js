import HistItem from "../components/histItem.js";
import GridUI from "../components/gridUI.js";

const Sector2 = () => {
  // public 밑에 images 폴더 추가하기 (public 하위로 옮길까 생각 중)
  // Sector 컴포넌트 끝 태그 없애고 통합
  // public index.html 수정한거 merge할때 conflict나면 수정
  // sector1, sector3 최상위 태그 section으로 수정
  const histData = new Map([
    ["2024", ["물상명리학회 워크숍", "OOOOOOOOOOOOOOOOOOOOO"]],
    ["2012", ["물상명리학회 설립"]],
  ]);

  const itemData = new Map([
    ["물상론 사주명조 사례집: 갑목", `img/1.png`],
    ["물상론 사주명조 사례집: 을목", `img/2.png`],
    ["물상론 사주명조 사례집: 병화", `img/3.png`],
    ["물상론 사주명조 사례집: 정화", `img/4.png`],
    ["물상론 사주명조 사례집: 무토", `img/5.png`],
    ["물상론 사주명조 사례집: 기토", `img/6.png`],
    ["물상론 사주명조 사례집: 경금", `img/7.png`],
    ["물상론 사주명조 사례집: 신금", `img/8.png`],
    ["물상론 사주명조 사례집: 임수", `img/9.png`],
    ["물상론 사주명조 사례집: 계수", `img/10.png`],
    ["물상명리학 기초(1)", `img/11.png`],
    ["물상명리학 기초(2)", `img/12.png`],
  ]);

  const itemData2 = new Map([
    ["물상법 기초강의(1)", `img/13.png`],
    ["물상심화 합동세미나", `img/14.png`],
    ["실전사례 핵심연구", `img/15.png`],
    ["고급심화과정 PART1", `img/16.png`],
    ["고급심화과정 PART2", `img/17.png`],
    ["물상법연구", `img/18.png`],
  ]);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col px-[10%] mt-[180px]">
        <div className="flex flex-col items-center pb-[100px] border-b-[1px] border-[#dadada]">
          <h2 className="text-2xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">
            Present - 2011
          </h2>
          <p className="mt-6 text-base 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-normal text-center">
            물상명리학회는 깊은 학문적 토대, 혁신적인 연구 활동, 그리고 학술
            교류를 통해 <br />
            새로운 미래를 만들어가고 있습니다.
          </p>
        </div>
        <div className="flex flex-col">
          {[...histData].map(([year, contents], idx) => {
            if (idx === histData.size - 1)
              return (
                <HistItem
                  key={idx.toString()}
                  year={year}
                  contents={contents}
                  isEnd={true}
                />
              );
            return (
              <HistItem key={idx.toString()} year={year} contents={contents} />
            );
          })}
        </div>
      </div>
      <GridUI
        title="출판서적"
        subTitle={[
          "물상명리학은 사주팔자를 자연의 다양한 사물에 비유하여 분석하는 명리학의 한 분야입니다.",
          "오랜 역사를 가지고 있으며, 동양에서 널리 연구되고 있습니다.",
          "물상명리학의 매력적인 세계를 만나보세요!",
        ]}
        itemData={itemData}
      />
      <GridUI
        title="사례연구집"
        subTitle={[
          "실제 사례를 통해 물상명리학 원리를 이해하고 실생활에 적용하는 방법을 익힐 수 있습니다!",
          "다양한 분야의 사례와 깊이 있는 분석으로 물상명리학의 활용 범위를 넓혀줍니다. ",
        ]}
        itemData={itemData2}
      />
    </section>
  );
};

export default Sector2;
