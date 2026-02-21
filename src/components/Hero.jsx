// import React from "react";
// import { Link } from "react-router-dom";
// import bg from "../assets/bg.png";
// import { TbTruckDelivery } from "react-icons/tb";
// import { IoPeopleCircleOutline } from "react-icons/io5";
// import { AiFillShop } from "react-icons/ai";
// import { IoMdRestaurant } from "react-icons/io";
// import { PiChefHatFill } from "react-icons/pi";

// const Hero = () => {
//   return (
//     <section className="py-20 max-padd-container xl:py-36 bg-deep">
//       <div className="flex-col gap-6 flexCenter xl:flex-row">
//         {/* left side */}
//         <div className="flex flex-col flex-1 pt-12 xl:pt-32">
//           <h1 className="h1 max-w-[46rem]">
//             Grab Exclusive{" "}
//             <span className="inline-flex">
//               <span className="inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full">
//                 F
//               </span>
//               ood
//             </span>{" "}
//             Discounts Now!
//           </h1>
//           <p>
//           Foodessa a world of flavors, freshness, and delight. Discover dishes that satisfy your cravings, excite your taste buds, and bring people together. From classic favorites to modern delights, find the perfect meal for every moment.
//           </p>
//           <div className="mt-6">
//             <Link to={"/store"} className="btn-secondary">
//               Explore Now
//             </Link>
//           </div>
//         </div>
//         {/* Right side */}
//         <div className="relative z-10 flex flex-1 top-12">
//           <div className="relative">
//             <img src={bg} alt="" height={666} width={666} />
//             {/* Badge */}
//             <div className="absolute hidden py-2 pl-2 shadow-sm sm:block top-8 right-14 max-w-48 bg-light rounded-xl">
//               <div className="flex gap-2">
//                 <TbTruckDelivery size={31} className="text-secondary" />
//                 <h5 className="relative h5 top-1">Fast Delivery</h5>
//               </div>
//               <p className="text-xs">
//               Fresh, hot meals at your doorstep.
//               </p>
//             </div>
//             {/* Badge */}
//             <div className="absolute hidden p-2 shadow-sm sm:block top-52 right-6 max-w-60 bg-light rounded-xl">
//               <div className="flex gap-2">
//                 <IoMdRestaurant size={26} className="text-secondary" />
//                 <h5 className="h5">99+ Dishes</h5>
//               </div>
//             </div>
//             {/* Badge */}
//             <div className="absolute hidden py-2 pl-2 shadow-sm sm:block top-3/4 right-12 max-w-48 bg-light rounded-xl">
//               <div className="flex gap-2">
//                 <AiFillShop size={23} className="text-secondary" />
//                 <h5 className="h5">200+ Branches</h5>
//               </div>
//               <p className="text-xs">
//               Bringing great food closer to you.
//               </p>
//             </div>
//             {/* Badge */}
//             <div className="absolute hidden py-2 pl-2 shadow-sm sm:block top-28 left-3 max-w-48 bg-light rounded-xl">
//               <div className="flex gap-2">
//                 <IoPeopleCircleOutline size={31} className="text-secondary" />
//                 <h5 className="relative h5 top-1">Happy Customers</h5>
//               </div>
//               <p className="text-xs">
//               Serving smiles with every delicious bite.
//               </p>
//             </div>
//             {/* Badge */}
//             <div className="absolute hidden p-2 shadow-sm sm:block top-72 left-3 max-w-48 bg-light rounded-xl">
//               <div className="flex gap-2">
//                 <PiChefHatFill size={31} className="text-secondary" />
//                 <h5 className="relative h5 top-1">Expert Cooks</h5>
//               </div>
//               </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";
import { TbTruckDelivery } from "react-icons/tb";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { IoMdRestaurant } from "react-icons/io";
import { PiChefHatFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="py-20 max-padd-container xl:py-36 bg-deep">
      <div className="flex-col gap-6 flexCenter xl:flex-row">
        {/* Left Side */}
        <motion.div
          className="flex flex-col flex-1 pt-12 xl:pt-32"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="h1 max-w-[46rem]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Grab Exclusive{" "}
            <span className="inline-flex">
              <span className="inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full shadow-md">
                F
              </span>
              ood
            </span>{" "}
            Discounts Now!
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Foodessa a world of flavors, freshness, and delight. Discover dishes that satisfy your cravings, excite your taste buds, and bring people together. From classic favorites to modern delights, find the perfect meal for every moment.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to={"/"}
              className="transition-transform btn-secondary hover:scale-105"
            >
              Explore Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <div className="relative z-10 flex flex-1 top-12">
          <div className="relative">
            <motion.img
              src={bg}
              alt=""
              height={666}
              width={666}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Badges */}
            <AnimatedBadge top="top-8" right="right-14" icon={<TbTruckDelivery size={31} />} title="Fast Delivery" text="Fresh, hot meals at your doorstep." />
            <AnimatedBadge top="top-52" right="right-6" icon={<IoMdRestaurant size={26} />} title="99+ Dishes" />
            <AnimatedBadge top="top-3/4" right="right-12" icon={<AiFillShop size={23} />} title="200+ Branches" text="Bringing great food closer to you." />
            <AnimatedBadge top="top-28" left="left-3" icon={<IoPeopleCircleOutline size={31} />} title="Happy Customers" text="Serving smiles with every delicious bite." />
            <AnimatedBadge top="top-72" left="left-3" icon={<PiChefHatFill size={31} />} title="Expert Cooks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Animated Badge Component
const AnimatedBadge = ({ top, right, left, icon, title, text }) => {
  return (
    <motion.div
      className={`hidden sm:block absolute ${top || ""} ${right || ""} ${left || ""} max-w-60 bg-light shadow-md pl-2 py-2 rounded-xl`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-secondary">{icon}</span>}
        <h5 className="relative h5 top-1">{title}</h5>
      </div>
      {text && <p className="text-xs">{text}</p>}
    </motion.div>
  );
};
