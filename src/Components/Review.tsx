import { useState, useRef, useEffect } from "react";
import avatar from "../assets/avatar.png";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "CreditEase has transformed the way I manage my airtime credits. The P2P exchange is seamless and secure!",
      author: "John D.",
      bg: "bg-[#e3e5f680]",
      textColor: "text-slate-700",
    },
    {
      id: 2,
      text: "The user verification process gave me confidence in using the platform. Highly recommended!",
      author: "Sarah M.",
      bg: "bg-[#E9EBFC80]",
      textColor: "text-slate-700",
    },
    {
      id: 3,
      text: "I love how I can track my airtime purchases and analyze my usage patterns. CreditEase is a game-changer!",
      author: "Michael T.",
      bg: "bg-[#e3e5f680]",
      textColor: "text-slate-700",
    },
    {
      id: 4,
      text: "Fast, reliable, and user-friendly. CreditEase makes managing airtime effortless!",
      author: "Emily R.",
      bg: "bg-[#E9EBFC80]",
      textColor: "text-slate-700",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 32; // gap-8 = 2rem = 32px
    container.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      scrollTo(currentIndex + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 32;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="review-section py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">
          What Our Users Say
        </h2>

        {/* Swipeable Carousel for All Screen Sizes */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === reviews.length - 1}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 lg:gap-8 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`review-card flex-shrink-0 w-full lg:w-[calc(33.333%-21.33px)] snap-center p-6 md:p-8 lg:p-10 ${
                  review.bg
                } rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  currentIndex === index ? "lg:scale-105" : ""
                }`}
              >
                <p
                  className={`mb-6 text-center ${review.textColor} text-sm sm:text-base leading-relaxed`}
                >
                  "{review.text}"
                </p>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={avatar}
                    alt="User avatar"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                  <h3
                    className={`text-center ${review.textColor} font-medium text-sm sm:text-base`}
                  >
                    - {review.author}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
