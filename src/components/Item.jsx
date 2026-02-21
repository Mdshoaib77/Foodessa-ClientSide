// import React, { useContext, useState } from "react";
// import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { ShopContext } from "../context/ShopContext";

// const Item = ({ food }) => {
//   const { currency, addToCart } = useContext(ShopContext);
//   const [size, setSize] = useState(food.sizes[0]); // Default size (first in the array)

//   return (
//     <div>
//       <div className="relative flex rounded-xl bg-deep">
//         {/* photo */}
//         <div className="flexCenter m-6 rounded-full absolute top-0 bottom-0 -left-[88px]">
//           <img
//             src={food.image}
//             alt=""
//             height={155}
//             width={155}
//             className="object-contain aspect-square rounded-xl"
//           />
//         </div>
//         {/* info */}
//         <div className="pl-20 mx-4">
//           {/* title and description */}
//           <div className="py-3">
//             <h4 className="mb-1 bold-16 line-clamp-1">{food.name}</h4>
//             <div className="flex items-center justify-between pb-2">
//               <h5 className="medium-14">{food.category}</h5>
//               <div className="flex items-center justify-start gap-x-1 text-secondary bold-14">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStarHalfStroke />
//               </div>
//             </div>
//             <p className="line-clamp-2">{food.description}</p>
//           </div>
//           {/* food sizes */}
//           <div className="mb-2 flexBetween">
//             <div className="flex gap-1">
//               {[...food.sizes]
//                 .sort((a, b) => {
//                   const order = ["H", "F", "S", "M", "L", "XL"];
//                   return order.indexOf(a) - order.indexOf(b);
//                 })
//                 .map((item, i) => (
//                   <button
//                     onClick={() => setSize(item)}
//                     key={i}
//                     className={`${
//                       item === size ? "ring-1 ring-slate-900/10" : ""
//                     } h-6 w-6 bg-light text-xs font-semibold rounded-sm`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//             </div>
//             <button
//               onClick={() => addToCart(food._id, size)}
//               className="flexCenter gap-x-1 text-[18px] bg-secondary text-white rounded-sm p-[3px]"
//             >
//               <TbShoppingBagPlus />
//             </button>
//           </div>
//           {/* order info (temporary) */}
//           <div className="flexBetween rounded-xl pb-3 text-[13px] font-semibold">
//             <div className="gap-1 flexCenter">
//               <h5>Prep:</h5>
//               <p className="text-xs relative top-[1px]">20m</p>
//             </div>
//             <hr className="h-4 w-[1px] bg-tertiary/10 border-none" />
//             <div className="gap-1 flexCenter">
//               <h5>Price:</h5>
//               {/* Dynamically update the price */}
//               <p className="text-xs text-secondary relative top-[1px]">
//                 {currency}
//                 {food.price[size]}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Item = ({ food }) => {
  const { currency, addToCart } = useContext(ShopContext);

  // 🛑 If food not loaded yet → prevent crash
  if (!food) {
    return null; // or return <div>Loading...</div>
  }

  // Safe sizes & price fallback
  const sizes = Array.isArray(food?.sizes) ? food.sizes : [];
  const priceObj = food?.price || {};

  const [size, setSize] = useState(sizes[0] || "");

  // 🔄 If food changes dynamically, reset size safely
  useEffect(() => {
    if (sizes.length > 0) {
      setSize(sizes[0]);
    }
  }, [food]);

  return (
    <div>
      <div className="relative flex rounded-xl bg-deep">
        
        {/* Image */}
        <div className="flexCenter m-6 rounded-full absolute top-0 bottom-0 -left-[88px]">
          <img
            src={food?.image || "/placeholder.png"}
            alt={food?.name || "food"}
            height={155}
            width={155}
            className="object-contain aspect-square rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="pl-20 mx-4">
          
          {/* Title & Description */}
          <div className="py-3">
            <h4 className="mb-1 bold-16 line-clamp-1">
              {food?.name || "No Name"}
            </h4>

            <div className="flex items-center justify-between pb-2">
              <h5 className="medium-14">
                {food?.category || "Category"}
              </h5>

              <div className="flex items-center gap-x-1 text-secondary bold-14">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </div>
            </div>

            <p className="line-clamp-2">
              {food?.description || "No description available"}
            </p>
          </div>

          {/* Sizes */}
          <div className="mb-2 flexBetween">
            <div className="flex gap-1">
              {sizes
                .slice()
                .sort((a, b) => {
                  const order = ["H", "F", "S", "M", "L", "XL"];
                  return order.indexOf(a) - order.indexOf(b);
                })
                .map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSize(item)}
                    className={`${
                      item === size ? "ring-1 ring-slate-900/10" : ""
                    } h-6 w-6 bg-light text-xs font-semibold rounded-sm`}
                  >
                    {item}
                  </button>
                ))}
            </div>

            <button
              onClick={() => addToCart(food?._id, size)}
              disabled={!size}
              className="flexCenter gap-x-1 text-[18px] bg-secondary text-white rounded-sm p-[3px] disabled:opacity-50"
            >
              <TbShoppingBagPlus />
            </button>
          </div>

          {/* Price Section */}
          <div className="flexBetween rounded-xl pb-3 text-[13px] font-semibold">
            <div className="gap-1 flexCenter">
              <h5>Prep:</h5>
              <p className="text-xs relative top-[1px]">20m</p>
            </div>

            <hr className="h-4 w-[1px] bg-tertiary/10 border-none" />

            <div className="gap-1 flexCenter">
              <h5>Price:</h5>
              <p className="text-xs text-secondary relative top-[1px]">
                {currency}
                {priceObj?.[size] ?? 0}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Item;
