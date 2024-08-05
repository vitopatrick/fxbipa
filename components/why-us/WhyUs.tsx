import {
  Clock,
  Shield,
  ShieldClose,
  Cuboid,
  Headphones,
  PlaneTakeoff,
} from "lucide-react";
import React from "react";

const whyUs = [
  {
    title: "Services Tailored To Your Needs",
    about: "Customized OTC solutions for seamless transactions",
    icon: <Cuboid size={50} strokeWidth={1.2} />,
  },
  {
    title: "Dedicated Tax Filing Assistance",
    about: "1-on-1 support to help you file your taxes",
    icon: <Headphones size={50} strokeWidth={1.2} />,
  },
  {
    title: "Multi-Time Zone Dedicated Support",
    about: "Personalized Assistance, wherever you are, whenever you need it",
    icon: <Clock size={50} strokeWidth={1.2} />,
  },
  {
    title: "100% Regulatory Compliance",
    about: "Fully compliant with Indian and EU regulations: FIU/VASP",
    icon: <Shield size={50} strokeWidth={1.2} />,
  },
  {
    title: "Safety and Security",
    about: "Enterprise-grade protocols ensure safe custody of all assets",
    icon: <ShieldClose size={50} strokeWidth={1.2} />,
  },
  {
    title: "Lightning-fast trades",
    about: "Industry-leading speed of trade execution",
    icon: <PlaneTakeoff size={50} strokeWidth={1.2} />,
  },
];

const WhyUs = () => {
  return (
    <section className="mt-8 bg-indigo-950 text-white">
      {/* container */}
      <div className="lg:w-[80%] p-6 mx-auto">
        <h4 className="text-center text-2xl lg:text-4xl font-medium">
          Why Choose bitpay?
        </h4>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {whyUs.map((us) => (
            <div
              key={us.title}
              className="space-y-3 shadow-md rounded-md bg-indigo-800/20 p-4 "
            >
              <div>{us.icon}</div>
              <h4 className="font-medium text-2xl">{us.title}</h4>
              <p>{us.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
