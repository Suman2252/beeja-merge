
import React, { useState } from "react";
import { HomePageExplore } from "../../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];


const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-3xl lg:text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-base lg:text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap gap-2 lg:gap-5 -mt-5 mx-auto w-full max-w-4xl justify-center bg-richblack-800 text-[#ffffff] p-2 lg:p-1 rounded-2xl lg:rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={`text-xs lg:text-[16px] flex flex-row items-center gap-1 lg:gap-2 ${currentTab === ele
                ? "bg-richblack-900 text-[#ffffff] font-medium"
                : "text-[#ffffff]"
                } px-3 lg:px-7 py-2 lg:py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-[#ffffff] hover:scale-105 active:scale-95`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>

      <div className="block h-[50px] lg:h-[100px]"></div>

      {/* Cards Group */}
      <div className="relative mx-auto max-w-maxContent gap-4 lg:gap-6 justify-center flex flex-wrap w-full text-black mb-7 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMore;
