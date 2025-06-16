import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import Img from './Img';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Icons
import { FaStar } from "react-icons/fa"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState(null)
  const truncateWords = 15

  useEffect(() => {
    ; (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  if(!reviews) return;

  return (
    <div className="theme-text-primary">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent relative">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="w-full"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 theme-bg-secondary p-3 text-[14px] theme-text-primary min-h-[180px] max-h-[180px] glass-bg rounded-lg theme-border border">
                  <div className="flex items-center gap-4">
                    <Img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold theme-text-primary capitalize">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium theme-text-secondary">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>

                  <p className="font-medium theme-review-text">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                        .split(" ")
                        .slice(0, truncateWords)
                        .join(" ")} ...`
                      : `${review?.review}`}
                  </p>

                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating}
                    </h3>
                    <ReactStars
                      count={5}
                      value={parseInt(review.rating)}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev theme-arrow !text-2xl !font-bold"></div>
        <div className="swiper-button-next theme-arrow !text-2xl !font-bold"></div>
      </div>
      
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--arrow-color) !important;
          background: var(--background-secondary);
          border-radius: 50%;
          width: 40px !important;
          height: 40px !important;
          margin-top: -20px !important;
          border: 1px solid var(--border-color);
        }
        
        [data-theme="light"] .swiper-button-next,
        [data-theme="light"] .swiper-button-prev {
          color: #000000 !important;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #ddd;
        }
        
        [data-theme="dark"] .swiper-button-next,
        [data-theme="dark"] .swiper-button-prev {
          color: #ffffff !important;
          background: var(--background-secondary);
          border: 1px solid var(--border-color);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: var(--accent-color);
          color: white !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  )
}

export default ReviewSlider
