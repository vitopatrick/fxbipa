import React from "react";

type Props = {};

const AboutAgency = (props: Props) => {
  return (
    <div>
      {/* container flex */}
      <div className=" w-[80%] mx-auto">
        <div className=" col-span-2">
          <div className="w-full">
            <h4 className="font-headerTwo font-semibold text-2xl md:text-4xl my-3">
              One-Stop-Shop for Cryptocurrency Brokers: Our Comprehensive
              Services
            </h4>
            <p className="font-body font-light text-[0.9rem]">
              At bitpay, we are passionate about helping Cryptocurrency brokers
              succeed. Our comprehensive suite of services is designed to
              simplify operations, improve customer satisfaction, and ultimately
              increase profitability for our clients. With years of experience
              in the Cryptocurrency industry, we understand the challenges and
              opportunities that brokers face and are committed to providing the
              highest quality service and support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
