import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";


const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
<<<<<<< HEAD
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${currentCard === cardData?.heading
        ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
        : "bg-richblack-800"
        }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div className={` ${currentCard === cardData?.heading && "text-richblack-800"} font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
          } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
=======
  const isSelected = currentCard === cardData?.heading;
  
  return (
    <div
      className={`w-full max-w-[320px] sm:max-w-[360px] lg:w-[30%] h-[280px] sm:h-[300px] box-border cursor-pointer transition-all duration-300 hover:scale-105 ${
        isSelected
          ? "bg-white shadow-[8px_8px_0_0] sm:shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-[#000814] hover:bg-[#001122]"
      }`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-dashed h-[80%] p-6 flex flex-col gap-3" 
           style={{ borderColor: isSelected ? '#6c757d' : 'var(--border-color)' }}>
        <div className={`font-semibold text-[18px] sm:text-[20px] ${
          isSelected ? 'text-black' : 'text-[#ffffff]'
        }`} style={{ opacity: isSelected ? 1 : 1 }}>
          {cardData?.heading}
        </div>

        <div className={`text-sm sm:text-base ${isSelected ? 'text-gray-600' : 'text-[#ffffff]'}`}
             style={{ opacity: isSelected ? 1 : 1 }}>
          {cardData?.description}
        </div>
      </div>

      <div className={`flex justify-between px-6 py-3 font-medium ${
        isSelected ? 'text-blue-600' : 'text-[#ffffff]'
      }`} style={{ opacity: isSelected ? 1 : 1 }}>
        {/* Level */}
        <div className="flex items-center gap-2 text-sm sm:text-[16px]">
>>>>>>> main
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
<<<<<<< HEAD
        <div className="flex items-center gap-2 text-[16px]">
=======
        <div className="flex items-center gap-2 text-sm sm:text-[16px]">
>>>>>>> main
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default CourseCard;
=======
export default CourseCard;
>>>>>>> main
