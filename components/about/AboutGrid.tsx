import React from "react";

const AboutGrid = () => {
  return (
    <div className="lg:w-[90%] mx-auto p-3">
      <div className="space-y-3">
        <h4 className="font-medium text-3xl lg:text-4xl text-purple-950">
          Products that take us a step further
        </h4>
        <p className="text-neutral-400">
          We are building a holistic ecosystem of investment platforms and
          learning <br /> initiatives to enable investors of all kinds.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-4">
        <div className="row-span-2 rounded-lg shadow-lg">
          <div>
            <img
              src="https://images.mudrex.com/homepage-web/saber-desktop.svg"
              alt="logo"
            />
          </div>
          <h1 className="p-3 text-purple-800 font-medium text-3xl">
            Saber.Money
          </h1>
          <p className="p-3 text-neutral-400 leading-loose">
            Lightning fast Onramp & Offramp for India. Industry leading success
            rate, fully compliant, and lowest end user prices. Powering crypto
            Onramp/Offramp for Flipkart: India’s biggest e-commerce platform.
          </p>
        </div>
        <div className="col-span-2 flex gap-4 lg:items-center px-4 rounded-lg shadow-lg flex-col lg:flex-row p-4">
          <div className="lg:flex-1">
            <h1 className=" text-purple-800 font-medium text-3xl">JediSwap</h1>
            JediSwap is an Automated Market Maker, built on the StarkNet
            blockchain. It allows DeFi enthusiasts to buy and sell
            cryptocurrencies efficiently.
          </div>

          <img
            src="https://images.mudrex.com/homepage-web/jedi-img.svg"
            alt="image"
          />
        </div>
        <div className="rounded-lg shadow-lg p-3 flex items-center col-span-2 gap-6 flex-col lg:flex-row">
          <img
            src="https://bitpay.com/_nuxt/img/bitpay-logo-blue.1c0494b.svg"
            alt="image"
            className="w-[200px]"
          />
          <div className="flex-1">
            <h1 className="p-3 text-purple-800 font-medium text-3xl">
              Bit Pay Prime
            </h1>
            Premium white-glove global OTC services catering to institutions and
            high-net-worth individuals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
