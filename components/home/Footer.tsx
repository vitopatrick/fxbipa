import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white">
      {/* CopyRight */}
      <div className=" p-4 text-center">
        <p className="font-body text-sm font-light">
          © 2023 All Rights Reserved | bitpay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
