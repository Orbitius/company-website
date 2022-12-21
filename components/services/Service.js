import React from "react";
import { serviceItem } from "./ServiceItem";

const Service = () => {
  return (
    <div className="px-2 my-6 560:px-4 760:px-6 960:px-16">
      <div className="text-center mb-5">
        <h1 className="text-xl mb-2 underline underline-offset-2 460:text-2xl">Services</h1>
        <p className="text-xl font-medium 460:text-2xl">
          The service we offer is specifically <br className="hidden 460:block" />{" "}
          designed to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 760:gap-6 960:gap-8 560:grid-cols-2 1080:grid-cols-3">
        {
        serviceItem.map((item) => (
          <div className="p-4 rounded-md" style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <img src={item.icon} alt="services" className="w-14" />
            <div className="my-2">
              <h3 className="text-lg font-medium mb-2 460:text-xl">{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Service;
