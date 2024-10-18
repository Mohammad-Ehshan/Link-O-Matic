// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; // Correct import path
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import "../app.scss"
// import '../../App.scss';


// const Testimonal2 = () => {
//   return (
//     <div className="testimonial-container  p-10">
//       <div className="stars">
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//       </div>
//       <h2 className="text-6xl mb-5 bg-gradient-to-r from-white via-zinc-500 to-gray-300 bg-clip-text text-transparent font-bold text-center ">
//         Precious <span className="text-neutral-400">Testimony</span>
//       </h2>

//       <div className="testimonial-wrapper relative max-w-7xl mx-auto">
//         <div className="testimonial-box p-4 rounded-2xl overflow-hidden">
//           <Swiper
//             spaceBetween={50}
//             slidesPerView={1}
//             loop={true}
//             grabCursor={true}
//             pagination={{ clickable: true }}
//             navigation={{
//               nextEl: ".swiper-button-next", // Link to next button
//               prevEl: ".swiper-button-prev", // Link to prev button
//             }}
//             modules={[Pagination, Navigation]}
//             className="mySwiper"
//           >
//             <SwiperSlide className="testimonial-slide flex flex-col items-center bg-gradient-to-r from-[#037cded7]  to-[#03e5b8d0] shadow-lg p-14 rounded-2xl border-t-8 border-b-8 border-emerald-500 min-h-[550px]">
//               <img
//                 src="testimony1.jpeg"
//                 alt="Son Goku"
//                 className="w-36 h-36 object-cover rounded-full border-8 border-green-200 outline outline-4 outline-lime-100"
//               />
//               <h3 className="text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">Aryan Jha</h3>
//               <p className="text-center  text-slate-950 text-lg">
//               This waste management site is a true game changer! The AI technology simplifies the process of identifying and categorizing waste, making it easy for users to understand their environmental impact. The community challenges are not only fun but also engaging, encouraging collaboration and healthy competition among users. Additionally, the marketplace for recyclable materials fosters a sustainable economy. Overall, it's a fantastic resource for anyone looking to reduce their waste and make a positive impact!


//               </p>
//             </SwiperSlide>
//             <SwiperSlide className="testimonial-slide flex flex-col items-center bg-gradient-to-r from-[#037cded6]  to-[#03e5b8d5] shadow-lg p-14  rounded-2xl border-t-8 border-b-8 border-emerald-400 min-h-[500px]">
//               <img
//                 src="testimony-2.png"
//                 alt="Monkey D Luffy"
//                 className="w-36 h-36 object-cover rounded-full border-8 border-white outline outline-4 outline-green-600"
//               />
//               <h3 className="text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">Koshal Yadav</h3>
//               <p className="text-center  text-zinc-900 text-lg">
//               I absolutely love this waste management platform! The user-friendly interface and AI-driven features make waste sorting and recycling incredibly simple. The dashboard provides insightful progress tracking, which really helps keep users motivated to reduce waste. The community challenges add an exciting element, promoting teamwork while allowing participants to earn rewards. The marketplace for recyclable materials is an innovative touch, connecting individuals with businesses in need of recyclables. Highly recommend this site for anyone who is eco-conscious and wants to make a difference!
//               </p>
//             </SwiperSlide>
//             <SwiperSlide className="testimonial-slide flex flex-col items-center bg-gradient-to-r from-[#037cded3]  to-[#03e5b8ca] shadow-lg p-14 rounded-2xl border-t-8 border-b-8 border-emerald-400 min-h-[500px]">
//               <img
//                 src="testimony3.png"
//                 alt="Gojo Satrou"
//                 className="w-36 h-36 object-cover rounded-full border-8 border-white outline outline-4 outline-green-600"
//               />
//               <h3 className=" text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">Nikhil Sharma </h3>
//               <p className="text-center text-zinc-900 text-lg">
//               This site is incredibly helpful for effectively managing waste! The AI analysis accurately categorizes waste items, while the carbon footprint calculator provides valuable insights for users looking to minimize their impact. The community aspect fosters a supportive environment, allowing users to challenge each other in waste reduction goals. I particularly enjoy the rewards system, which adds extra motivation to participate. This is a must-visit for anyone passionate about sustainability and looking to take actionable steps toward reducing waste!
//               </p>
//             </SwiperSlide>
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="swiper-button-next text-indigo-600"></div>
//           <div className="swiper-button-prev text-indigo-600"></div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonal2;

"use client"
import React, { useState } from "react";
import "../../App.scss";

const testimonies = [
  {
    name: "Aryan Jha",
    image: "testimony1.jpeg",
    alt: "Son Goku",
    text: "This waste management site is a true game changer! The AI technology simplifies the process of identifying and categorizing waste, making it easy for users to understand their environmental impact. The community challenges are not only fun but also engaging, encouraging collaboration and healthy competition among users. Additionally, the marketplace for recyclable materials fosters a sustainable economy. Overall, it's a fantastic resource for anyone looking to reduce their waste and make a positive impact!"
  },
  {
    name: "Koshal Yadav",
    image: "testimony-2.png",
    alt: "Monkey D Luffy",
    text: "I absolutely love this waste management platform! The user-friendly interface and AI-driven features make waste sorting and recycling incredibly simple. The dashboard provides insightful progress tracking, which really helps keep users motivated to reduce waste. The community challenges add an exciting element, promoting teamwork while allowing participants to earn rewards. The marketplace for recyclable materials is an innovative touch, connecting individuals with businesses in need of recyclables. Highly recommend this site for anyone who is eco-conscious and wants to make a difference!"
  },
  {
    name: "Nikhil Sharma",
    image: "testimony3.png",
    alt: "Gojo Satoru",
    text: "This site is incredibly helpful for effectively managing waste! The AI analysis accurately categorizes waste items, while the carbon footprint calculator provides valuable insights for users looking to minimize their impact. The community aspect fosters a supportive environment, allowing users to challenge each other in waste reduction goals. I particularly enjoy the rewards system, which adds extra motivation to participate. This is a must-visit for anyone passionate about sustainability and looking to take actionable steps toward reducing waste!"
  }
];

const Testimonal2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonies.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonies.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonial-container p-10">
      <div className="stars">
        {/* Stars implementation remains unchanged */}
      </div>
      <h2 className="text-6xl mb-5 bg-gradient-to-r from-white via-zinc-500 to-gray-300 bg-clip-text text-transparent font-bold text-center">
        Precious <span className="text-neutral-400">Testimony</span>
      </h2>

      <div className="testimonial-wrapper relative max-w-7xl mx-auto">
        <div className="testimonial-box p-4 rounded-2xl overflow-hidden">
          <div className="testimonial-slide flex flex-col items-center bg-gradient-to-r from-[#037cded7] to-[#03e5b8d0] shadow-lg p-14 rounded-2xl border-t-8 border-b-8 border-emerald-500 min-h-[550px]">
            <img
              src={testimonies[currentSlide].image}
              alt={testimonies[currentSlide].alt}
              className="w-36 h-36 object-cover rounded-full border-8 border-green-200 outline outline-4 outline-lime-100"
            />
            <h3 className="text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">
              {testimonies[currentSlide].name}
            </h3>
            <p className="text-center text-slate-950 text-lg">
              {testimonies[currentSlide].text}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="text-indigo-600 bg-white px-4 py-2 rounded-full shadow-md"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="text-indigo-600 bg-white px-4 py-2 rounded-full shadow-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal2;
