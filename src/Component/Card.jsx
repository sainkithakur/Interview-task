import React, { useState } from "react";
import {
  MdTrendingUp,
  MdOutlineDeliveryDining,
  MdFavoriteBorder,
} from "react-icons/md";

const Card = ({ item, handlePopup }) => {
  return (
    <>
      <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
        <div className="relative cursor-pointer">
          <img
            className="rounded-lg h-64 bg-cover w-full"
            src={`http://shopadmin.vipswallet.com/${item?.ImageThumbURL1}`}
            alt=""
          />
          <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
            Sale
          </h2>
          <MdTrendingUp className="absolute top-3 right-3" />
        </div>
        <div className="p-2">
          <div className="space-y-0.5">
            <h2 className="font-semibold">{item?.Name?.slice(0, 25)}...</h2>
            <h2 className="space-x-2 items-center">
              <span className="text-blue-500 text-lg font-medium">
                ₹{item?.SalePrice}
              </span>
              <span className="line-through text-sm">₹{item?.Price}</span>
              <span className="text-red-800 font-medium">
                ({item?.CostPrice}% Off)
              </span>
            </h2>
            <h2 className="flex items-center space-x-2">
              <MdOutlineDeliveryDining className=" text-xl" />
              <h2> Delivery by {item?.DeliveryEnd}</h2>
            </h2>
          </div>
          <div className="flex mt-4 space-x-3 items-center justify-between">
            <button
              onClick={() => handlePopup(item)}
              className="border-[rgb(202,48,96)] uppercase border rounded text-[rgb(202,48,96)]  py-2.5 px-5"
            >
              Quick View
            </button>
            <button className="border-[rgb(202,48,96)] border rounded text-[rgb(202,48,96)] ">
              <MdFavoriteBorder className="my-2.5 mx-4 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
