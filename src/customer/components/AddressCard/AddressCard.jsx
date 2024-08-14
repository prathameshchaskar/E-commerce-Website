import React from "react";

const AddressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Prathamesh Chaskar</p>

        <p>
          streetAddress city zip 
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>mobile number</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;