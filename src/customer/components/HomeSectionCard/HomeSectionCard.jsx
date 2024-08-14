import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg mx-3 border overflow-hidden ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full "
          src={product.imageUrl}
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-medium  text-gray-900">{product.brand}</h3>
        <p className="text-sm mt-2">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
