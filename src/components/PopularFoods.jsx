import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const PopularFoods = () => {
  const { foods } = useContext(ShopContext);
  const [popularFoods, setPopularFoods] = useState([]);

  useEffect(() => {
    const data = foods.filter((item) => item.popular);
    setPopularFoods(data.slice(0, 6));
  }, [foods]);

  return (
    <section className="max-padd-container pt-16">
      <Title
        title1={"POPULAR"}
        title2={"FOODS"}
        titleStyles={"text-center !pb-16"}
        paraStyles={"!block"}
      />
      {/* Swiper Container */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        // Add Swiper modules
        modules={[Pagination, Autoplay]}
        className="h-[255px]"
      >
        {popularFoods.map((food) => (
          <SwiperSlide key={food._id} className="pl-16">
            <Item food={food} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularFoods;
