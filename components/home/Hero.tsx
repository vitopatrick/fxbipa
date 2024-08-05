import Link from "next/link";
import React from "react";

type Props = {};

const achivments = [
  {
    id: 1,
    text: "$25M+",
    props: "Assets Under Management",
  },
  {
    id: 2,
    text: "2M+",
    props: "Invested Users",
  },
  {
    id: 3,
    text: "96%",
    props: "Customer Satisfaction Score",
  },
];

const Hero = (props: Props) => {
  return (
    <div
      className="mb-5"
      style={{
        background:
          "url('https://images.pexels.com/photos/248933/pexels-photo-248933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="text-center bg-black/30 w-full py-[4rem] px-4">
        <h3 className="text-4xl lg:text-6xl font-medium text-white">
          Buy, Sell & Hold Crypto
        </h3>
        <div className="space-y-4 my-6">
          <p className="text-neutral-100">
            Invest in 350+ Coins and crypto baskets with actionable insights at
            your fingertips
          </p>
          <p className="text-white">
            We are Financial Intelligence Unit (FIU) registered.
          </p>
        </div>
        <Link
          href="/get-started"
          className="inline-block bg-purple-800 text-white px-6 py-3 rounded-lg my-8"
        >
          Get Started
        </Link>
        <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
          {achivments.map((c) => (
            <div key={c.id} className="space-y-3">
              <h4 className="text-2xl lg:text-4xl font-medium text-neutral-100">
                {c.text}
              </h4>
              <p className="text-neutral-100">{c.props}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
