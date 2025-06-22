import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: 'Rating "Auto-grading"',
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12 relative z-[1] gap-6">
      {LearningGridArray.map((card, i) => {
        const gridClasses = [
          i === 0 && "lg:col-span-2",
          "h-[294px]", // Apply consistent height to all containers
          card.order === -1 ? "bg-transparent" : "",
          card.order === 3 && "lg:col-start-2",
        ].filter(Boolean).join(" ");

        return (
          <div key={i} className={`${gridClasses} ${card.order === -1 ? 'z-10' : ''}`}>
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0 relative h-full" style={{
                backgroundColor: 'var(--background-secondary)',
                padding: '24px',
                borderRadius: '16px',
                zIndex: 100,
                position: 'relative'
              }}>
                <div className="text-4xl font-semibold theme-text-primary" style={{ zIndex: 101, position: 'relative' }}>
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="font-medium theme-text-secondary" style={{ zIndex: 101, position: 'relative' }}>
                  {card.description}
                </p>
                <div className="w-fit mt-2" style={{ zIndex: 101, position: 'relative' }}>
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8 h-full theme-bg-secondary border theme-border rounded-lg" style={{ zIndex: 100, position: 'relative' }}>
                <h1 className="theme-text-primary text-lg">{card.heading}</h1>
                <p className="theme-text-secondary font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
